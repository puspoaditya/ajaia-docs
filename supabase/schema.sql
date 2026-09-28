create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  created_at timestamptz default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  title text not null default 'Untitled document',
  content jsonb not null default '{"type":"doc","content":[{"type":"paragraph"}]}'::jsonb,
  owner_id uuid not null references public.users(id) on delete cascade,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.document_shares (
  document_id uuid references public.documents(id) on delete cascade,
  user_id uuid references public.users(id) on delete cascade,
  created_at timestamptz default now(),
  primary key(document_id,user_id)
);

alter table public.users enable row level security;
alter table public.documents enable row level security;
alter table public.document_shares enable row level security;

-- Assignment uses mock auth. Policies intentionally allow anonymous reviewer access;
-- the application enforces ownership/share visibility by the selected seeded user.
drop policy if exists users_read on public.users;
create policy users_read on public.users for select using (true);

drop policy if exists documents_all on public.documents;
create policy documents_all on public.documents for all using (true) with check (true);

drop policy if exists shares_all on public.document_shares;
create policy shares_all on public.document_shares for all using (true) with check (true);

insert into public.users (name,email) values
('Puspo Aditya','puspo@example.com'),
('Ajaia Reviewer','reviewer@ajaia.com'),
('Product Partner','partner@ajaia.com')
on conflict (email) do nothing;
