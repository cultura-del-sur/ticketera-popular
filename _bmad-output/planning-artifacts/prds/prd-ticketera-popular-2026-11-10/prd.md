---
title: Ticketera Popular
status: final
created: 2026-11-10
updated: 2026-11-10
---

# PRD: Ticketera Popular

*Working title; the final brand is undecided.*

## Purpose and status

This PRD translates the [finalized product brief](../../briefs/brief-ticketera-popular-2026-11-09/brief.md) and guided discovery into requirements for product, UX, architecture, and delivery planning. The [addendum](addendum.md) preserves technical candidates and background. `UJ` identifies a user journey, `FR` a functional requirement, and `OQ` an open implementation or operating decision. Mara and Tomás are illustrative names for the ensemble and door roles. Planning assumptions appear at the end. Finalization makes this the product-definition input for downstream work; it does not establish feasibility of the target launch date.

## Vision and launch outcome

Ticketera Popular gives community-run cultural venues a shared way to publish performances, sell and admit tickets, and reconcile sales with artists and ensembles. The venue offers the service and receives ticket payments. Artists can inspect the same sales record without relying on each group's separate selling process. The buyer sees the ticket price and service fee before paying. The product aims for a low, event-configurable service fee and collective stewardship suited to independent cultural spaces; the exact fee level and governance model are not fixed by this PRD.

El Taller in Berazategui is the first real launch venue. The target remains system readiness around 2026-11-20 for a first event around 2026-11-27; these dates were reconfirmed during discovery, though exact event details and feasibility remain to be checked. Discovery expanded the first-event scope beyond the brief to include per-performance presales, artist self-service sales access, mobile QR admission, printable paper admission, and coupons. A delivery feasibility assessment is required against the target date.

The brief's tentative next horizon is gradual adoption by other venues in the southern Buenos Aires metropolitan area in early 2027; it is not a first-release commitment.

## Target users and jobs

- **Venue administrator:** publish a coherent event offer, manage capacity and pricing, inspect sales totals, and explain door or sales discrepancies.
- **Artist or ensemble member:** inspect current and historical sales for their events and export evidence for a human settlement with the venue.
- **Buyer:** choose the right performance and ticket offer, know the full cost, pay, and receive admission proof.
- **Door worker:** distinguish valid unused tickets from invalid or previously admitted tickets and keep an accurate attendance record.

## Glossary

- **Venue:** a cultural space using Ticketera Popular; an administrator may belong to more than one venue.
- **Event:** the work or cultural program, including title, description, images, and associated artists; it contains one or more performances but no single occurrence date.
- **Performance:** one dated and timed occurrence of an event, with its own price configuration, capacity, publication state, sales stages, and admission method.
- **Ticket type:** a category or locality within a performance. The first release supports one ticket type per performance; multiple types are deferred.
- **Sales stage:** a time-gated allocation of tickets for one performance at a stated price, such as a presale or final sale.
- **Sales closure:** the administrator-requested action that stops new online checkout attempts for a performance. Already-started payment attempts may remain pending for door staff to resolve locally.
- **Order:** one buyer checkout containing one or more tickets.
- **Ticket:** an individual admission right for one performance, with a globally unique human-readable code and its own QR code.
- **Coupon:** a limited-use percentage or fixed-amount discount applied during checkout; a 100% discount is an invitation.
- **Service fee:** an event-configured additional charge per ticket, paid by the buyer unless a 100% coupon is used.
- **Rendition:** a single human-managed settlement state for a performance. The venue can mark the performance as rendered; money movement and any allocation among parties happen outside the product.
- **Admission:** the record that a ticket holder entered a performance.

## User journeys

### UJ-1. Lula prepares *La Gran Obra* for sale at El Taller

Lula administers events for El Taller. Her account is associated with that cultural venue; an administrator account may be associated with more than one venue. After receiving the details of *La Gran Obra*, she signs in to the management interface and creates an **event** with its name, artists, description, and images. The event describes the work as a whole and does not itself specify dates or times.

Lula then creates two **performances**, on the first and third Fridays of a December, and enters the date and time of each. She sets ticket prices. An event-level price configuration may prefill the prices of new performances to speed setup, while Lula can give a performance a different price. Each performance retains its own explicit ticket price, even when the value came from the event-level default.

Before public release, Lula checks the entered information in the management interface. She then opens the public-facing web application while signed in as an El Taller administrator. Its event grid shows *La Gran Obra* in the appropriate order, and Lula can open the event detail page. At this stage the grid entry and detail page are a **preview visible only to administrators of that venue**; members of the public cannot access them.

