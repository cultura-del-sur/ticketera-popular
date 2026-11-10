<!-- bmad:context -->
<!-- Verified 2026-11-09 against 776bc3d45a8510e8dd3dbf8766c5c4a0f0c0efab. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

## Ticketera Popular

Ticketera Popular sells tickets for cultural events in Argentina. The active application has a Django REST backend in `backend/` and a Next.js frontend in `frontend-v3/`. BMad planning artifacts live under `_bmad-output/planning-artifacts/`; `analisis/` holds design notes, which are not evidence of implemented behavior.

## Where things are

- Work in `backend/` for the API and `frontend-v3/` for the UI.
- For implemented event routes, inspect `backend/config/urls.py`, `backend/tkt_events/urls.py`, and `backend/tkt_events/rest.py`.
- For frontend API work, inspect `frontend-v3/shared/data/`, `shared/service.ts`, `shared/hooks.ts`, and the relevant domain hooks before extending their flow.

## Running and verifying

- In `backend/`, install from `requirements.txt`. Start its local PostgreSQL with `docker compose up -d`; development settings connect to port 15432.
- Do not rely on a bare `pytest` run yet: `backend/pytest.ini` names missing `config.testing`; the existing test settings use PostgreSQL on port 5432 with credentials different from local Compose.
- Do not treat the current GitHub workflows as a working backend gate: they reference removed `backend/ticket_manager/` and `requirements/development.txt` paths. Check the actual files before using their commands.
- In `frontend-v3/`, use pnpm and the scripts declared in `package.json`.
- For seed data, use the management commands in `backend/tkt_events/management/commands/` and `backend/tkt_venues/management/commands/`. The root `README.md` contains obsolete backend installation and test paths.

## Conventions that differ from defaults

- Follow the [HackSoft Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) for backend work, with these local choices: put queries and mutations in each app's `services.py`, and REST serializers and viewsets in `rest.py`; do not introduce `selectors.py` or `apis.py`.
- Add custom REST endpoints as DRF ViewSet `@action`s; register app routers in each app's `urls.py` and include them from `backend/config/urls.py`.
- Use `shared.BaseModel` for new domain models; `tkt_users.User` remains the custom `AbstractUser` model. Extend `shared.commands.BaseCommand` for new management commands and keep seed factories in each app's `factories/fake_data.py`.
- Use `pytest`, `factory_boy`, and `@pytest.mark.django_db` for backend tests once the test configuration is repaired.
- In `frontend-v3/`, use `@/` imports across directories and relative imports only within one folder. Prefix interfaces with `I_` and type aliases with `T_`.
- Use `react-hook-form` with `zod` for forms, `shared/toasts.ts` for notifications, and `cn()` from `lib/utils.ts` for class composition.
- Prefer the shared request, service, and hook helpers for new frontend API work. Existing `tkt_events/hooks.ts` calls Axios directly, so inspect that path before changing it.

<!-- /bmad:context -->
