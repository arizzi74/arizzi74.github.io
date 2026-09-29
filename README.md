# Project collection homepage

Static homepage for https://arizzi74.github.io/. Plain HTML, CSS, and a small progressive-enhancement script; no build step or runtime dependencies. All projects and links remain available without JavaScript.

## Preview

From this directory, run `python3 -m http.server 8000` and visit http://localhost:8000.

## Publish

The root user site lives in the **arizzi74/arizzi74.github.io** repository. GitHub Pages uses **GitHub Actions** as its deployment source.

Push changes to `main` to run **Deploy GitHub Pages** automatically. The workflow can also be started manually from the Actions tab.

The included workflow deploys only the public site files and assets. Existing project sites retain their own paths, including `/Smart-Stage/` and `/Codex-Telegram-Gateway/`.

## Update projects

Edit the project cards in `index.html`. Set `data-category` to `software` or `hardware`; label forks with the existing fork badge. Projects with a website have both website and repository links. All others link directly to their repository. When adding or removing projects, update their visible index numbers in the HTML as well.

The collection includes all 10 public repositories returned by the GitHub API on 2026-09-28, including two forks. Descriptions were checked against the public READMEs and repository descriptions. The homepage repository itself is intentionally not a project card.

## Design and assets

The palette follows Smart Stage and Codex Telegram Gateway: near-black backgrounds, muted mint accents, and restrained lavender. The layout takes inspiration from https://colelevy08.github.io/Portfolio2026/ through large serif headings, monospace labels, generous spacing, and fine dividers. It uses alternating screenshot features and numbered repository entries, with project-focused copy. Fonts use local system serif, sans-serif, and monospace stacks. Screenshots are local copies from the live project websites and show sample data:

- `assets/smart-stage.png`: https://arizzi74.github.io/Smart-Stage/assets/admin.png
- `assets/smart-stage-remote.png`: https://arizzi74.github.io/Smart-Stage/assets/remote.png
- `assets/telegram-gateway.png`: https://arizzi74.github.io/Codex-Telegram-Gateway/assets/screenshots/webui-desktop.png

No external fonts, analytics, client-side API calls, or third-party scripts are required.
