# BrandJudge

A commercial judgment training app for logging and evaluating consumer brands.

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project Structure

```
brandjudge/
├── index.html
├── package.json
├── vite.config.js
├── .env.example        ← copy to .env.local for Supabase (Step 2)
├── .gitignore
└── src/
    ├── main.jsx        ← React entry point
    └── App.jsx         ← Main app (all components)
```

## Deployment

This project deploys to Vercel automatically when you push to GitHub.

## Coming in Step 2

- Supabase email auth (real sign in / sign up)
- Per-user data storage
- Entries persist across sessions
