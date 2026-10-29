# BlueCodeFlow

卡其色 + 蓝色代码流风格的静态个人作品集站点。纯 HTML / CSS / JavaScript，**零依赖、零构建**，双击即可打开。

## 本地预览

直接双击 `index.html`，或在本目录启动一个静态服务器：

```bash
python -m http.server 8000
# 打开 http://127.0.0.1:8000
```

## 页面结构

| 文件 | 说明 |
| --- | --- |
| `index.html` | 首页：白光辉光开场、卡其色飘落背景、滚动视差 |
| `projects.html` | 开源项目列表，支持分类筛选 |
| `blog.html` / `post.html` | 博客列表与文章详情 |
| `about.html` | 关于我、时间线、联系方式 |
| `css/style.css` | 全站单文件样式（CSS 变量主题） |
| `js/data.js` | 项目与文章数据（改这里即可换内容） |
| `js/flow.js` | 首页飘落组件与滚动动效 |
| `js/intro.js` | 首屏白光开场动画 |
| `js/main.js` | 导航、筛选、通用交互 |
| `assets/grassland.jpg` | 开场壁纸 |

## 说明

- 页面中的项目、Star 数、邮箱、时间线等均为**演示内容**，正式使用前请替换为真实信息。
- 字体通过 Google Fonts 异步加载，断网时会自动回退到系统字体，不影响使用。
- 兼容主流桌面与移动浏览器，支持键盘焦点样式。

## License

内容与代码仅供学习参考。
