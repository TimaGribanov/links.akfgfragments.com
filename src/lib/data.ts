import mariadb from 'mariadb'
import * as config from '@/utils/config'

const pool = mariadb.createPool({
  host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PWD,
    database: config.DB_SCHEMA
})

export default pool