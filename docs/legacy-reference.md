# Former implementation reference

The previous `development` tree is preserved on `archive/development-pre-rebuild-2026-11-09` at commit `bca752dc58a2fc7805356153fd6a32ace734360e`. It is a source of ideas for architecture and domain modeling, not the implementation baseline for the rebuild.

Read a file without switching branches, for example:

```bash
git show archive/development-pre-rebuild-2026-11-09:backend/tkt_events/models.py
```

## Places to inspect

| Question | Archived files |
| --- | --- |
| Event, venue, ticket type, customer, and ticket models | `backend/tkt_events/models.py`, `backend/tkt_venues/models.py`, `backend/tkt_tickets/models.py` |
| Existing API and route organization | `backend/tkt_events/rest.py`, `backend/tkt_events/urls.py`, `backend/config/urls.py` |
| Business logic and shared model patterns | `backend/tkt_events/services.py`, `backend/shared/models.py` |
| Event discovery and purchase screens | `frontend-v3/app/`, `frontend-v3/components/`, `frontend-v3/tkt_events/` |
| Earlier reservation proposal | `analisis/#10 - Venta de tickets.md` |

The old frontend purchase form does not complete a payment, and some screens use mock event data. The reservation note is a proposal. The old tree has no Expo check-in app. Reassess its model and module boundaries during PRD and architecture work before carrying any decision into the rebuild.
