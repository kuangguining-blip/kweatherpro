# KWeatherPro - 全球天气预报

🌍 全球7大洲100+城市机场实时天气 | 7天预报 | 逐小时预报 | 免费开放

## 🚀 部署到 GitHub Pages

### 1. 创建 GitHub 仓库
1. 登录 [GitHub](https://github.com)
2. 点击 **New Repository**，名称填 `kweatherpro`
3. 设为 **Public**（公开仓库才能使用免费的 GitHub Pages）
4. 点击 **Create Repository**

### 2. 上传代码
```bash
cd C:/Users/86188/Desktop/GlobalWeatherPro
git init
git add .
git commit -m "KWeatherPro 初始版本"
git branch -M main
git remote add origin https://github.com/你的用户名/kweatherpro.git
git push -u origin main
```

### 3. 启用 GitHub Pages
1. 进入仓库 → **Settings** → **Pages**
2. Source 选 **Deploy from a branch**
3. Branch 选 **main**，文件夹选 **/ (root)**
4. 点击 **Save**
5. 等待 1-2 分钟，网站即可通过 `https://你的用户名.github.io/kweatherpro/` 访问

### 4. 绑定自定义域名 KWeatherPro.com
1. 购买域名：推荐 [Cloudflare](https://www.cloudflare.com/products/registrar/) 或 [Namecheap](https://www.namecheap.com)
2. 在域名 DNS 设置中添加 CNAME 记录：
   ```
   类型: CNAME
   名称: @
   值: 你的用户名.github.io
   ```
3. 在 GitHub 仓库 **Settings** → **Pages** → **Custom domain** 中填入 `kweatherpro.com`
4. 勾选 **Enforce HTTPS**

### 5. 提交搜索引擎收录
- [Google Search Console](https://search.google.com/search-console/) — 添加 `kweatherpro.com`，验证所有权，提交 sitemap
- [百度站长平台](https://ziyuan.baidu.com/) — 添加网站，验证所有权

## 📁 文件结构

```
kweatherpro/
├── index.html       # 主页面（含 CSS + JS）
├── manifest.json    # PWA 配置
├── sw.js            # Service Worker（离线缓存）
├── _config.yml      # GitHub Pages 配置
├── .gitignore       # Git 忽略规则
├── server.py        # [开发用] 本地代理服务器
├── 启动.bat          # [开发用] Windows 一键启动
└── README.md        # 说明文档
```

## 💰 费用

| 项目 | 费用 |
|---|---|
| 域名 KWeatherPro.com | ~¥70-100/年 |
| GitHub Pages 托管 | 免费 |
| Cloudflare CDN/DNS | 免费 |
| Open-Meteo API | 免费 |
| **总计** | **~¥70-100/年** |

## 数据来源

使用 [Open-Meteo API](https://open-meteo.com/)（免费无需API密钥）
