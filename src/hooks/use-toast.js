import { useState, useEffect, useCallback } from 'react';
// import Toast from '@/components/ui/Toast';

// Maximum number of toasts to show at once
const TOAST_LIMIT = 5;
// Default duration for auto-dismiss (in milliseconds)
const DEFAULT_DURATION = 5000;

// Generate unique ID for each toast
let toastId = 0;
const genId = () => (toastId++).toString();

/**
 * Toast Manager Component
 * Renders all active toasts and handles their lifecycle
 */
export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  // Add a new toast
  const addToast = useCallback(({ id, ...toast }) => {
    setToasts(prevToasts => {
      // If toast with this ID already exists, update it
      const existingIndex = prevToasts.findIndex(t => t.id === id);
      if (existingIndex >= 0) {
        const updatedToasts = [...prevToasts];
        updatedToasts[existingIndex] = { ...updatedToasts[existingIndex], ...toast };
        return updatedToasts;
      }
      // Otherwise, add new toast (respecting the limit)
      return [{ id, ...toast }, ...prevToasts].slice(0, TOAST_LIMIT);
    });
  }, []);

  // Remove a toast by ID
  const removeToast = useCallback((id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  // Dismiss a toast (starts exit animation)
  const dismissToast = useCallback((id) => {
    setToasts(prevToasts => 
      prevToasts.map(toast => 
        toast.id === id ? { ...toast, isExiting: true } : toast
      )
    );
    // Remove from DOM after animation completes
    setTimeout(() => removeToast(id), 300);
  }, [removeToast]);

  // Handle toast updates from the toast function
  useEffect(() => {
    const handleToast = (event) => {
      const { id, ...toast } = event.detail;
      addToast({ id, ...toast });
      
      // Auto-dismiss if duration is set
      if (toast.duration !== false && toast.duration !== 0) {
        setTimeout(() => {
          dismissToast(id);
        }, toast.duration || DEFAULT_DURATION);
      }
    };

    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, [addToast, dismissToast]);

  // Render all active toasts
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2 w-full max-w-sm">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          duration={toast.duration}
          onDismiss={() => dismissToast(toast.id)}
        />
      ))}
    </div>
  );
};

/**
 * Custom hook to show toasts
 * @returns {Object} Toast functions
 */
const useToast = () => {
  // Show a new toast
  const toast = useCallback(({ title, description, variant = 'default', duration = DEFAULT_DURATION }) => {
    const id = genId();
    const event = new CustomEvent('show-toast', {
      detail: { id, title, description, variant, duration }
    });
    window.dispatchEvent(event);
    
    // Return methods to update or dismiss the toast
    return {
      id,
      update: (updates) => {
        const updateEvent = new CustomEvent('show-toast', {
          detail: { id, ...updates }
        });
        window.dispatchEvent(updateEvent);
      },
      dismiss: () => {
        const dismissEvent = new CustomEvent('dismiss-toast', { detail: { id } });
        window.dispatchEvent(dismissEvent);
      }
    };
  }, []);

  // Helper methods for different toast variants
  toast.success = (title, description, duration) => 
    toast({ title, description, variant: 'success', duration });
    
  toast.error = (title, description, duration) => 
    toast({ title, description, variant: 'error', duration });
    
  toast.warning = (title, description, duration) => 
    toast({ title, description, variant: 'warning', duration });
    
  toast.info = (title, description, duration) => 
    toast({ title, description, variant: 'info', duration });

  return { toast };
};

export default useToast;
