/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack to use webpack instead
  // This avoids workspace root detection issues
  output: 'standalone', // 启用独立输出，优化 Docker 镜像大小
}

module.exports = nextConfig