Event creation and public publication can happen at different times. New events start as drafts; Lula can set a future publication date.
Lula can publish performances independently. She may add and publish another performance after the event and its initial performances have already been released.

Public visibility and ticket sales can also begin at different times. A performance may be visible before any tickets are on sale. Lula may configure successive sales stages **independently for each performance**, each with an explicit availability date and time, ticket allocation, and price. The example discussed is a 100-ticket performance: 25 tickets in an early discounted stage, 25 in a later stage at a higher discounted price, then remaining tickets at the final price. Another performance of the same event may have different stages and opening times. **This capability is required for the first event**, superseding the earlier brief's deferral.

When the next stage opens, any unsold tickets allocated to the previous stage become available in the next stage at its price. The previous stage's price no longer applies to those tickets.
If the currently open stage sells out before the next stage's scheduled opening, ticket sales pause until that scheduled date and time. A sellout does not open the next stage early.


### UJ-2. Javi buys tickets for *La Gran Obra*

Javi reaches the cultural venue's page or *La Gran Obra*'s event page on Ticketera Popular's domain. He reads the event description, views its images and other published event information, then chooses one of the available performances. The first release offers one ticket type per performance; Javi sees the price of its currently open sales stage and continues to checkout. For this illustration, the ticket's base price is ARS 10,000. The number of tickets Javi may buy **in one order** is capped by a limit configurable by an event administrator; Javi can place another order for the same performance. He provides a payment method, completes payment, and receives a purchase-confirmation email containing **one unique QR code per purchased ticket**. The finalized brief also requires the base ticket price, service fee, and total to be visible before payment and in the confirmation.

Javi may apply a promotional coupon at checkout. An event administrator can configure a coupon with either a percentage discount or a fixed monetary discount and a maximum redemption count; after that count is reached the coupon is no longer valid. A 100% discount coupon can serve as an invitation for an ensemble's guest. The administrator can thereby limit how many discounted or free admissions are issued. Coupons and invitations are required for the first event.


### UJ-3. Mara checks sales for *La Gran Obra*

Mara, an authorized member of the ensemble associated with *La Gran Obra*, signs in to the management interface. She can inspect the event configuration and current ticket sales, but cannot edit the configuration. She downloads a spreadsheet listing sold tickets and each ticket's sale date. After a performance, she reviews the historical total, the price at which each ticket sold, and the complete sales record for the event. These figures support a human reconciliation with El Taller.

Read-only artist and ensemble access, including the sales spreadsheet, is required in the first release and for the first event.

The entire buyer payment, including ticket price and service fee, goes to one payment account belonging to the cultural venue. Subsequent distribution of money between the venue and artists is handled by people outside Ticketera Popular; the product records sales and makes them inspectable, but does not execute that distribution. The user specified Mercado Pago as the payment destination; that integration choice is recorded in the addendum. A venue administrator can mark each performance as rendered when its human-managed rendition is complete. This is one state for the performance, not separate states by recipient.


### UJ-4. Tomás admits Javi to a performance of *La Gran Obra*

Javi arrives with the QR code for his ticket on his phone or printed on paper. Tomás is authorized to control admission. In the mobile path, he scans the code with an internet-connected app. The system checks whether the ticket exists, is valid for admission, and has not already been admitted; on success it records admission and Tomás lets Javi enter. An invalid or unknown code produces a clear error. For an already admitted ticket, the app and connected web interface show Tomás who purchased it, how many tickets were in that purchase, and when this ticket's admission was recorded, so he can explain the duplicate-use result.

In the connected desktop path, authorized staff search for the ticket by buyer name or by its short, human-readable alphanumeric code, then perform the same validation and admission action. Ticket codes must not repeat across events; their exact length is undecided. For paper admission, the venue closes online sales for the performance, prints a sold-ticket list, and marks admission on paper. People may still buy tickets for cash at the door near the performance. If an online payment remains pending at the door, the venue administrator controlling admission decides how to handle the visitor.

All three admission paths—mobile QR scanning, connected web lookup and marking, and a printable paper list—are required for the first event, superseding the brief's earlier deferral of the mobile app.
For a given performance, the venue chooses either **paper admission** or **digital admission**. In digital mode, staff may combine mobile QR scans and connected web lookup and marking against the same admission record. Paper and digital marking are alternatives, not simultaneous methods for the same performance. If the venue chooses paper, it cannot switch to digital accreditation while that performance is under way.
After an offline paper check-in, cultural venue managers enter the paper-marked admissions into the system when connectivity returns, so the digital admission record reflects who attended. Attendance is useful supplemental data; the sales record remains the primary accounting record.

