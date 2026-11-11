# PRD Quality Review — Ticketera Popular

## Overall verdict

The draft accurately captures the four core journeys and several important decisions that supersede the brief. It is useful for further UX and architecture discovery, but not yet a safe build baseline for the first paid event: the payment, inventory, paper-admission, and permission rules still contain launch-critical gaps, and the expanded scope has no feasibility assessment against the tentative date.

## Decision-readiness — thin

The PRD states unusual but deliberate boundaries clearly: the venue receives the whole payment, settlement happens outside the system, a function has one `rendered` flag, and paper versus digital admission is exclusive. Open questions are visible. The first-event commitment, however, includes every FR while OQ-4 through OQ-8 leave behavior unresolved that could change checkout, admission, and permissions.

### Findings

- **High — Launch commitment lacks a feasibility decision** (Vision and launch outcome; MVP; OQ-8). The tentative readiness date is 2026-11-20 while the first-event scope includes 19 FRs and an application that has not yet been scaffolded. *Fix:* confirm dates and first-event configuration, then assess delivery and rehearsal capacity. If the scope cannot be met, bring a scope or date decision back to the product owner.
- **High — Paid-event exceptions remain unresolved** (OQ-4–OQ-7). The PRD does not decide how a pending or failed payment, refund, exhausted stage, or stale paper list affects ticket validity and entry. *Fix:* resolve those behaviors before using the PRD for stories or acceptance tests.

## Substance over theater — adequate

The journeys use concrete venue, event, price, and door scenarios. The distinction between stage openings and publication is substantive. Cross-cutting quality requirements are mostly product-specific, though availability and usability are still qualitative.

### Findings

- **Medium — Quality bounds are too soft** (Cross-cutting quality requirements). “Operational readiness check” and “short enough to dictate” do not say what a successful rehearsal or code-lookup experience requires. *Fix:* set a door and checkout rehearsal criterion and a measurable lookup or admission response target once the operating conditions are known.

## Strategic coherence — adequate

The product thesis is a shared sales record and low-fee ticketing for cultural spaces. Most features serve that thesis. The scope has grown far beyond the original pilot, but the rationale is traceable to explicit user decisions. The low-fee promise still lacks a cost or pricing target.

### Findings

- **Medium — Low-fee promise is untestable** (Vision; Success measures). The PRD says the fee should be low but does not define against what benchmark or ceiling. *Fix:* name a target or record the pricing decision as an owner-assigned open item before launch.

## Done-ness clarity — thin

Several FRs express a verifiable outcome, but they do not consistently define conditions or edge cases. FR-4 and FR-8–FR-10 are especially sensitive to simultaneous checkout, payment confirmation, coupon redemptions, and stage boundaries.

### Findings

- **High — Inventory and payment lifecycle can diverge** (FR-4, FR-7–FR-10). The document forbids online overselling but does not define whether and when tickets are held, what happens if a stage changes while checkout is pending, or how a delayed payment confirmation is handled. *Fix:* specify buyer-visible outcomes and ticket validity for each state; leave transport and locking mechanisms to architecture.
- **High — Paper admission and ongoing online sales conflict** (FR-17, OQ-6). A printed list can become stale while sales continue, and the performance cannot switch to digital mode. *Fix:* decide the sales cutoff or a way for staff to handle tickets bought after printing without making a second digital admission record.
  - **Partially resolved in PRD:** the venue closes new online checkout before printing, but may have existing pending payments. The user chose a human door decision for those cases; whether printing proceeds with pending attempts and how they are listed remains to be confirmed.
- **Medium — Coupon accounting is underspecified** (FR-10, OQ-4). “Maximum number of redemptions” is ambiguous for a multi-ticket order, and fixed discounts may exceed the ticket price. *Fix:* specify whether usage counts orders or tickets and the minimum payable amount.

## Scope honesty — adequate

The draft explicitly states the first-release override for presales and mobile scanning, and it keeps later ticket types and automated settlement out. Assumptions and questions are visible, but the density is still too high for a final paid-launch PRD.

### Findings

- **High — Role/privacy boundary is a launch dependency** (FR-11, FR-12, FR-15, FR-19, OQ-7). Artist exports and duplicate-use screens expose buyer information, yet which artist and door-staff accounts can see which records is undecided. *Fix:* specify the minimum role and event-access matrix and the fields each role may view or export.

## Downstream usability — adequate

The glossary, UJ IDs, and FR IDs are present and contiguous. The feature groups are usable for epic planning. UJ-3 and UJ-4 lack named protagonists, and some terms alternate between “rendered,” “rendition,” and “settlement.”

### Findings

- **Medium — Two journeys lack named protagonists** (UJ-3 and UJ-4). This weakens the user-grounded handoff to UX. *Fix:* ask for one ensemble member and one door worker, with a reason each opens the product.

## Shape fit — adequate

A journey-led PRD fits this four-role ticketing product. Technical choices are mostly in the addendum. The document is longer than a simple pilot plan because the user explicitly made the first event a real launch with multiple operational paths; that length is warranted.

## Mechanical notes

- FR-1 through FR-19 and UJ-1 through UJ-4 are contiguous and unique.
- The Assumptions Index covers the eight inline `[ASSUMPTION]` tags.
- The success measures cross-reference FRs, but their measurement method and timing are not yet specified.
- `rendered`, `rendition`, and `settlement` should be standardized in the final prose pass.

## Follow-up after review

The draft now defines one ticket type per performance, paper printing with pending attempts identified separately, a manual door decision for a pending buyer, and planning defaults for coupon usage, admission-mode locking, and role grants. FR and UJ IDs remain contiguous. Payment adjustments and the delivery feasibility of the expanded 2026-11-20 target still require dedicated planning before implementation; this review remains a record of risks found during drafting.
