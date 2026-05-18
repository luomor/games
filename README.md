# 烙馍网游戏导航

一个静态游戏导航网站，托管了一系列浏览器小游戏。

**访问地址**: https://games.luomor.com

## 项目简介

本项目是一个纯静态站点，无需构建步骤，直接将 `public/` 目录部署到 HTTP 服务器即可。主入口页面基于 Vue SPA 构建，通过 `games.json` 注册并展示所有小游戏。

## 目录结构

```
public/
├── index.html                  # 主入口页面
├── assets/
│   ├── games.json              # 游戏目录注册表
│   ├── index.*.js              # 主应用打包文件
│   └── index.*.css             # 主样式表
└── <游戏名称>/                  # 每个游戏是独立的子目录
```

## 游戏列表

| 游戏 | 说明 | 平台 |
|------|------|------|
| [猪了个猪](https://games.luomor.com/zhulegezhu/) | 消除类游戏 | 全平台 |
| [卡牌泡泡龙](https://games.luomor.com/monsu-bubble-game/) | 泡泡龙 | PC |
| [2048](https://games.luomor.com/2048/) | 经典2048 | 全平台 |
| [3D魔方](https://games.luomor.com/cuber/) | 三维魔方 | 全平台 |
| [算数](https://games.luomor.com/math/) | 数学计算 | 全平台 |
| [甜言蜜语](https://games.luomor.com/sweet-words/) | 情话生成 | 全平台 |
| [翻牌](https://games.luomor.com/memory/) | 记忆翻牌 | 全平台 |
| [坦克大战](https://games.luomor.com/battle-city/) | 经典FC游戏 | PC |
| [猜灯谜](https://games.luomor.com/lantern-festival/riddles.html) | 元宵节灯谜 | PC |
| [一起答题](https://games.luomor.com/quiz-game/) | 答题游戏 | 移动端 |
| [俄罗斯方块](https://games.luomor.com/tetris/) | 经典方块 | 全平台 |
| [合成大西瓜](https://games.luomor.com/big-watermelon/) | 物理合成 | 全平台 |
| [口红游戏](https://games.luomor.com/lipstick-game/) | 口红挑战 | 全平台 |
| [贪吃蛇](https://games.luomor.com/snake-face-control/) | 人脸控制 | PC |
| [抢红包](https://games.luomor.com/car/) | 抢红包 | 全平台 |

## 新增游戏

1. 将游戏文件放入 `public/<游戏名称>/` 目录
2. 在 `public/assets/games.json` 中注册新条目
3. 提交并部署

## 部署

直接部署 `public/` 目录，支持 Nginx、GitHub Pages、CDN 等任意静态文件服务。

## 统计

- Google Analytics 4 (`G-87JET1FJ65`)
- 百度统计
