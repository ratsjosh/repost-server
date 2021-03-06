require('dotenv').config()

var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cors = require('cors')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var postsRouter = require('./routes/post')

// [START DATABASE CONNECTION]
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`, { promiseLibrary: require('bluebird') })
  .then(() => console.log('Database connection established'))
  .catch((err) => console.error(err))
// [END DATABASE CONNECTION]

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// [END AUTHENTICATION]

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/', indexRouter)
app.use('/api/posts', postsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
