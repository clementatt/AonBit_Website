/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack to use webpack instead
  // This avoids workspace root detection issues
}

module.exports = nextConfig
