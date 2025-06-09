// server/db/user.ts
import { connectToDb } from '../../utils/db';

export const fetchUsers = async () => {

  const client = await connectToDb();
  try {
    const res = await client.query('SELECT * FROM users');
    return res.rows; // return the rows from the query
  } finally {
    await client.end(); // Always close the connection
  }
};
