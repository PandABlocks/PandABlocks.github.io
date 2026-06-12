# pandablocks.github.io

The PandABlocks landing page. A single, self-contained static page — no build
step, no framework, no dependencies to install.

## Files

- `index.html` — the whole page (HTML + CSS inline). This is the only file you edit.
- `panda.svg` — the logo, used in the nav, hero, footer and favicon.

## Deploy to pandablocks.github.io

1. Put both files in the **root** of the `pandablocks.github.io` repository.
2. In the repo: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**. Branch: `main` (or `master`), folder: `/ (root)`.
4. Save. The site goes live at `https://pandablocks.github.io` within a minute or two.

That's it. To update, edit `index.html`, commit, and push — Pages redeploys automatically.

## Editing content (no web experience needed)

Open `index.html` and look for `<!-- EDIT ... -->` comments. The things you are
most likely to change:

- **Links** — every repo / GitHub link is a plain `href="..."`. Change the URL,
  done.
- **Repo cards** — in the `ECOSYSTEM` section, each card is a self-contained block.
  Copy one to add a sixth repo, or edit the `<h3>`, role line, and `<p>`.
- **Hardware cards** — in the `HARDWARE` section, same idea.
- **Wording** — headline, sub-text and descriptions are normal text between tags.
- **Colours / theme** — the `:root { ... }` block at the very top of the
  `<style>` section defines every colour and font in one place. Change `--signal`
  to reskin the accent, `--void` for the background, etc.

## Notes

- The animated "live wiring" diagram in the hero is one inline SVG. You never need
  to touch it, but if you want to, it's in the `SIGNATURE` block in the HTML.
- Fonts load from Google Fonts via a `<link>` in the `<head>`. If you need a fully
  offline build, download the fonts and update that link.
- Motion is disabled automatically for visitors who prefer reduced motion, and the
  layout is responsive down to phone widths.
