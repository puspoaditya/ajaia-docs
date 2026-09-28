# AI Workflow Note

## Tools used
- ChatGPT: requirements decomposition, architecture decisions, scope prioritization, implementation assistance and review.
- AI coding assistance: generated and refined repetitive TypeScript/React/Supabase scaffolding.

## Where AI materially helped
AI reduced time spent on boilerplate, component wiring, Supabase query patterns, documentation structure and test scaffolding. I retained responsibility for selecting the product slice, data model, access model, editor behavior and scope cuts.

## What I changed/rejected
I rejected broader Google Docs-style scope such as real-time collaboration, comments and version history because those features would increase risk without improving completion of the required core workflow. I also chose TXT/Markdown import rather than DOCX conversion to keep file handling deterministic within the timebox.

## Verification
- TypeScript/build validation
- Automated unit test for document access logic
- Manual verification of create → edit → rename → refresh/reopen
- Manual verification of import → edit → persistence
- Manual verification of owner → share → switch user → shared document visibility
- Manual review of responsive layout and error states

AI output was treated as a draft implementation aid, not as a substitute for product or engineering judgment.
