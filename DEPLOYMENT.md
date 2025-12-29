# 部署说明

## 域名配置

网站使用两个域名：
- **主域名**: `aonbit.co.jp` （主要使用）
- **备用域名**: `aonbit.jp` （自动跳转到 aonbit.co.jp）

## 域名跳转配置

### Apache 服务器

如果使用 Apache 服务器，`.htaccess` 文件已配置自动跳转：
- `aonbit.jp` → `aonbit.co.jp` (301 永久重定向)

确保 Apache 已启用 `mod_rewrite` 模块。

### Nginx 服务器

如果使用 Nginx，需要在配置文件中添加：

```nginx
server {
    listen 80;
    server_name aonbit.jp;
    return 301 https://aonbit.co.jp$request_uri;
}

server {
    listen 80;
    server_name aonbit.co.jp;
    # ... 其他配置
}
```

### Cloudflare 或其他 CDN

如果使用 Cloudflare 或其他 CDN 服务：
1. 在 DNS 设置中，将两个域名都指向同一个服务器
2. 在 CDN 的页面规则中设置：
   - `aonbit.jp/*` → 301 重定向到 `https://aonbit.co.jp/$1`

## SEO 注意事项

1. **规范 URL**: 所有页面应使用 `aonbit.co.jp` 作为主域名
2. **sitemap.xml**: 已配置为使用 `aonbit.co.jp`
3. **robots.txt**: 已配置为使用 `aonbit.co.jp`
4. **Google Search Console**: 建议只提交 `aonbit.co.jp` 作为主域名

## 文件清单

部署时需要上传的文件：
- 所有 `.html` 文件（根目录）
- `js/` 目录
- `sitemap.xml`
- `robots.txt`
- `.htaccess`（如果使用 Apache）

不需要上传：
- `zenbit/` 目录（参考文件）
- `.git/` 目录
- `README.md`、`DEPLOYMENT.md`（可选）
