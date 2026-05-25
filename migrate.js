const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const client = new Client({
  connectionString: 'postgresql://postgres.uhmctjacemlpkayjoiuz:victorsupabase123@aws-1-sa-east-1.pooler.supabase.com:5432/postgres'
});

async function run() {
  try {
    await client.connect();
    const migration = fs.readFileSync(path.join(__dirname, 'supabase/migrations/20240101000000_create_produtos_table.sql'), 'utf-8');
    const seed = fs.readFileSync(path.join(__dirname, 'supabase/seed.sql'), 'utf-8');
    
    console.log('Running migration...');
    await client.query(migration);
    console.log('Running seed...');
    await client.query('TRUNCATE public.produtos; ' + seed); // Reset the table before seeding
    console.log('Done.');
  } catch(e) {
    console.error(e);
  } finally {
    await client.end();
  }
}

run();
