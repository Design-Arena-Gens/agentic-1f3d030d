# Testing Testing Lab

An atmospheric Next.js experience that celebrates deliberate experimentation and curious testing rituals. Explore experiment queues,
visualise stability signals, and calibrate your feedback velocity—all within a playful, responsive interface.

## 🧰 Tech Stack

- Next.js 14 with the App Router
- React 18 + TypeScript
- Tailwind CSS for styling
- Framer Motion for motion design
- next-themes for light/dark theming support

## 🚀 Quickstart

```bash
npm install
npm run dev
```

Navigate to `http://localhost:3000` to explore the lab.

### Production Build

```bash
npm run build
npm start
```

## 📁 Key Structure

```
app/
  layout.tsx          # Root layout and shared chrome
  page.tsx            # Home experience
  globals.css         # Tailwind layers and base styles
components/
  experiment-grid.tsx # Interactive experiment backlog
  feedback-loop.tsx   # Feedback velocity slider
  ritual-timeline.tsx # Daily ritual timeline
  signal-visualizer.tsx # SVG-based stability vs volatility chart
  theme-provider.tsx  # Theme context wrapper
  theme-toggle.tsx    # Light/dark toggle
```

## ✅ Features

- Responsive layout with polished theming
- Interactive experiment filters with animated transitions
- SVG-based signal visualisation for stability vs volatility
- Feedback velocity calibration slider with contextual rituals
- Daily ritual timeline to anchor experimentation

Enjoy building out your own testing rituals inside the lab. Iterate boldly!
