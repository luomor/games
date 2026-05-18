# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **烙馍网游戏导航** (Laomo Games Portal) — a static website hosting a collection of browser-based mini-games, deployed at `https://games.luomor.com`.

The repository contains only pre-built static assets — there is no source code, build tooling, or framework configuration. Every file in `public/` is ready-to-serve as-is.

## Directory Structure

```
public/
├── index.html                  # Main portal page (Vite-bundled Vue SPA)
├── assets/
│   ├── games.json              # Game catalog registry (add new games here)
│   ├── index.*.js              # Main application bundle
│   └── index.*.css             # Main stylesheet
├── <game-name>/                # Each game is a self-contained subdirectory
│   └── index.html              # Game entry point
└── favicon.ico, logo.jpg       # Site assets
```

## Key Files

| File | Purpose |
|------|---------|
| `public/index.html` | Main portal entry point — loads bundled Vue app |
| `public/assets/games.json` | Game catalog — JSON array of games with title, description, icon, and URL |
| `docs/README.md` | TODO/task list for the project |

## Adding a New Game

1. Place the game files in `public/<game-name>/`
2. Register it in `public/assets/games.json`:
   ```json
   {
     "title": "游戏名称",
     "description": "简短描述",
     "images": [{ "src": "https://games.luomor.com/assets/Games-icon.png" }],
     "url": "https://games.luomor.com/<game-name>/"
   }
   ```
3. Commit and deploy the static files

## Deployment

This is a static site — deploy by serving the `public/` directory via any HTTP server (Nginx, GitHub Pages, CDN, etc.). No build step required.

## Analytics

The main page includes:
- Google Analytics 4 (`G-87JET1FJ65`)
- Baidu Analytics (tracking ID in inline script)

## Notes

- All commit messages use generic "update" — refer to file diffs for change context
- Some games are labeled `(pc)` or `(mobile)` in the catalog for platform targeting
- The `docs/` directory contains task notes and a log file
