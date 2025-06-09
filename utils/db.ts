// server/utils/db.ts
import pg from 'pg';

// Destructure Client from the imported module
const { Client } = pg;

export const connectToDb = async () => {
  const config = useRuntimeConfig();

  const client = new Client({
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  });

  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Could not connect to the database');
  }
};
