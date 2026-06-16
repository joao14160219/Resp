create table if not exists public.convite_resposta (
  id bigint generated always as identity primary key,
  resposta text not null check (resposta in ('aceitou', 'recusou')),
  pagina text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.convite_resposta enable row level security;

drop policy if exists "Permitir registrar resposta do convite" on public.convite_resposta;
create policy "Permitir registrar resposta do convite"
on public.convite_resposta
for insert
to anon
with check (resposta in ('aceitou', 'recusou'));
