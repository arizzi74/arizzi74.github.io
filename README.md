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

The visual style matches the MACT project site: dark blue backgrounds and panels, cyan and purple accents, green status indicators, and the same text, muted-text, and border colors. Headings and body copy share MACT's local system sans-serif stack and heading weights; technical labels use its monospace stack. Rounded panels, buttons, and keyboard focus outlines follow the same treatment. The collection keeps its alternating screenshot features and numbered repository entries, with project-focused copy. Screenshots are local copies from the project websites and show sample data:

- `assets/smart-stage.png`: https://arizzi74.github.io/Smart-Stage/assets/admin.png
- `assets/smart-stage-remote.png`: https://arizzi74.github.io/Smart-Stage/assets/remote.png
- `assets/mact.png`: https://arizzi74.github.io/MACT/assets/screenshots/webui-desktop.png — actual MACT WebUI with fictional demo sessions, copied from the MACT project site assets on 2026-10-23.

MACT is Multi Agent Control Tower. Its 0.7.0 card presents current Codex and Claude Code support through dedicated workers, with session switching, reported usage, and web or Telegram access across servers. It distinguishes Codex steering from queued Claude follow-ups; shared local terminal attachment and project archive/restore are Codex features. The card links to the 0.7.0 release and the MACT website for installation and provider details. Context visibility helps users manage their workflow; it does not imply automatic token savings.

No external fonts, analytics, client-side API calls, or third-party scripts are required.
