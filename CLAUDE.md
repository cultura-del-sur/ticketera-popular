# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ticketera Popular is a ticket sales platform for underground cultural events in Argentina. It has a Django REST API backend and a Next.js frontend (v3 is the active version). Only `backend/` and `frontend-v3/` are active — ignore `frontend/` and `frontend-v2/`.

## Backend Commands

All commands run from `/backend/`:

```bash
# Dev environment
docker-compose up -d              # Start PostgreSQL (port 15432)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Testing
pytest                            # Uses config.settings.testing (set in pytest.ini)

# Linting/formatting
ruff check .
ruff format .
pre-commit run --all-files        # black, check-yaml, trailing-whitespace, end-of-file-fixer

# Migrations
python manage.py makemigrations
python manage.py makemigrations --dry-run --check --no-input  # CI check

# Seed data
python manage.py events_fakerize              # Single event
python manage.py events_fakerize complete     # Event with ticket types
```

## Frontend Commands

All commands run from `/frontend-v3/` using **pnpm**:

```bash
pnpm dev       # Dev server at localhost:3000
pnpm build     # Production build
pnpm lint      # ESLint
```

## Backend Architecture

- **Django 5.1 + DRF** with JWT auth (`djangorestframework_simplejwt`)
- **PostgreSQL 16** via Docker (localhost:15432, user/pass: postgres/postgres)
- Settings: `config/settings/{base,development,testing}.py` — default is `config.settings.development`

### App structure

| App | Purpose |
|---|---|
| `shared/` | BaseModel (created_at, updated_at), BaseCommand, utilities |
| `tkt_core/` | Tag model (name as PK) |
| `tkt_users/` | Custom User (AbstractUser + name field). AUTH_USER_MODEL = "tkt_users.User" |
| `tkt_venues/` | Venue (name, address, lat/lon) |
| `tkt_events/` | Event, TicketType, EventTicketType (MoneyField in ARS) |
| `tkt_tickets/` | Customer, Ticket |

### Backend conventions

- We follow HackSoft Django Styleguide: https://github.com/HackSoftware/Django-Styleguide
- All models extend `shared.BaseModel`
- REST logic (serializers + viewsets) goes in `rest.py` per app
- URL routing via DRF `DefaultRouter` in per-app `urls.py`, aggregated in `config/urls.py`
- Management commands extend `shared.commands.BaseCommand`
- Fake data for seeding lives in `<app>/factories/fake_data.py`
- Tests use `pytest` + `factory_boy` with `@pytest.mark.django_db`

### API endpoints

- `GET /api/events/`, `GET /api/events/{id}/` — ReadOnlyModelViewSet
- `POST /api/token/`, `POST /api/token/refresh/` — JWT
- `/admin/` — Django Admin

## Frontend Architecture (frontend-v3)

- **Next.js 16** (App Router) + React 19 + TypeScript (strict)
- **Tailwind CSS** + **shadcn/ui** components
- **Leaflet/react-leaflet** for maps, **lucide-react** for icons
- Path alias: `@/` → project root

### Directory layout

- `app/` — Next.js pages (App Router)
- `components/` — Shared UI components (PascalCase `.tsx`)
- `shared/` — Infrastructure: HTTP clients, hooks, services, logging, toasts
- `tkt_auth/`, `tkt_events/` — Domain modules mirroring backend apps
- `lib/data.ts` — Static mock data + TypeScript interfaces (API integration WIP)

### Frontend conventions

- **No semicolons**, single quotes, 2-space indent, trailing commas on multiline
- Arrow function expressions only (`func-style: 'expression'`)
- Use `Array<T>` not `T[]` (`@typescript-eslint/array-type`)
- No relative imports outside the same folder (`no-relative-import-paths`)
- Interface prefix: `I_`, type prefix: `T_`
- Forms: `react-hook-form` + `zod` schemas
- Toasts: `react-toastify` via wrappers in `shared/toasts.ts`
- `cn()` from `lib/utils.ts` (clsx + tailwind-merge)

### Service layer pattern

1. **HTTP** (`shared/data/axios.ts`, `shared/data/fetch.ts`) — raw calls with JWT injection
2. **Service** (`shared/service.ts`) — `listService<T>`, `postService<T>` curried on endpoint
3. **Hook** (`shared/hooks.ts`) — `listHook<T>` wraps service with auth context
4. **Domain hooks** (`tkt_auth/hooks.ts`) — domain-specific compositions

## CI (GitHub Actions)

- `backend-checks.yml`: migration check + pytest (Python 3.10 & 3.11)
- `general-checks.yml`: pre-commit hooks
- Triggers on push/PR to `main`
