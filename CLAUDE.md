# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 项目概述

这是**烙馍网游戏导航**——一个静态网站，托管了一系列浏览器小游戏，部署地址为 `https://games.luomor.com`。

仓库仅包含预构建的静态资源——没有源代码、构建工具或框架配置。`public/` 中的每个文件都可以直接部署。

## 目录结构

```
public/
├── index.html                  # 主入口页面（Vite 打包的 Vue SPA）
├── assets/
│   ├── games.json              # 游戏目录注册表（新增游戏在此注册）
│   ├── index.*.js              # 主应用打包文件
│   └── index.*.css             # 主样式表
├── <游戏名称>/                  # 每个游戏是一个独立的子目录
│   └── index.html              # 游戏入口页面
└── favicon.ico, logo.jpg       # 站点资源
```

## 关键文件

| 文件 | 用途 |
|------|------|
| `public/index.html` | 主门户入口页面，加载打包后的 Vue 应用 |
| `public/assets/games.json` | 游戏目录——包含标题、描述、图标和 URL 的 JSON 数组 |
| `docs/README.md` | 项目的 TODO/任务清单 |

## 新增游戏

1. 将游戏文件放入 `public/<游戏名称>/` 目录
2. 在 `public/assets/games.json` 中注册：
   ```json
   {
     "title": "游戏名称",
     "description": "简短描述",
     "images": [{ "src": "https://games.luomor.com/assets/Games-icon.png" }],
     "url": "https://games.luomor.com/<游戏名称>/"
   }
   ```
3. 提交并部署静态文件

## 部署方式

这是一个纯静态站点——通过任意 HTTP 服务器（Nginx、GitHub Pages、CDN 等）直接托管 `public/` 目录即可，无需构建步骤。

## 统计

主入口页面接入了：
- Google Analytics 4 (`G-87JET1FJ65`)
- 百度统计（行内脚本中的追踪 ID）

## 注意事项

- 所有提交信息均为通用的 "update"——查看文件 diff 了解具体变更
- 部分游戏在目录中标记了 `(pc)` 或 `(mobile)` 以区分平台
- `docs/` 目录包含任务笔记和日志文件
