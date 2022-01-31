const express = require('express'); // lines of code that allow us to control root processes via express
let router = express.Router();

let brandController = require('../../controllers/brand') // brandController definition that allows us to use the functions in the brandController

router.get('/', brandController.fetchBrand); // if the root directory of the brand is wanted to be reached with get, the fetchBrand function in the brandController will work
router.get('/category/:id', brandController.singleFetchCategory);
router.get('/categories', brandController.fetchCategories);
router.get('/brand/:name', brandController.singleFetchBrand);

module.exports = router;