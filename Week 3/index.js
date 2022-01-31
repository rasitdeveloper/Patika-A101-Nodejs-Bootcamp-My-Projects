const express = require('express') // requires express package required for server installation
const app = express()
const apiEndpoint = require('./routes/api') // defining endPoint pointing to api
const errorHandler = require('./helpers/error-handler') // route definition for error handler integration

app.use(express.json()); // code that allows parsing json data coming with frontend
app.use('/api',apiEndpoint); // line of code that will require going to the endPoint definition for the api
app.use(errorHandler) // required line of code for error handler to work

app.listen(3000,()=>{ // we are starting to run the server on port 3000
    console.log('Server is running');
})