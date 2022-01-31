const express = require('express'); // lines of code that allow us to control root processes via express
let router = express.Router();
let productController = require('../../controllers/Product'); // productController definition that allows us to use functions inside productController


router.get('/fetchAllProduct', productController.fetchAllProduct); // if a get operation is made to localhost:3000/api/product/fetchAllProduct, the fetchAllProduct function in the productContoller will work.
router.get('/fetchSingleProduct/:id', productController.fetchSingleProduct);
router.get('/fetchDiscountProduct', productController.fetchDiscountProduct);
router.put('/updateStockNumber/:id', productController.updateStockNumber);
router.delete('/deleteSingleProduct/:id', productController.deleteSingleProduct);
router.post('/addProduct', productController.addProduct);

module.exports = router;