# Project collection homepage

Static homepage for https://arizzi74.github.io/. Plain HTML, CSS, and a small progressive-enhancement script; no build step or runtime dependencies. All projects and links remain available without JavaScript.

## Preview

From this directory, run `python3 -m http.server 8000` and visit http://localhost:8000.

## Publish

The root user site lives in the **arizzi74/arizzi74.github.io** repository. GitHub Pages publishes from the root of the `main` branch.

Push changes to `main` to publish automatically. GitHub's **pages build and deployment** workflow handles deployment; no custom build workflow is needed.

The `.nojekyll` file keeps this a plain static site. Existing project sites retain their own paths, including `/Smart-Stage/` and `/MACT/`.

## Update projects

Edit the project cards in `index.html`. Set `data-category` to `software` or `hardware`; label forks with the existing fork badge. Projects with a website have both website and repository links. All others link directly to their repository. When adding or removing projects, update their visible index numbers in the HTML as well.

The collection includes all 10 public repositories returned by the GitHub API on 2026-09-28, including two forks. Descriptions were checked against the public READMEs and repository descriptions. The homepage repository itself is intentionally not a project card.

## Design and assets

The palette follows Smart Stage and MACT: near-black backgrounds, muted mint accents, and restrained lavender. The layout takes inspiration from https://colelevy08.github.io/Portfolio2026/ through large serif headings, monospace labels, generous spacing, and fine dividers. It uses alternating screenshot features and numbered repository entries, with project-focused copy. Fonts use local system serif, sans-serif, and monospace stacks. Screenshots are local copies from the project websites and show sample data:

- `assets/smart-stage.png`: https://arizzi74.github.io/Smart-Stage/assets/admin.png
- `assets/smart-stage-remote.png`: https://arizzi74.github.io/Smart-Stage/assets/remote.png
- `assets/mact.png`: https://arizzi74.github.io/MACT/assets/screenshots/webui-desktop.png — actual MACT WebUI with fictional demo sessions, copied from the MACT project site assets on 2026-10-23.

MACT is Multi Agent Control Tower, the project's current name. Its card describes the supported Codex workflow: session switching, context usage visibility, terminal-style chat, access across servers through the web or Telegram, and local Codex CLI support. Context visibility helps users manage their workflow; it does not imply automatic token savings.

No external fonts, analytics, client-side API calls, or third-party scripts are required.
