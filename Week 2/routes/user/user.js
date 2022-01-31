const express = require('express'); // lines of code that allow us to control root processes via express
let router = express.Router();
let userController = require('../../controllers/User') // brandController definition that allows us to use the functions in the brandController


router.post('/',userController.register) // if the root directory of the user is to be accessed by post, the register function in the userController will work
router.post('/login',userController.login)
router.post('/jwttest',userController.jwtTest)


module.exports = router;