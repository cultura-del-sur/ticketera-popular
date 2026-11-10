# Technical and transition notes

The intended system has three applications:

- A Django backend exposing a REST API. The user wants the current stable Django release when implementation begins; no version has been selected yet.
- A Next.js web platform for event promotion and ticket sales.
- A React Native app built with Expo for venue staff to scan QR codes on printed tickets or phone screens and record admission.

The user wants the new implementation to start from an empty application project on `development`. Existing code may inform architecture, data modeling, domain logic, and domain module boundaries, but should not be reused as the new implementation by default. The former implementation and the uncommitted work present at the time of transition were captured at commit `bca752dc58a2fc7805356153fd6a32ace734360e` on `archive/development-pre-rebuild-2026-11-09`, which was published to `origin`. The new `development` branch retains BMad tooling and planning artifacts. Personal `config.user.*` files remain local and are ignored by Git.

These are intended outcomes, not claims about functionality in the current codebase.

## Pilot journey and implementation candidates

- The first public venue page would show El Taller's event grid, including events scheduled through the end of 2026. The product name “Tiquetera Popular” and a URL shaped like `/el-taller-teatro` are examples; neither is final.
- An event may have multiple dated performances. A play with four Friday performances in December was given as an illustration.
- For each performance, a buyer sees available “localidades”, selects a quantity, and pays through a gateway. Mercado Pago is the initial candidate, not a final integration decision. Clarify whether “localidades” means numbered seats, areas, or ticket categories.
- A confirmed payment triggers email notifications to the buyer, venue administrators, and artists involved in the event. The buyer's email includes the ticket QR, a human-readable code, and ticket base price, service fee, and total as separate amounts. Define what the other messages contain and who receives them when an event has multiple artists.
- A management interface is needed for a superadministrator, venue administrators, and associated artists or ensembles. Django Admin with a visual skin is a possible first implementation; role permissions and any separate dashboard remain open.
- At the door, the first version lets authorized staff mark each admission manually in the administration interface by entering a short alphanumeric ticket code that a visitor can dictate. Six characters is an example, not a fixed format; uniqueness, guessability, duplicate use, and staff permissions need design. A mobile Expo scanner for QR codes is desirable later and is not required for the first release.
- The El Taller events in 2026 require the full publication, purchase, payment, notification, management, and manual admission flow. The target of multiple participating venues in early 2027 remains tentative; confirm the date of the first event that depends on the system.

## Event setup and pricing

- The first version needs event administration: create, edit, and deactivate events, including their performances and ticket offer.
- The system usage commission must be configurable for each event and may vary between events, alongside the admission price. It applies to each ticket sold and is paid by the spectator on top of the base ticket price. Show base price, service fee, and total before payment and in the confirmation email (illustrative example: ARS 25,000 + ARS 2,000 = ARS 27,000). Clarify whether the fee is fixed per ticket or percentage-based. Reconciliation must show it separately from the ticket price.
- Most venues may use one ticket price. Other events may have two or three zones/localities at different prices; each may move through pre-sale 1, pre-sale 2, and final price. The exact timing or quantity rules for each price stage, capacity accounting, and whether seats are numbered are unresolved.
- A first pilot event at El Taller is expected around 2026-11-27. The intended ready date is at least one week earlier, approximately 2026-11-20. These are approximate dates and the feasibility of delivering the full first-version scope by then needs assessment.
- The first pilot event may use one ticket category/locality and one selling price. Multi-zone and staged pre-sale pricing remain desired for later events; agree their delivery date separately from the pilot deadline.
- Whether the 2026-11-27 pilot event has one or several performances is unknown. The first release must support several performances per event regardless.
- Review the archived domain model (`archive/development-pre-rebuild-2026-11-09:backend/tkt_events/models.py` and related venue/ticket models) as an early exploration of entity names and relationships. It is reference material, not an adopted schema.

### What the archived model actually contains

- `backend/tkt_events/models.py` has `Event` tied to one venue and one date/time. `EventTicketType` ties an event to a `TicketType` with one ARS price and a released quantity. There is no separate performance, zone, or price-stage entity.
- `backend/tkt_tickets/models.py` has `Customer` and `Ticket`; a ticket points to an event and ticket type, with a unique token and a `marked` flag. It does not model orders, payment reconciliation, or who marked admission and when.
- `backend/tkt_venues/models.py` holds venue details but no administrator or artist memberships. The new model must be designed against the confirmed product needs rather than copied from this archive.
