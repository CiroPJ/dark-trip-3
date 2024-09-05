const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  // Los parámetros host, user, password, database y port se definen en connectionString.
});

pool.connect()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Database connection error', err));

try {
  pool.query("SELECT NOW()")
    .then(() => console.log("Database query successful!"))
    .catch(err => console.error('Database query error', err));
} catch (error) {
  console.error('Unexpected error', error);
}

module.exports = { pool };

