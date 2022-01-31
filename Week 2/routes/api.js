const express = require('express'); // Lines of code that allow us to control root processes via express
let router = express.Router();

const userEndpoint = require('./user/user') // defining endPoint pointing to user
const brandEndpoint = require('./brand/brand') // defining endPoint pointing to brand

router.use('/user', userEndpoint) // The roads that make up the skeleton of the project are defined, the paths that can be reached after the API
router.use('/brand', brandEndpoint)


module.exports = router;