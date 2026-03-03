# veri_platform

`veri_platform` is now set up as the repository-root Next.js application.

## Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Notes

- The accidental extra app nesting has been flattened into the repo root.
- The default scaffold content was replaced with `veri_platform` branding.
- Google-hosted fonts were removed so production builds work in restricted/offline environments.
- The production build script uses Webpack for a stable non-Turbopack build path.
