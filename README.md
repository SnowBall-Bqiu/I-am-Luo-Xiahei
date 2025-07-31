# 罗小黑战记官方网站 - Cloudflare Workers部署

这是一个使用Cloudflare Workers部署的《罗小黑战记》主题静态网站。

## 项目简介

本项目是一个关于《罗小黑战记》动画的展示网站，包含以下页面：
- 首页 - 剧情简介和演职员表
- 角色介绍 - 主要角色信息
- 可爱头像 - 角色头像展示
- 角色配音 - 配音演员信息
- 视频赏析 - 相关视频内容

## 技术栈

- **前端**: HTML5, CSS3, JavaScript
- **部署**: Cloudflare Workers
- **构建工具**: Wrangler CLI

## 快速开始

### 方式一：GitHub 直接部署（推荐）

✅ **无需构建命令，直接部署静态文件**

1. 将项目推送到GitHub仓库
2. 在Cloudflare Workers控制台中选择"从GitHub部署"
3. 连接你的GitHub仓库
4. 选择分支（通常是main或master）
5. **构建命令留空**（因为是纯静态网站）
6. **输出目录设置为根目录 `/`**
7. 点击部署即可

### 方式二：本地命令行部署

#### 1. 安装依赖

```bash
npm install
```

#### 2. 配置Wrangler

首先需要登录Cloudflare账户：

```bash
npx wrangler login
```

#### 3. 本地开发

```bash
npm run dev
```

这将启动本地开发服务器，你可以在浏览器中预览网站。

#### 4. 部署到Cloudflare Workers

##### 部署到测试环境

```bash
npm run deploy:staging
```

##### 部署到生产环境

```bash
npm run deploy:production
```

## 配置说明

### wrangler.toml

主要配置文件，包含以下设置：

- `name`: Workers应用名称
- `main`: 入口文件路径
- `compatibility_date`: 兼容性日期
- `site.bucket`: 静态文件目录
- `env`: 环境配置（staging/production）

### 自定义域名

如果你有自定义域名，请在`wrangler.toml`中修改`route`配置：

```toml
[env.production]
name = "luoxiaohei-website"
route = "your-domain.com/*"
```

## 项目结构

```
.
├── css/                 # 样式文件
│   ├── common.css
│   ├── index.css
│   └── style.css
├── image/               # 图片资源
├── video/               # 视频资源
├── web/                 # 子页面
│   ├── cute-photo.html
│   ├── dub.html
│   ├── role-info.html
│   └── video.html
├── src/                 # Workers源码
│   └── index.js
├── index.html           # 首页
├── package.json         # 项目配置
├── wrangler.toml        # Wrangler配置
└── README.md           # 项目说明
```

## 可用脚本

- `npm run dev` - 启动本地开发服务器
- `npm run deploy` - 部署到默认环境
- `npm run deploy:staging` - 部署到测试环境
- `npm run deploy:production` - 部署到生产环境
- `npm run preview` - 预览部署
- `npm run tail` - 查看Workers日志
- `npm run format` - 格式化代码

## 性能优化

- 使用Cloudflare CDN全球加速
- 自动压缩静态资源
- 设置适当的缓存策略
- 添加安全头部

## 安全特性

- XSS保护
- 内容类型嗅探保护
- 点击劫持保护
- 引用策略设置

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 联系方式

如有问题，请联系项目维护者。