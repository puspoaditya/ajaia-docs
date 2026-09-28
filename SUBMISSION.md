# Ajaia Assignment Submission

Candidate: Puspo Dwi Aditya

## Included
- Source code: this repository
- `README.md`: local setup, seeded users and deployment notes
- `ARCHITECTURE.md`: architecture and scope decisions
- `AI_WORKFLOW.md`: AI usage and verification
- `SUBMISSION.md`: submission checklist
- `supabase/schema.sql`: database schema + seed data
- `tests/documents.test.ts`: automated access-control unit tests

## Live product
Replace with the deployed Vercel URL before submission.

## Walkthrough video
Replace with the public Loom/YouTube/Vimeo/Drive URL before submission.

## Reviewer accounts
- Puspo Aditya — puspo@example.com
- Ajaia Reviewer — reviewer@ajaia.com
- Product Partner — partner@ajaia.com

## Core functionality
Working: create, rename, rich-text edit, autosave, reopen, TXT/MD import, owner/share model, owned/shared visibility.

Intentionally partial/not included: real-time collaboration, comments, version history, DOCX import, production authentication/RLS.

## Next 2–4 hours
1. Replace mock auth with Supabase Auth + strict RLS.
2. Add debounced autosave/version history.
3. Add DOCX import and Supabase Storage attachments.
4. Add E2E tests and deployment smoke tests.
