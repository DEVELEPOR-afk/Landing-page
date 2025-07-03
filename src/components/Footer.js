'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-violet-500/10 pt-12 pb-8 text-lavender-400/90 relative">
      <div className="absolute top-0 left-1/2 w-32 h-1 bg-gradient-to-r from-violet-500/40 to-blue-500/40 rounded-full -translate-x-1/2" />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Brand, trust, social */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/file.svg" alt="MoneyFox Logo" className="w-10 h-10" />
            <span className="font-bold text-white text-2xl tracking-tight">MoneyFox</span>
          </div>
          <p className="mb-4 max-w-xs text-sm text-lavender-400/80">Elite trading mentorship for ambitious traders. Join, learn, and grow with the best.</p>
          <div className="flex gap-3 mb-4">
            <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-blue-400 transition">
              {/* Twitter SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.64c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 6.463 4.1 4.845 1.671 2.149c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 0 1 .96 7.104v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.416A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.006-.425-.017-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="https://discord.com/" target="_blank" rel="noopener" aria-label="Discord" className="hover:text-indigo-400 transition">
              {/* Discord SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.074.074 0 0 0-.079.037c-.341.607-.723 1.396-.989 2.021a18.217 18.217 0 0 0-5.466 0 12.227 12.227 0 0 0-.993-2.021.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.684 4.369a.069.069 0 0 0-.032.027C.533 8.159-.319 11.81.099 15.418a.082.082 0 0 0 .028.056c2.104 1.548 4.148 2.489 6.16 3.12a.077.077 0 0 0 .084-.027c.472-.65.892-1.34 1.248-2.073a.076.076 0 0 0-.041-.105c-.676-.256-1.315-.571-1.918-.936a.077.077 0 0 1-.008-.127c.13-.098.26-.2.382-.304a.075.075 0 0 1 .079-.01c4.026 1.836 8.384 1.836 12.377 0a.075.075 0 0 1 .08.009c.122.104.252.206.382.304a.077.077 0 0 1-.006.127c-.603.365-1.242.68-1.918.936a.076.076 0 0 0-.04.106c.36.733.78 1.423 1.247 2.073a.076.076 0 0 0 .084.028c2.013-.631 4.057-1.572 6.161-3.12a.077.077 0 0 0 .028-.056c.5-4.177-.838-7.797-3.451-11.022a.062.062 0 0 0-.031-.027zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.334.955-2.419 2.156-2.419 1.21 0 2.175 1.085 2.156 2.419 0 1.334-.946 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.334.955-2.419 2.156-2.419 1.21 0 2.175 1.085 2.156 2.419 0 1.334-.946 2.419-2.156 2.419z"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-sky-400 transition">
              {/* LinkedIn SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.968v5.7h-3v-10h2.885v1.367h.041c.402-.762 1.384-1.563 2.849-1.563 3.046 0 3.608 2.006 3.608 4.617v5.579z"/></svg>
            </a>
          </div>
          {/* Trust badges */}
          <div className="flex gap-3 mb-6">
            <img src="/vercel.svg" alt="Vercel Hosted" className="h-7" title="Hosted on Vercel" />
            <img src="/globe.svg" alt="Secure & Global" className="h-7" title="Secure & Global" />
          </div>
        </div>
        {/* Right: Newsletter, links */}
        <div>
          <div className="mb-4">
            <span className="font-semibold text-white text-lg">Stay Updated</span>
            <p className="text-sm text-lavender-400/80 mb-2">Get trading tips & exclusive invites. No spam.</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-navy-800/60 border border-violet-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-blue-500 hover:to-violet-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm mb-2 mt-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <a href="mailto:support@moneyfox.com" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-xs text-center text-lavender-400/70">
        &copy; {new Date().getFullYear()} MoneyFox. All rights reserved.
      </div>
    </footer>
  );
}
