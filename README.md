# SciCon Geophysics website prototype

This folder contains a self-contained static website prototype.

Custom domain: https://scicongeophysics.com/

GitHub Pages fallback: https://gruempker.github.io/scicon-geophysics-draft/

## Review locally

Open `index.html` in a modern browser. The main page and both legal pages work without a server or internet connection.

## Before publication

- Complete and legally review all marked fields in `imprint.html` and `privacy.html`.
- Remove the temporary `noindex` directive from the HTML and update `robots.txt` when the site is approved for search indexing.
- Confirm the final hosting provider and its privacy implications.
- Review all service wording and team details.
- Recompile `assets/css/styles.css` after changing Tailwind classes or `assets/css/source.css`.

The prototype deliberately contains no analytics, external fonts, third-party embeds, contact form, prices, client references, testimonials, or invented case studies.

The GitHub Pages draft is marked `noindex` and blocked in `robots.txt`. Replace these preview settings before a production launch.
