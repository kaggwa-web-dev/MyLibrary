
const express = require('express')
const app = express()
const dotenv = require("dotenv")
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require ('mongoose')
const connectDB = require (`./config/db`)

// Load config
dotenv.config({path:'./config/config.env'})

const db = connectDB()

const PORT = process.env.PORT || 5000

app.use('/', indexRouter)
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

