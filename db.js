// https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-node-js-on-ubuntu-20-04
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config()

export const pool = new pg.Pool({
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    host: process.env.PGHOST,
});