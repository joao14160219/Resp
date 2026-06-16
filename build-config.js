const fs = require('fs');

const url =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  '';

const anonKey =
  process.env.SUPABASE_ANON_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';

const table = process.env.SUPABASE_TABLE || 'convite_resposta';

if (!url || !anonKey) {
  console.warn('Supabase nao configurado: defina SUPABASE_URL e SUPABASE_ANON_KEY na Vercel.');
  process.exit(0);
}

const config = `window.SUPABASE_CONFIG = ${JSON.stringify({ url, anonKey, table }, null, 2)};\n`;

fs.writeFileSync('supabase-config.js', config);
