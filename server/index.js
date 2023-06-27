const express = require('express')
const cors = require('cors')
const { login, register } = require('./controllers/auth')
const server = express()
const PORT = process.env.PORT || 4000
const db = require('./util/database')
const {User} = require('./util/models')

//! Middleware
server.use(express.json())
server.use(cors())


//! endpoints
server.post('/login', login)
server.post('/register', register)

db.sync()
server.listen(PORT, () => console.log(`Running on Port ${PORT}`))