const expressJwt = require('express-jwt');
const secret = "deneme";

module.exports = jwt;

function jwt() {
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // this path is defined as public and anyone who wants can send requests to this path
            '/api/user/login'
        ]
    })
}