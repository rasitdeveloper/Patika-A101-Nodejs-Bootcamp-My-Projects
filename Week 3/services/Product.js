const AWS = require('aws-sdk'); // code to enable Amazon integration
const { v4: uuidv4 } = require('uuid'); // the package that will provide the id


AWS.config.update({ // amazon connection settings
    region: "YOUR REGION",
    accessKeyId: "YOUR ACCESS KEY ID",
    secretAccessKey: "YOUR SECRET ACCESS KEY",
    endpoint: "YOUR ENDPOINT"
});

let docClient = new AWS.DynamoDB.DocumentClient();
let table = "YOUR TABLE NAME"; // name of the table to work on

exports.fetchAllProduct = async () => { // function to fetch all products

    const item = {
        TableName: table,
    }

    try {
        const data = await docClient.scan(item).promise();   
        return {
            status: true,
            message: "All product fetched",
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}


exports.fetchSingleProduct = async (params) => { // function that will fetch the product related to Id

    const item = {
        TableName: table,
        Key:{
            productId: params.id
        }
    }

    try {
        const data = await docClient.get(item).promise();   
        return {
            status: true,
            message: `Id ${params.id} product fetched`,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}


exports.fetchDiscountProduct = async () => { // function that will fetch discounted products

    const item = {
        TableName: table,
        FilterExpression: "#attributeName = :value",
        ExpressionAttributeNames: {
            "#attributeName": "isDiscount",
        },

        ExpressionAttributeValues: {
             ":value": true,
        }
    
    };

    try {
        const data = await docClient.scan(item).promise();   
        return {
            status: true,
            message: "Discount true products fetched",
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}


exports.updateStockNumber = async (body, id) => { // function to update stock number with id

    var item = {
        TableName:table,
        Key:{
            "productId": id.id
        },
        UpdateExpression: "set stock = :stock",
        ExpressionAttributeValues:{
            ":stock": body.stock,
        },
        ReturnValues:"UPDATED_NEW"
    };

    try {
        const data = await docClient.update(item).promise();   
        return {
            status: true,
            message: `Id ${id.id} stock updated to ${body.stock}`,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}


exports.deleteSingleProduct = async (params) => { // function that will delete the product if it is not on discount with Id

    var control = await this.fetchSingleProduct(params);
    if(control.data.Item.isDiscount === true) { // First of all, it is checked whether it is on discount
        return {
            status: false,
            message: `Id ${params.id} could not be deleted because of discount true`
        }
    }

    var item = {
        TableName:table,
        Key:{
            "productId": params.id
        },
        ConditionExpression:"isDiscount = :value",
        ExpressionAttributeValues: {
            ":value": false,
        }
    };

    try {
        await docClient.delete(item).promise();   
        return {
            status: true,
            message: `Id ${params.id} deleted`,
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}


exports.addProduct = async (params) => { // Function for adding products

    const item = {
        TableName: table,
        Item:{
            productId: uuidv4(),
            stock: params.stock,
            productName: params.productName,
            isDiscount: params.isDiscount,
            category:{
                categoryId: params.category.categoryId,
                categoryName: params.category.categoryName
            }
        }
    }

    try {
        await docClient.put(item).promise();   
        return {
            status: true,
            message: `Id'si ${params.id} olan ürün eklendi`,
            data: item
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}