const express = require('express') // lines of code that allow us to control root processes via express
let router = express.Router()

const productEndpoint = require('./product/product') // defining endPoint pointing to product

router.use('/product', productEndpoint) // the roads that make up the skeleton of the project are defined, the paths that can be reached after the API


module.exports = router;