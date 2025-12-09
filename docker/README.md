# Docker 配置

此文件夹包含 Docker 相关的配置文件。

## 文件说明

- `Dockerfile` - Docker 镜像构建文件
- `.dockerignore` - Docker 构建时忽略的文件列表

## 使用方法

### 本地构建

```bash
# 在项目根目录执行
docker build -f docker/Dockerfile -t aonbit-website:latest .
```

### 运行容器

```bash
docker run -p 3000:3000 aonbit-website:latest
```

## 构建说明

- 使用多阶段构建优化镜像大小
- 支持预渲染错误但继续构建（动态页面）
- 使用非 root 用户运行，提高安全性

