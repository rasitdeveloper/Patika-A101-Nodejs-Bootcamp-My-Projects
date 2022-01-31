module.exports = errorHandler;

function errorHandler(err, req, res, next) { // the function that enables to compile and control the errors that may occur in the system is defined.
    if (typeof(err) === 'string') { // if the type of error is string this if will work
        return res.status(400).json({message: err})
    }
    

    if (err.name === "UnauthorizedError") { // if the error is called UnauthorizedError, the message Token Not Available will be passed
        return res.status(401).json({message: 'Token Not Available'})
    }

    return res.status(500).json({ message: err.message }); // if the error is a general error this line of code will work

}