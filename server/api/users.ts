import { fetchUsers } from "../db/users";

export default defineEventHandler(async () => {
  try {
    const users = await fetchUsers();
    return { users };
  } catch (error) {
    return { error: 'Failed to fetch users' };
  }
});
