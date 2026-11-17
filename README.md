# about-antio

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Curriculum

The [CV page](./src/pages/cv.tsx) uses the shared
[CVTemplate](./src/components/CVTemplate/index.tsx).
The single TSX page uses `Translate` for rendered text and `translate` for
string props, with Italian defaults and English messages in
[i18n/en/code.json](./i18n/en/code.json). No separate translated TSX page or
manual locale selection is needed.
Each `CVSection` requires a stable `id` and a localized `title`; these generate
the desktop outline and collapsible mobile index automatically.
Keep section IDs consistent across languages so anchor links survive locale changes.
Shared interface labels use the same translation catalog.
The localized PDF downloads are served from [static/resources](./static/resources).

## Links

[References](./references.md)