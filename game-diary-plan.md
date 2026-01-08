# Game Diary App – Project Plan

## Overview
Personal web app inspired by Letterboxd, but for video games.
Purpose: track games played, rate them, and write diary-style reviews that remain accessible long-term.

Tech stack:
- Backend: Spring Boot (Java)
- Frontend: React + Vite + TypeScript
- UI: MUI (Material UI)
- Database: PostgreSQL
- Hosting: GitHub Student Pack (Azure / Heroku) + Vercel

---

## Core Features (MVP)
1. Search or select a game
2. Rate the game
3. Write a review (likes / dislikes)
4. Store entries permanently
5. Browse past entries

---

## Domain Model

### Game
- id
- igdbId
- title
- coverUrl
- releaseDate
- platforms
- snapshotJson

### DiaryEntry
- id
- gameId
- rating
- reviewText
- playedOn
- status (FINISHED, DROPPED, PLAYING, BACKLOG)
- pros
- cons
- createdAt
- updatedAt

### Optional
- Tag
- DiaryEntryTag (many-to-many)

---

## Backend Architecture (Spring Boot)

### Modules
- controller (REST endpoints)
- service (business logic)
- repository (JPA)
- dto (API contracts)
- mapper (entity <-> DTO)
- security (JWT / auth)
- config (CORS, security, IGDB)

### API Endpoints
- GET /api/games/search?q=
- POST /api/games/import/{igdbId}
- POST /api/entries
- GET /api/entries
- GET /api/entries/{id}
- PUT /api/entries/{id}
- DELETE /api/entries/{id}
- GET /api/stats/year/{yyyy}

### Auth
- Single-user login
- JWT-based authentication
- Password or GitHub OAuth

---

## External Integration
- IGDB API (via Twitch OAuth)
- Backend-only API access
- Token caching & refresh
- Snapshot game data locally

---

## Frontend Architecture

### Pages
- Login
- Game Search
- Game Detail
- Diary Feed
- Entry Detail / Edit
- Stats Dashboard

### Frontend Best Practices
- React Query (TanStack Query)
- Typed API client
- MUI Theme (free dashboard template)
- Responsive layout

---

## Repository Structure (Monorepo)

```
game-diary/
├── backend/
├── frontend/
├── docker/
├── .github/workflows/
└── README.md
```

---

## Deployment Plan

### Frontend
- Vercel (static hosting)

### Backend
- Azure App Service or Heroku

### Database
- Azure PostgreSQL or Heroku Postgres

---

## Implementation Roadmap

### Phase 1 – MVP
- DiaryEntry CRUD
- Flyway migrations
- Basic UI
- Manual game entry

### Phase 2 – IGDB Integration
- Game search & import
- Backend proxy
- UI search flow

### Phase 3 – Polish
- Tags & filters
- Stats page
- UI refinement

### Phase 4 – Production Quality
- CI/CD (GitHub Actions)
- Docker
- DB backups

---

## Long-Term Ideas
- Yearly recap
- Export reviews to PDF/Markdown
- Dark/light themes
- Offline-first PWA mode
