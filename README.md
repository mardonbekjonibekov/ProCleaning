# ProCleaning Landing Page

Figma-based responsive landing page built with React + Vite.

## 1) Mac setup (fresh install)

Run these commands in Terminal:

```bash
cd "/Users/.../proyekt react 2"
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Open: `http://localhost:8082`

## 2) Where to put exported Figma images

Create folder:

`public/assets/images/`

Then add these files (same names):

- `hero-main.png`
- `service-home.png`
- `service-office.png`
- `service-window.png`
- `about-team.png`
- `testimonial-sarah.png`

## 3) Which section uses which image

- Hero image: `src/layouts/HomePages/sections/HeroSection.jsx`
  - `src="/assets/images/hero-main.png"`
- Service cards: `src/layouts/HomePages/sections/ServicesSection.jsx`
  - `src="/assets/images/service-home.png"`
  - `src="/assets/images/service-office.png"`
  - `src="/assets/images/service-window.png"`
- About image: `src/layouts/HomePages/sections/AboutSection.jsx`
  - `src="/assets/images/about-team.png"`
- Testimonial avatar: `src/layouts/HomePages/sections/TestimonialSection.jsx`
  - `src="/assets/images/testimonial-sarah.png"`

All image spots are marked with `// TODO` comments in code.

## 4) Responsive status

Responsive layout is enabled for:

- mobile (default)
- tablet (`min-width: 768px`)
- desktop (fluid container up to `1160px`)

Styles are in:

`src/App.css`
