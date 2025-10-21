# Portfolio — Guilherme Rodrigues

A clean, fast, and accessible personal website built with React + Vite to showcase my work, skills, and ways to get in touch.

🔗 Live Demo: https://guilhermerods.dev

---

## Getting Started

### Requirements
- `Node.js >= 18`
- `pnpm >= 8` (recommended) or `npm`/`yarn`
- `Git`

### Clone the repository
```bash
# HTTPS
git clone https://github.com/Mr-Guilherme/portfolio.git

# SSH
git clone git@github.com:Mr-Guilherme/portfolio.git

cd portfolio
```

### Install dependencies
```bash
# pnpm (recommended)
pnpm install

# alternatives
# npm install
# yarn install
```

### Run in development
```bash
pnpm dev
```
- Visit `http://localhost:5173/` (Vite's default port).

### Build and production preview
```bash
pnpm build
pnpm preview --host
```
- `preview` is intended only to test the production build locally.

---

## Free Use & Customization
You are welcome to reuse this project for your own portfolio. Here are the main customization points:

- Displayed name: edit `src/components/title-name/title-name.tsx` (the `<h1>` content).
- Roles/titles: edit `src/components/title-job/title-job.tsx` (the `titles` array and the fixed text "Engineer").
- Skills: edit `src/components/skills/skills.tsx` (the `skills` array).
- Social links and email: edit `src/components/social-nav/social-nav.tsx` (LinkedIn, GitHub, `mailto:` URLs).
- Resume/CV: replace `public/CV.pdf` with your own file.
- Hero subtitle: edit `src/pages/home.tsx` (paragraph with class `subtitle`).
- Icons: replace or add SVGs in `src/assets/`.

### Analytics (optional)
Google Analytics initialization is included:
- Production: create a `.env` file with the following:
```bash
VITE_ENV=prd
VITE_GA_ID=G-XXXXXXXXXX
```
- Development: use `VITE_ENV=dev` (or remove the `initAnalytics()` call in `src/main.tsx`).

---

## License (MIT)

MIT License