The venue may also sell tickets for cash at the door. When connected, staff record each cash sale directly in the management interface. If connectivity is unavailable, venue staff decide in person whether there is room, collect cash, and admit the buyer. Venue managers enter the sale into the system afterward, separately from the earlier online sales and paper attendance marks. A cash sale made at the door on the performance date is treated as an admission; the buyer does not need a QR or separate paper-list entry for that immediate entry.


## Pricing and fee policy

Each event chooses how its per-ticket service fee is calculated: either a fixed amount or a percentage of the ticket price. The buyer pays this fee in addition to the ticket's base price. The base price, service fee, and total are shown separately before payment and in the confirmation. The sales record must also preserve the fee separately so the venue and artists can understand the amount attributable to tickets.

A partial coupon discount reduces the ticket price but does not reduce the service fee. For a percentage-based fee, the percentage is calculated from the original, undiscounted ticket price. For example, an ARS 10,000 ticket with a 50% coupon and a 10% service fee costs ARS 5,000 for admission plus ARS 1,000 for service, or ARS 6,000 in total. A 100% invitation coupon waives both the ticket price and the service fee.

## Features and functional requirements

### Event and performance management

Venue administrators prepare event information, performance schedules, offers, and publication independently. Realizes UJ-1.

#### FR-1: Venue-scoped event management

An authorized venue administrator can create, edit, and deactivate an event for a venue they administer. Event data includes title, associated artists, description, and images. An administrator associated with multiple venues can select the venue for the event. Access to other venues' events is denied.

#### FR-2: Independent performances

An authorized venue administrator can add multiple performances with distinct dates and times to an event, including after that event has been published. An event-level price setting prefills new performances, but each performance retains its own explicit price. Changing the default does not rewrite configured performances.

#### FR-3: Private preview and publication

Venue administrators can see an unpublished event in the web grid and detail view as a private preview. Public visitors cannot access that preview. New events start as drafts. The administrator can schedule event publication for a future date and publish each performance independently. A visible performance may have no currently available tickets.

#### FR-4: Per-performance sales stages

An administrator can configure each performance's own sales stages with an opening date and time, price, and ticket allocation. At a stage's scheduled opening, unsold tickets from the previous stage move to the new stage at the new price. If a stage sells out early, sales pause until the next scheduled opening; the next stage does not open early. Availability never exceeds the performance's configured capacity.

#### FR-5: Ticket offer and order limit

An administrator can configure one ticket type per performance and a maximum ticket quantity per order for an event. Each performance can have independently configured sales stages for that type. The limit applies to each order; a buyer may place another order for the same performance.

### Discovery, checkout, and tickets

Buyers discover a published event, choose an available performance and offer, see the full price, and receive admission proof after completion. Realizes UJ-2.

#### FR-6: Venue and event pages

Public visitors can reach a venue page and a published event detail page on the product domain. The event page presents its description, images, and independently published performances. Unpublished events and performances are not exposed publicly.

#### FR-7: Price and availability display

For each offer, the buyer sees whether tickets are available now, not yet open, paused between sold-out stages, or exhausted. Before checkout completion, the buyer sees the original ticket price, coupon discount where applicable, service fee, and total for the selected quantity.

#### FR-8: Online payment and ticket issuance

The buyer can complete an online payment for an available order. Ticket payments go to the venue's payment account. A successful payment creates one ticket per purchased admission; a failed or unconfirmed payment cannot issue valid tickets, although venue staff may record a separate door exception for a pending buyer. Each ticket has a unique QR code and a short human-readable code that does not repeat across events. The exact code format is an architecture decision.

#### FR-9: Confirmation and notifications

After a completed order, the buyer receives an email with one QR code and human-readable code per ticket, plus the ticket price, any discount, service fee, and total. Venue administrators and associated artists are notified of the sale, as required by the brief; recipient and message details remain open.

#### FR-10: Coupons and invitations

An event administrator can create an event-scoped coupon with either a percentage or fixed-amount discount and a maximum number of ticket uses. Each discounted ticket consumes one use; checkout rejects use after the limit is reached. A fixed discount cannot reduce the ticket price below zero. A 100% coupon represents a free invitation, waives the service fee, and issues a standard ticket and QR without a payment attempt. A partial coupon does not reduce the service fee; a percentage service fee is calculated on the undiscounted ticket price.

