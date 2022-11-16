import { pool } from "./db.js";

async function retrieveData() {
  try {
    const res = await pool.query("SELECT * FROM shark");
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  }
}

retrieveData()