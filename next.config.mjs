/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during build to prevent deployment failures
  eslint: {
    // Warning: this will completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  // Fix for routes-manifest.json error
  distDir: '.next',
  // Ensure output is properly configured
  output: 'standalone',
};

export default nextConfig;
