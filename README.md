# SignalOps Landing Page

Marketing landing page for SignalOps — Revenue Intelligence Platform.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import into Vercel
3. Set root directory if needed
4. Deploy — no environment variables required for the landing page

## Linking to the app

The "View live demo" CTA links to `/app` — update this href in `src/app/page.tsx` to point to your actual app URL (e.g. `https://app.signalops.io` or wherever your dashboard lives).

## Request access form

The form currently simulates submission. To wire it up to a real backend:
- Use a service like Resend, Formspree, or Loops to capture signups
- Replace the `handleSubmit` function in `page.tsx` with a real API call
