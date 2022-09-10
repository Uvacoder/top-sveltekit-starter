![](https://user-images.githubusercontent.com/4195550/147338199-cff47e80-f05c-4b3d-afe0-1c7b8aad08e4.png)

# Top SvelteKit Starter Template

The fastest and most comfortable development experience started template.  
Everything comes installed for a speedy staring with examples. Simply remove what you don't need and you are good to go :)

With 🧡 from [@ctwhome](https://github.com/ctwhome), feature complete (WIP) according to [@swyx](https://youtu.be/A8jkJTWacow?t=10554).

## Features

*   [x] Latest SvelteKit
    *   [x] ESR, File-based routing, components auto importing, modules, etc.
    *   [x] 🦾 TypeScript
    *   [x] 💻 .env settings environments
    *   [x] ⭐️ Format on save with ESLint (VSCode Settings file and WebStorm)
    *   [x] Vite 3
*   [x] PWA - [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa)
*   [x] [TailwindCSS 3](https://tailwindcss.com/) -
    *   [x] [DaisyUI](https://daisyui.com) - Theme CSS components for TailwindCSS
    *   [x] [Theme switcher](https://github.com/saadeghi/theme-change) - Custom theme and 22 themes to choose from.
*   [x] 📄  Styled Markdown HTML components and page routing
    *   [x] Render Svelte Components and HTML from markdown
    *   [x] Route-based \*.md pages
*   [x] ✨ All icons demand - +100.000 SVG icons completely customizable with Unplugin Icons
*   [ ] i18n Multi-language support 
*   [ ] Vitest (with JSDom and @testing-library/svelte)
*   [ ] SVG as a component (package)

### Extras

*   [ ] Supabase - WIP - Full stack development with Auth, Realtime, Storage, and of course PostgreSQL
*   [ ] Feed RSS generator

### Feature examples

*   [ ] Scrolly telling (@svelte/scrolling)
*   [ ] CRUD Todo
*   [ ] Consuming API

## Components

*   [ ] Date pickers
*   [ ] Infinite scroll (Virtual Scroll)
*   [ ] Tables
*   [ ] Modals
*   [ ] Simple gallery image
*   [ ] Tooltips / toasts
*   [ ] Draggable
*   [ ] Time series charts 
*   [ ] Rich text
*   [ ] Autocomplete
*   [ ] Todo CRUD
*   [ ] Auth
*   [ ] Protected routes

## Motivation and Personal Opinion

Svelte is the future, there is no other way. And having a clone-and-run repo with everything a basic web application needs is the best way to get started, spread the word, and create an even bigger ecosystem.

## Installation and running locally

```bash
npx degit ctwhome/top-sveltekit <directory-name>
pnpm install
```

## Updating fork

1.  Add remote from the original repository in your forked repository:

```shell
git remote add upstream git://github.com/ctwhome/top-sveltekit.git
git fetch upstream
```

1.  Updating your fork from the original repo to keep up with their changes:  
    `git pull upstream main`

Start the development server on [http://localhost:5137](http://localhost:3000)

```bash
pnpm dev
```

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with eslint and prettier (Tailwindcss plugging to organize the classes )

Recommended plugins popup

## Production

Depending on the adaptor you choose, either SSR, SSG...etc

```bash
pnpm build
```

Platforms

*   Supabase
*   Firebase
*   Appwrite
