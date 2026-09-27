# Yograj.exe

> A living-universe portfolio exploring expressive design and thoughtful software engineering.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion

## Features

- Cinematic sunrise, constellation, mission-timeline, project-orbit, neural-core,
  coding-universe, and deep-sea sections
- Responsive layouts, keyboard navigation, reduced-motion support, and active
  section navigation
- Lazy-loaded desktop 3D scene; CSS and transform-based ambient motion
- Configurable email, resume URL, and canonical deployment domain
- Open Graph, Twitter card, Person structured data, generated sitemap, and robots

## Connect

- GitHub: https://github.com/UniverseOfYograj
- LinkedIn: https://www.linkedin.com/in/yograjtripathi9/
- LeetCode: https://leetcode.com/u/Yograj1008/
- GeeksforGeeks: https://www.geeksforgeeks.org/profile/pushpyogth1z
- Coding Ninjas: https://www.codingninjas.com/

## Run Locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` to configure optional contact and deployment
details:

```env
VITE_CONTACT_EMAIL=you@example.com
VITE_RESUME_URL=https://example.com/your-resume.pdf
VITE_SITE_URL=https://your-production-domain.example
```

Email and resume links are omitted until configured. `VITE_SITE_URL` is used
when generating the canonical URL, social preview metadata, `robots.txt`, and
`sitemap.xml`; it defaults to `https://yograj-exe.pages.dev`.

## Deploy to Cloudflare Pages

1. In Cloudflare, create a Pages project and connect the
   `UniverseOfYograj/yograj-exe` GitHub repository.
2. Select `main` as the production branch and leave the root directory empty.
3. Set the build command to `npm run build` and the build output directory to
   `dist`.
4. Set `VITE_SITE_URL` to the production Pages domain (or your custom domain).
   Add `VITE_CONTACT_EMAIL` and `VITE_RESUME_URL` when those links are ready.
5. Save and deploy. Cloudflare Pages will build each push to `main` and create
   preview deployments for pull requests.

For local production checks, run `npm run build` and then
`npm run preview`.
