# BeyondChats Assignment 🚀

This repository contains the Phase 1 backend and a Phase 2 enhancer script for the BeyondChats assignment.

Contents
- `backend/` — Express API and scraper
- `enhancer/` — AI-enhancer script
- `scraper/` — scraping utilities (used by backend)

Quick status
- Phase 1 APIs implemented: CRUD for `articles` with example Postman screenshots in `screenshots/postman/`.
- Phase 2: `enhancer/enhance.js` creates enhanced article records.

Prerequisites
- Node.js 18+ (or compatible)
- MongoDB (Atlas or local) and a connection URI

Setup
1. Create environment files:

	 - Root `.env` (optional)
	 - `backend/.env` with at least:

		 MONGODB_URI=your-mongo-uri
		 PORT=5000

2. Install dependencies:

	 cd backend
	 npm install

	 cd ../enhancer
	 npm install

Run backend
From `backend/`:

	npm run dev

The server listens on `process.env.PORT || 5000`. API base: `http://localhost:5000/api/articles`.

Useful scripts (backend/package.json)
- `npm run dev` — start with nodemon
- `npm start` — run production node
- `npm run scrape` — run the scraper (`scraper/scrape-blogs.js`)

Enhancer (Phase 2)
From the repo root (or `enhancer/`):

	node enhancer/enhance.js

This script will call the enhancer logic and create enhanced article records in the same MongoDB used by the backend (ensure `enhancer` can read the same `MONGODB_URI`).

API endpoints (summary)
- GET `/api/articles` — list articles
- POST `/api/articles` — create article
- GET `/api/articles/:id` — get single article
- PUT `/api/articles/:id` — update article
- DELETE `/api/articles/:id` — delete article
- POST `/api/scrape` — trigger scraping of blogs (calls internal scraper)

Notes
- Keep `.env` files out of source control. Add any credentials to your local `.env` and do not commit them.
- Screenshots are stored under `screenshots/postman/` and can be kept in repo if desired.