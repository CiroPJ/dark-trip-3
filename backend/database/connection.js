const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  allowExitOnIdle: true,
  port: process.env.PGPUERTO,
  // ssl: true
});

pool.connect()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Database connection error', err));

try {
  pool.query("SELECT NOW()");
  console.log("Database connected!!!!");
} catch (error) {
  console.log(error);
}

module.exports = { pool }
