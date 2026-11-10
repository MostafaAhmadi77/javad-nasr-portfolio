# Javad Nasr — Portfolio Website

The portfolio and consulting website of Javad Nasr, built with **React + Vite** and **Tailwind CSS**. It presents his services, expertise, insights (articles) and case studies, offers an online consultation flow, and includes a built-in admin dashboard for managing the site's content.

**Backend API:** https://github.com/MostafaAhmadi77/javad-nasr-portfolio-Back-end (Node.js / Express / MongoDB)

## Features

- **Home** — hero, about, expertise, industries, methodology and call-to-action sections
- **About** — biography and highlights with a Swiper carousel
- **Services** — service catalogue with detail cards
- **Insights** — article list and article pages, loaded from the backend API with local data as a fallback
- **Case Studies** — case-study list and detail pages with a results table
- **Consultation** — a guided consultation request flow with built-in bot logic
- **Admin dashboard** — manage articles, case studies and services; view consultation leads; organise todos; change admin credentials (content is managed against the backend API / local storage layer in `src/Pages/dashboardAdmin/`)
- **Extras** — page loading states, scroll restoration, per-page meta tags, a custom 404 page and a fully responsive layout

## Tech stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| Vite | Dev server and build tool |
| Tailwind CSS 4 | Styling (via the Vite plugin) |
| React Router | Client-side routing |
| Swiper | Carousels |
| Quill (react-quill-new) | Rich-text editing in the admin dashboard |
| React Icons | Icon set |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm

### Install and run

```bash
git clone https://github.com/MostafaAhmadi77/javad-nasr-portfolio.git
cd javad-nasr-portfolio
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # ESLint
```

### Tests

```bash
npm test   # node --test: consultation, todos, insights, services and case studies
```

## Project structure

```
src/
  App.jsx                  # Root component and routes
  Components/              # Navbar, Footer, Hero, cards, buttons, layout, 404
  Pages/
    Home/                  # Landing page sections
    About/                 # About page
    Services/              # Services page
    Insights/              # Article list + detail (API with local fallback data)
    CaseStudies/           # Case-study list + detail
    Consultation/          # Consultation flow + bot logic
    dashboardAdmin/        # Admin dashboard (articles, case studies, services, leads, todos)
  assets/                  # Fonts and images
public/                    # Static assets
tests/                     # Node test suites
vercel.json                # Deployment config
vite.config.js             # Vite + Tailwind + bundle visualizer
```

## Deployment

The site is configured for deployment on **Vercel** (`vercel.json` is included). The companion backend API must be running for live article data; without it, the Insights section falls back to its bundled local data.

## License

This project is private portfolio work for Javad Nasr. All rights reserved unless stated otherwise.
