require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PWD = process.env.DB_PWD
const DB_SCHEMA = process.env.DB_SCHEMA

export {
  DB_HOST,
  DB_USER,
  DB_PWD,
  DB_SCHEMA
}