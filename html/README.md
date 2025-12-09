# AonBit Website - HTML版本

这是AonBit网站的纯HTML版本，不需要Node.js环境，可以直接在浏览器中打开使用。

## 文件结构

```
html/
├── index.html          # 首页
├── business.html       # 事业内容页面
├── company.html        # 公司信息页面
├── contact.html        # 联系表单页面
├── recruit.html        # 招聘页面
├── js/
│   └── common.js       # 通用JavaScript文件（轮播、动画、菜单等）
├── css/                # CSS文件目录（可选）
└── images/             # 图片目录（可选）
```

## 使用方法

### 方式1：直接打开（最简单）
1. 直接用浏览器打开 `index.html` 文件
2. 所有页面都在本地，无需服务器

### 方式2：使用本地服务器（推荐，避免跨域问题）
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (如果有)
npx http-server

# PHP
php -S localhost:8000
```

然后在浏览器访问：`http://localhost:8000`

## 功能说明

### 1. 首页 (index.html)
- Hero轮播（3个slogan自动切换）
- Our Strength部分（3个服务卡片）
- Philosophy部分（Mission, Vision, Values）
- News部分

### 2. 事业内容页面 (business.html)
- 三个主要服务的详细介绍
- 技术栈展示

### 3. 公司信息页面 (company.html)
- 公司概要信息
- Google地图嵌入

### 4. 联系表单页面 (contact.html)
- 联系表单
- 填写完成后自动触发邮件客户端（使用mailto链接）
- 需要在 `contact.html` 中修改接收邮箱地址

### 5. 招聘页面 (recruit.html)
- 招聘信息展示

## 技术栈

- **HTML5** - 页面结构
- **Tailwind CSS** - 通过CDN使用，无需构建
- **原生JavaScript** - 所有交互功能

## 联系表单配置

联系表单使用 **mailto** 方式，填写完成后会自动打开用户的邮件客户端。

### 配置接收邮箱

在 `contact.html` 文件中，找到以下代码并修改邮箱地址：

```javascript
const recipientEmail = 'contact@aonbit.com' // 请修改为实际的接收邮箱
```

将 `contact@aonbit.com` 替换为您实际接收联系表单的邮箱地址即可。

### 工作方式

1. 用户填写表单
2. 点击"メールを開く"按钮
3. 系统自动打开用户的默认邮件客户端（如Outlook、Mail、Gmail等）
4. 邮件内容已自动填充：
   - 收件人：您设置的邮箱
   - 主题：【お問い合わせ】[件名] - [姓名]様
   - 正文：包含所有表单信息
5. 用户只需点击发送即可

### 优势

- ✅ 无需服务器或后端
- ✅ 无需配置SMTP
- ✅ 简单直接
- ✅ 用户可以看到邮件内容再发送

### 注意事项

- 用户需要有配置好的邮件客户端
- 某些浏览器可能会阻止自动打开邮件客户端（需要用户允许）
- 邮箱地址需要在 `contact.html` 中配置

## 自定义样式

如果需要修改样式，可以：
1. 直接修改HTML中的Tailwind类名
2. 添加自定义CSS文件到 `css/` 目录并在HTML中引用
3. 使用Tailwind的配置（需要构建，较复杂）

## 注意事项

- 所有图片路径都是相对路径，确保图片文件在正确的位置
- 如果使用CDN资源（如Tailwind CDN），需要网络连接
- 联系表单需要配置才能真实发送邮件

## 更新说明

从Next.js版本转换而来，保持了相同的设计和功能：
- ✅ 所有页面内容完整
- ✅ 响应式设计
- ✅ 滚动动画
- ✅ Hero轮播功能
- ✅ 移动端菜单
- ⚠️ 联系表单需要额外配置才能发送邮件

