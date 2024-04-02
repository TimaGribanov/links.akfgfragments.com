const mariadb = require('mariadb')
const linksRouter = require('express').Router()
const logger = require('../utils/logger')
const config = require('../utils/config')

linksRouter.get('/', async (req, res, next) => {
  let isConnected = false
  let conn

  try {
    conn = await mariadb.createConnection({
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PWD,
      database: config.DB_SCHEMA
    })

    isConnected = true
  } catch (error) {
    next(error)
  }

  const query = `SELECT * FROM links WHERE id = ${req.query.id};`

  if (isConnected) {
    try {
      logger.info(`Running a query: ${query}`)

      const rows = await conn.query(query)
      res.status(200).json(rows)
    } catch (error) {
      logger.error(`Couldn't run a SELECT query: ${query}`, error.message)
      res.status(500).json({ error: 'Problem with a SELECT query' })
    }
  }
})

module.exports = linksRouter