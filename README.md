# Arul Dhas A: Portfolio

React + Vite portfolio, ready for Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Deploy to Vercel

```bash
git init && git add . && git commit -m "Portfolio"
# push to GitHub, then import the repo at vercel.com (framework: Vite, build: npm run build, output: dist)
# or with the CLI:
npm i -g vercel
vercel --prod
```

## Updating content

- All text lives in `src/data/content.js`.
- Add your GitHub and LinkedIn URLs to `githubUrl` and `linkedinUrl` in that file. The buttons stay hidden while they are empty.
- Photos: profile at `public/images/profile.webp`; tech talk photos in `public/images/techtalk/`.
- Certificate images: save files in `public/certificates/` and set `image` on the card in `content.js`. In `npm run dev` each card also shows an upload button that previews an image in your browser only; visitors to the deployed site never see it.
- Resume file: `public/resume/Arul_Dhas_A_Resume.pdf`. Replace it with your own public-safe PDF, keeping the same filename (case matters on Vercel).
- Do not publish a resume that contains client project names.
