const axios = require('axios'); // package definition that will allow us to request freely on the internet

exports.fetch = async () => { // fetch function returns brands
    const response = await axios.get('https://api.trendyol.com/sapigw/brands');
    return response.data;
}

exports.fetchCategories = async () => { // fetchCategories function returns categories
    const response = await axios.get('https://api.trendyol.com/sapigw/product-categories');
    return response.data;
}

exports.singleFetchBrand = async (brandName) => { // the singleFetchBrand function returns the brand given the name parameter
    try {
        const response = await axios.get(`https://api.trendyol.com/sapigw/brands/by-name?name=${brandName}`)
        return {
            status: true,
            data: response.data
        }
    } catch {
        return {
            status: false,
            message: "Boyle bir kayit mevcut degilx"
        }
    }
    
    
}

exports.singleFetchCategory = async (categoryId) => { // singleFetchCategory function returns the category given the id parameter
    try {
        const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`);
        return {
            status: true,
            data: response.data
        }
    } catch {
        return {
            status: false,
            message: "Boyle bir kayit mevcut degilx"
        }
    }
    
    
}