var express = require('express')
var router = express.Router()
var post = require('../models/Post.js')
var { authCheck } = require('./middleware/auth')

/* GET ALL POSTS */
router.get('/', authCheck, function (req, res, next) {
  post.find(function (err, products) {
    if (err) return next(err)
    res.json(products)
  })
})

/* GET SINGLE POST BY ID */
router.get('/:id', function (req, res, next) {
  post.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* SAVE POST */
router.post('/', function (req, res, next) {

})

/* UPDATE POST */
router.put('/:id', function (req, res, next) {
  post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* DELETE POST */
router.delete('/:id', function (req, res, next) {
  post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
