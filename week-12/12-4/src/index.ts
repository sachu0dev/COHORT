import { Client } from "pg";
const client = new Client({
  connectionString: "postgresql://postgres:sachu@localhost/postgres",
});

// const createUsersTable = async () => {
//   await client.connect();
//   const result = await client.query(`
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//   );
//   `);
//   console.log(result);
// };

// createUsersTable();

// const insertUserData = async (
//   username: string,
//   password: string,
//   email: string
// ) => {
//   await client.connect();
//   const result = await client.query(
//     `
//     INSERT INTO users (username, password, email)
//     VALUES ($1,$2,$3)
//   `,
//     [username, password, email]
//   );
//   console.log(result);
// };

// insertUserData("arushi", "123456", "arushi@gmail.com");

// const getUserData = async (id: number) => {
//   await client.connect();
//   const result = await client.query(
//     `
//   SELECT *  FROM  users
//   WHERE id = ($1)
//   `,
//     [id]
//   );
//   console.log(result);
// };

// getUserData(1);
