
const express = require('express')
const app = express()
const dotenv = require("dotenv")
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit:'10mb', extended: false}))

const mongoose = require ('mongoose')
const connectDB = require (`./config/db`)

// Load config
dotenv.config({path:'./config/config.env'})

// Connect to database
connectDB()

const PORT = process.env.PORT || 5000

app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

