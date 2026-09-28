# Architecture Note

## Goal
Ship a coherent, testable document workflow within a 4–6 hour timebox rather than reproduce Google Docs.

## Architecture
Browser (Next.js/React) → Supabase JS client → PostgreSQL.

Tiptap stores the editor document as structured JSON in `documents.content`, preserving rich-text structure across refreshes. Sharing is normalized in `document_shares`, while `users` provides seeded identities for the mock-auth reviewer flow.

## Data model
- `users`: reviewer identities
- `documents`: title, Tiptap JSON content, owner, timestamps
- `document_shares`: many-to-many document/user access grants

## Product decisions
1. **Mock auth instead of full auth:** the assignment explicitly permits seeded/mocked users. This keeps the core sharing behavior demonstrable while avoiding auth setup consuming the timebox.
2. **TXT/MD import:** useful, easy to verify, and avoids unreliable DOCX conversion in a short assessment.
3. **Structured editor JSON:** better than storing HTML because document structure remains explicit and editor-native.
4. **No real-time collaboration:** it is a stretch feature and would risk destabilizing persistence/sharing.
5. **Client-side save:** simple autosave on editor changes is sufficient for this small product slice. Production would add debouncing, optimistic state, conflict handling and audit/versioning.

## Production next steps
- Supabase Auth + strict user-scoped RLS
- Debounced autosave and offline retry
- Version history / conflict resolution
- File Storage for original uploads
- Comments and presence indicators
- E2E browser tests and observability
