import pkg from "pg"
import dotenv from "dotenv"

const { Pool } = pkg

dotenv.config()
const pool = new Pool({

    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
})





export { pool }