const brandService = require('../services/brand'); // definition required to use functions in brandService

exports.fetchBrand = async (req,res) => { // the fetch function in brandService will work and a response will be returned to us, within this response the brands will be returned
    const response = await brandService.fetch();
    res.send({
        status: true,
        data: response.brands
    })
}

exports.fetchCategories = async (req,res) => { // the fetchCategories function in the brandService will work and a response will be returned to us, categories will be returned in this response
    const response = await brandService.fetchCategories();
    res.send({
        status: true,
        data: response.categories
    })
}

exports.singleFetchBrand = async (req,res) => { // the singleFetchBrand function in the brandService will run and a response will be returned to us, in this response, the brand that we gave the name as a parameter will return.
    const response = await brandService.singleFetchBrand(req.params.name);
    res.send(response);

    
}

exports.singleFetchCategory = async (req,res) => { // the singleFetchCategory function in the brandService will work and a response will be returned to us, the category we have given the id as a parameter in this response will return.
    const response = await brandService.singleFetchCategory(req.params.id);
    res.send(response);

    
}