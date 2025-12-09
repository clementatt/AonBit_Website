/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack to use webpack instead
  // This avoids workspace root detection issues
  // 暂时不使用 standalone 模式，使用标准模式更稳定
  // output: 'standalone',
}

module.exports = nextConfig
