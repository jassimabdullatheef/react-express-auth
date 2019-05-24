const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const mongoose = require('mongoose')

// Database
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true })

// App setup
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)
