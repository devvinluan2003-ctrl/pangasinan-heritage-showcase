# Pangasinan Heritage Digital Showcase

**Student Name:** Vinluan, Christian Daniel  
**Selected Framework:** Next.js 14 (App Router)  
**Live Website:** https://devvinluan2003-ctrl.github.io/pangasinan-heritage-showcase/

A mobile-first, accessible, static heritage and tourism showcase for Pangasinan. The project now contains **six destinations**: Hundred Islands National Park, Cape Bolinao Lighthouse, Balungao Hot Spring, Tondaligan Beach, Manaoag Church, and San Fabian Beach.

## Features
- Next.js 14 App Router
- Static Site Generation / static export
- Six data-driven heritage and tourism entries
- Reusable Atomic Design component structure
- Responsive heritage cards and detail pages
- Client-side heritage search
- Optimized local WebP images
- Keyboard focus styles and semantic HTML
- Skip link, descriptive labels, alt text, and reduced-motion support
- GitHub Actions deployment to GitHub Pages

## Destinations
1. Hundred Islands National Park — Alaminos City
2. Cape Bolinao Lighthouse — Bolinao
3. Balungao Hot Spring — Balungao
4. Tondaligan Beach — Dagupan City
5. Manaoag Church — Manaoag
6. San Fabian Beach — San Fabian

## Atomic Design Structure
- `components/atoms/`: Button, Typography, Icon, ResponsiveImage; color tokens are in `app/globals.css`
- `components/molecules/`: HeritageCard, SearchForm, NavigationItem
- `components/organisms/`: HeritageGrid, SearchableHeritageGrid, HeaderNavigation, Footer

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build static files
```bash
npm run build
```
The static export is generated in `out/`.

## GitHub Pages
1. Create a public GitHub repository.
2. Push this project to the `main` branch.
3. Open **Settings > Pages**.
4. Set the source to **GitHub Actions**.
5. Push again or run the workflow from **Actions**.

The workflow sets the repository name automatically and builds the project as a static export.

## Lighthouse
After deployment, open the live site in Chrome DevTools > Lighthouse and audit Performance, Accessibility, Best Practices, and SEO. The implementation is designed around the Activity 2 target scores: Performance 80+, Accessibility 85+, Best Practices 85+, and SEO 90+.
