# MY Driving Academy

A mobile-friendly Next.js website for MY Driving Academy, built from the
provided Stitch HTML page designs (home page plus six service pages).

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

- `app/page.tsx` — home page (hero, features, about, services, contact)
- `app/driving-lessons`, `app/block-bookings`, `app/test-prep`,
  `app/intensive-courses`, `app/motorway-lessons`, `app/refresher-classes` —
  service detail pages
- `components/Navbar.tsx`, `components/Footer.tsx` — shared site chrome with a
  fully working mobile hamburger menu
- `components/ServicePage.tsx` — shared layout used by all six service pages
- `app/globals.css` — Tailwind CSS v4 theme tokens matching the brand's navy
  and amber design system
