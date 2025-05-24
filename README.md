# append-astro

A progressive migration of the APPEND React/Vite app into [Astro](https://astro.build), taking advantage of Astro’s static-first performance and islands architecture.

---

## 🚀 Features

* **Islands Architecture**
  React components (`Hero`, `Services`, `Process`, etc.) live inside a single `<client:only>` island, reducing client-side JS payload.

* **Tailwind CSS**
  Utility-first styling with a custom Tailwind config, CSS variables, and animations.

* **TypeScript everywhere**
  `*.ts`, `*.tsx`, and `*.astro` files all typed and enforced.

* **React Context for i18n**
  Language switcher powered by a lightweight React context, safe in SSR with a default fallback.

* **Vite under the hood**
  Fast dev server, HMR, and bundling via Astro/Vite integration.

* **Bun-friendly**
  Scripts runnable with Bun or Node/npm/yarn.

---

## 📦 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/Jonaunk/append-astro.git
   cd append-astro
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or npm install
   # or yarn install
   ```

---

## 🔧 Development

Start the Astro dev server:

```bash
bun run dev
# or npm run dev
# or yarn dev
```

Open `http://localhost:4321` in your browser. Changes to `.astro`, `.tsx`, or `.css` will hot-reload.

---

## 🛠️ Available Scripts

| Command   | Description                   |
| --------- | ----------------------------- |
| `dev`     | Run Astro in development mode |
| `build`   | Build for production          |
| `preview` | Preview the production build  |
| `astro`   | Run any Astro CLI command     |

> Prefix with `bun run`, `npm run`, or `yarn` depending on your package manager.

---

## 🗂️ Project Structure

```
append-astro/
├─ src/
│  ├─ components/       # React components (App, Hero, Navbar, etc.)
│  ├─ contexts/         # React Contexts (i18n)
│  ├─ pages/            # Astro page entrypoints (*.astro)
│  ├─ styles/           # Global CSS + Tailwind layers
│  ├─ layouts/          # Shared Astro layouts
│  ├─ hooks/            # Custom React hooks
│  └─ lib/              # Utilities (cn, clsx+tw-merge)
├─ public/              # Static assets (favicon, images…)
├─ astro.config.mjs     # Astro configuration
├─ tailwind.config.ts   # Tailwind CSS configuration
├─ tsconfig.json        # TypeScript configuration
├─ package.json         # Scripts & dependencies
├─ bun.lockb            # Bun lockfile (if using Bun)
└─ .gitignore           # Untracked files
```

---

## ⚙️ Configuration

* **Tailwind**: see `tailwind.config.ts`
* **Astro**: see `astro.config.mjs`
* **i18n**: `src/contexts/LanguageContext.tsx` provides Spanish (`es`) and English (`en`) translations, with a default fallback for SSR.

---

## 🚀 Production Build

```bash
bun run build
# or npm run build
# or yarn build
```

Then serve the `dist/` folder with any static-file server or deploy to platforms like Netlify, Vercel, or Cloudflare Pages.

---

## 📖 Further Reading

* [Astro Documentation](https://docs.astro.build)
* [Tailwind CSS](https://tailwindcss.com)
* [React Context](https://reactjs.org/docs/context.html)

---

> **Note:** This repository is a work-in-progress migration from a React/Vite SPA to Astro’s hybrid static+islands architecture. Contributions and feedback are welcome!
