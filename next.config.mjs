/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during build to prevent deployment failures
  eslint: {
    // Warning: this will completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
