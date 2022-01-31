const categoryService = require('../services/Product')

exports.fetchAllProduct = async (req,res) => { // function to fetch all products
    const response = await categoryService.fetchAllProduct();
    res.send(response);
}

exports.fetchSingleProduct = async (req,res) => { // function that will fetch the product related to Id
    const response = await categoryService.fetchSingleProduct(req.params);
    res.send(response);
}

exports.fetchDiscountProduct = async (req,res) => { // function that will fetch discounted products
    const response = await categoryService.fetchDiscountProduct();
    res.send(response);
}

exports.updateStockNumber = async (req,res) => { // function to update stock number with id
    const response = await categoryService.updateStockNumber(req.body, req.params);
    res.send(response);
}

exports.deleteSingleProduct = async (req,res) => { // function that will delete the product if it is not on discount with Id
    const response = await categoryService.deleteSingleProduct(req.params);
    res.send(response);
}

exports.addProduct = async (req,res) => { // function for adding products
    const response = await categoryService.addProduct(req.body);
    res.send(response);
}