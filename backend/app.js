const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const linksRouter = require('./controllers/queries')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/links', linksRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app