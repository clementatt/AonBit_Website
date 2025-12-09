/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack to use webpack instead
  // This avoids workspace root detection issues
  // 暂时不使用 standalone 模式，使用标准模式更稳定
  // output: 'standalone',
  
  // 跳过构建时的类型检查和 lint 错误（这些错误不影响运行时）
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
