const express = require('express') // requires express package required for server installation
const app = express()
const endPoint = require('./routes/api') // defining endPoint pointing to api
const jwt = require('./helpers/jwt') // required package for jwt integration
const errorHandler = require('./helpers/error-handler')  // route definition for error handler integration

app.use(express.json()); // code that allows parsing json data coming with frontend
app.use(jwt())  // line of code to perform root check in jwt integration
app.use('/api',endPoint);  // line of code that will require going to the endPoint definition for the api
app.use(errorHandler) // required line of code for error handler to work

app.listen(3000,()=>{ // we are starting to run the server on port 3000
    console.log('Server is running');
})