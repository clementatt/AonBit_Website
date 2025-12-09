# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖（包括 devDependencies，因为构建需要）
RUN npm ci

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 生产运行阶段
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 从构建阶段复制必要文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 设置正确的权限
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

