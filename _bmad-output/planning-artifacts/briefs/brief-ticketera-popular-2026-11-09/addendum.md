# Technical and transition notes

The intended system has three applications:

- A Django backend exposing a REST API. The user wants the current stable Django release when implementation begins; no version has been selected yet.
- A Next.js web platform for event promotion and ticket sales.
- A React Native app built with Expo for venue staff to scan QR codes on printed tickets or phone screens and record admission.

The user wants the new implementation to start from an empty application project on `development`. Existing code may inform architecture, data modeling, domain logic, and domain module boundaries, but should not be reused as the new implementation by default. The former implementation and the uncommitted work present at the time of transition were captured at commit `bca752dc58a2fc7805356153fd6a32ace734360e` on `archive/development-pre-rebuild-2026-11-09`, which was published to `origin`. The new `development` branch retains BMad tooling and planning artifacts. Personal `config.user.*` files remain local and are ignored by Git.

These are intended outcomes, not claims about functionality in the current codebase.
