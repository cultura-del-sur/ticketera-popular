# PRD addendum: Ticketera Popular

## Source material

- [Finalized product brief](../../briefs/brief-ticketera-popular-2026-11-09/brief.md): product intent, pilot scope, success signals, and unresolved decisions.
- [Brief addendum](../../briefs/brief-ticketera-popular-2026-11-09/addendum.md): implementation candidates, transition context, and observations about the archived model. These are inputs, not adopted design decisions.

## Downstream technical context

The source addendum proposes a Django REST backend, Next.js sales site, and a later React Native app using Expo for QR admission. Mercado Pago and Django Admin are candidates. The first release instead needs manual admission through an authorized management interface. Architecture should revisit these choices after the PRD settles the payment, permission, capacity, and reconciliation rules.

The archived implementation at `archive/development-pre-rebuild-2026-11-09` is reference material. Its event model lacks a distinct performance, order, payment reconciliation, and venue or artist membership structure, so adopting its schema would not by itself meet the product brief.

During PRD discovery, the user specified that the entire successful payment, including the ticket price and service fee, goes to the cultural venue's Mercado Pago account. Human operators handle any later distribution outside the product. The venue marks a single `rendered` status per performance; the product does not track separate transfers to artists or the platform. This supersedes the source addendum's earlier treatment of Mercado Pago as merely a candidate. The exact account connection remains for architecture and operations design.

[Mercado Pago's payment-status documentation](https://www.mercadopago.com.ar/developers/es/docs/checkout-api-payments/response-handling/query-results?scope=prod) describes `pending`, `in_process`, and `approved` outcomes, including payments awaiting a bank transfer or review. [Its notification documentation](https://www.mercadopago.com.ar/developers/en/docs/checkout-pro-preferences/payment-notifications) says the integration receives status-change notifications. The user ultimately chose to let venue administrators handle a still-pending buyer at the door, rather than automatically cancel pending payments before the performance. Architecture must make the payment's current status available to authorized staff and reconcile a later state change with any manual door decision.

## Market context checked 2026-11-10

- [Eventbrite's Argentina pricing page](https://www.eventbrite.com.ar/help/es-ar/articles/755615/cuanto-les-cuesta-a-los-organizadores-usar-eventbrite/) describes a per-ticket service fee and an option to pass fees to attendees. This confirms that fee visibility and payer choice should be explicit, but it does not establish Ticketera Popular's fee.
- [Índice Cultural](https://indicecultural.com.ar/preguntas-frecuentes) positions itself as a cultural discovery guide and links people to each venue's own sales destination. This illustrates that event discovery and ticket settlement can be separate concerns.

These sources inform the competitive picture only. The brief's community governance and shared venue–artist reconciliation remain the product's stated differentiators.

## Sales-stage illustration from discovery

For one performance with a total capacity of 100 tickets, the user illustrated an early presale allocation of 25 tickets at the lowest price, a second allocation of 25 at a higher discounted price, then a final-price stage for the remaining capacity. Each stage has its own explicit opening date and time. A performance can be visible before its current or first stage opens. Other performances of the same event can have different stages, prices, allocations, and opening times. This is an illustration, not a fixed three-stage rule. The user subsequently confirmed that stage-based sales are required for the first event.