### Sales visibility and settlement evidence

Venue administrators and authorized artists share a ticket sales record. People distribute funds outside the product. Realizes UJ-3.

#### FR-11: Read-only artist access

An artist or ensemble member associated with an event can view its configuration, current sales, and historical sales after a performance, but cannot edit the event, its performances, or prices. Access to unrelated events is denied.

#### FR-12: Ticket-level sales report

The sales report and export show sold tickets, their sale dates and sale prices, event and performance totals, and buyer information already collected for those purchases to artists and ensembles authorized on that event. Ticket price, discount, service fee, and total paid remain distinguishable so the venue and artists can reconcile sales. The report does not require collecting additional buyer fields solely for the export.

#### FR-13: Venue payment destination

The entire online payment, including ticket price and service fee, is directed to the venue's account. The product does not execute distribution of proceeds to artists or service-fee remittances. Payment processor deductions, refunds, and chargebacks remain separate from the original ticket price and fee in the historical record; their accounting treatment is an operational decision before launch.

#### FR-14: Manual rendition status

A venue administrator can mark a performance as rendered after the people involved settle it outside the product. The status is visible with that performance's sales record. There is one rendition state per performance, with no separate marks for artists or service fees. The product does not transfer money or verify its receipt.

### Admission and door sales

Door staff admit ticket holders through a selected method for each performance and can register cash sales. Realizes UJ-4.

#### FR-15: Digital admission

For a performance in digital mode, authorized staff can scan a ticket QR code in the mobile app or find the ticket by buyer name or human-readable code in the connected web interface. Both surfaces validate against and update the same admission record. A valid unused ticket is marked admitted once. Unknown, invalid, or already admitted tickets are not marked again.

#### FR-16: Duplicate-use evidence

When a ticket has already been admitted, the mobile app and web interface show authorized staff the purchaser, number of tickets in that order, and the date and time that ticket was admitted. The staff member decides how to handle the visitor; the product does not automatically grant a second admission.

#### FR-17: Paper admission mode

An administrator can choose paper mode for a performance. Before closing its online sales, the management interface shows any pending payment attempts for that performance. Closing online sales stops new online checkout attempts but does not automatically cancel already-started payments. The venue can print the paper-control list even with pending attempts: confirmed sold tickets and pending payment attempts are identified separately. If a payment remains pending when the buyer arrives, the venue administrator at the door decides whether to admit that person; the product shows the current payment status when connectivity permits and records the manual admission decision. A later payment failure does not erase the historical admission. Paper and digital marking cannot be used concurrently for that performance. The admission mode locks when the list is printed or the first digital admission is recorded. Venue managers can enter paper attendance results later.

#### FR-18: Cash sales at the door

Authorized venue staff can record cash ticket sales through the management interface while connected. When offline, staff decide locally whether space remains and admit the buyer after collecting cash; venue managers enter the sale afterward. A cash sale recorded for the day of the performance also records that the buyer attended. If backfilled sales exceed configured capacity, the system warns but still records the actual sale. Reporting preserves the distinction between online orders, cash sales, and attendance. The system does not make the offline admission decision.

### Roles and access

#### FR-19: Role boundaries

The system distinguishes platform administrators, venue administrators, artist or ensemble viewers, and authorized door staff. Platform administrators grant venue-administrator access; venue administrators grant artist and door access for their venues and events. Artists can view only associated events and their sales; door staff can validate admission only for assigned performances. Venue administrators can manage their own venues and performances. No role receives access to unrelated venues or events.

## Cross-cutting quality requirements

- **Accuracy:** concurrent online checkout and digital admission actions must not oversell a configured online allocation or mark the same ticket admitted twice. Venue staff handle capacity decisions for offline cash sales in person; the system records those sales later.
- **Auditability:** preserve the amount and fee charged at sale time, payment outcome, and admission timestamp; later configuration changes must not rewrite historical sales evidence.
- **Privacy:** buyer identity and admission history are visible only to authorized roles. Authorized artists can view buyer information for their own events; exact export fields still require confirmation.
- **Availability:** the public purchase and admission flows need an operational readiness check before the first paid event. Quantified uptime and recovery targets are still open.
- **Usability:** the human-readable ticket code must be short enough to dictate at the door while remaining unique across events; final format is open.

