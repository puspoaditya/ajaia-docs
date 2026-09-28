# Ajaia Docs

A focused Google-Docs-inspired collaborative document editor built for the Ajaia AI-Native Full Stack Developer assignment.

## Product slice
- Create, rename, edit and reopen documents
- Rich text: bold, italic, underline, H1/H2, bullets, numbered lists
- Import `.txt` and `.md` files into an editable document
- Mock authentication with three seeded users
- Owner/share model persisted in Supabase
- Owned vs Shared dashboard sections are represented by badges
- Responsive, reviewer-friendly UI

## Stack
Next.js + TypeScript + Tiptap + Supabase PostgreSQL + Vercel.

## Local setup
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local` and fill `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. `npm install`
5. `npm run dev`
6. Open http://localhost:3000.

### Seeded reviewer accounts
- Puspo Aditya — puspo@example.com
- Ajaia Reviewer — reviewer@ajaia.com
- Product Partner — partner@ajaia.com

This assignment intentionally uses mock auth. Select a user from the top-right switcher. The application uses the selected identity to demonstrate ownership and sharing behavior; a production version would replace this with Supabase Auth and authenticated RLS policies.

## Tests
`npm test`

## Deployment
Deploy to Vercel with the same two public environment variables. Run the Supabase SQL migration first.

## Scope decisions
Real-time collaboration, comments, version history, granular roles and DOCX import were intentionally deprioritized. The highest-value end-to-end path is create/edit/save/import/share/reopen.