## MVP and rollout scope

The first real event at El Taller requires FR-1 through FR-19, including features the earlier brief had deferred: per-performance sales stages, artist self-service reporting, mobile QR scanning, paper admission, and coupons. It uses one ticket type; each performance can have its own sales stages. The targets are around 2026-11-20 for readiness and 2026-11-27 for the first event. Feasibility against the expanded scope remains unassessed.

Multiple ticket types or zones, numbered seating, a broader discovery marketplace, automated distribution of money to artists, and multi-venue rollout are outside the first-release commitment. Multiple venues remain a supported account and data boundary so expansion does not require redesign.

## Explicit non-goals for the first event

- Automated payouts or contract settlement between venue and artists.
- A ticket resale or transfer marketplace.
- Multiple ticket types, zones, and numbered seat selection.
- Launching a shared marketplace across multiple cultural venues; the first public venue is El Taller.

## Success measures

- **SM-1 — Complete event operation:** El Taller publishes the event and its performances, accepts paid and invited orders, and records entry through the chosen admission mode without unaccounted tickets. Validates FR-1–FR-10 and FR-15–FR-18.
- **SM-2 — Reconciled sales:** venue administrators and artists can independently view and export the same ticket-level totals and explain differences between online and cash sales, discounts, and service fees. The venue can mark each performance's rendition status. Target: no unexplained variance at event close. Validates FR-11–FR-14 and FR-18.
- **SM-3 — Price transparency:** every paid checkout and confirmation shows ticket price, discount if used, service fee, and total. Target: all completed paid orders. Validates FR-7–FR-10.
- **Counter-metric — Do not maximize sales at the expense of capacity or access control:** no oversold online allocations or duplicate digital admissions. Counterbalances SM-1.

## Open questions under discussion

- **OQ-1 — Offline door-sale capacity:** Venue staff judge available space in person during an offline cash sale. Later data entry warns if the recorded total exceeds configured capacity but still permits recording the actual sale. **Owner:** El Taller operations. **Revisit:** before the door rehearsal.
- **OQ-2 — Publication and preview:** Can an event be public with no public performance? What confirms to Lula that scheduled publication succeeded? What orders the venue event grid? **Owner:** UX and product. **Revisit:** during UX design.
- **OQ-3 — Later offer model:** For later events, are multiple ticket types categories, zones, numbered seats, or another concept, and does each type have its own stage allocation and price? **Owner:** product. **Revisit:** when planning the first multi-type event; this does not block the first release.
- **OQ-4 — Coupon operations:** Confirm the multi-ticket coupon test case and whether a venue may restrict an event coupon to one performance. The first release otherwise uses event-scoped coupons and one use per discounted ticket. **Owner:** product and QA. **Revisit:** before coupon acceptance tests.
- **OQ-5 — Payment and accounting:** Define processor-fee, refund, cancellation, and chargeback handling, including ticket validity after refunds. Decide which adjustment fields appear in venue and artist exports, and who receives each sale notification. **Owner:** architecture and El Taller operations. **Revisit:** during payment integration design, before accepting real payments.
- **OQ-6 — Admission operations:** Settle the manual correction flow for mistaken admissions and the paper-list layout for pending payments. **Owner:** UX and El Taller operations. **Revisit:** before the door rehearsal.
- **OQ-7 — Access and privacy:** Set buyer-data retention and the fields printed on the door list. **Owner:** architecture and El Taller operations. **Revisit:** before storing real buyer data.
- **OQ-8 — Launch feasibility:** The readiness and event targets remain around 2026-11-20 and 2026-11-27. Confirm exact event details, owners, and whether the expanded first-release scope can be delivered and rehearsed in time. **Owner:** delivery lead and product owner. **Revisit:** before committing to the launch plan.

## Implementation assumptions adopted for planning

- New events start as drafts; the event price is a prefill only; each performance keeps its own value (UJ-1, FR-2–FR-3).
- Coupon usage counts discounted tickets, not orders; event coupons apply to the event's performances; a free invitation issues a normal admission ticket without payment (FR-10).
- Paper admission locks when its list is printed, digital admission locks when the first ticket is marked, and a manual admission with a later failed payment stays in the historical record (FR-17).
- Platform administrators grant venue access; venue administrators grant artist and door access within their venues (FR-19).
- The exact alphanumeric ticket-code format is an architecture decision constrained by uniqueness and ease of dictation (FR-8).
