const jwt = require('jsonwebtoken') // jwt definition for required jwt integration
const Joi = require('joi'); // joi definition for joi integration

exports.register = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}

exports.login = async (req,res) => { // if the user wants to login, they have to pass the email and password joi verification
    const schema = Joi.object({
        email: Joi.string().min(5).max(50).required(), // email must have a minimum of 10 and a maximum of 50 values and cannot be empty
        password: Joi.string().min(2).required() // password must contain at least 6 values and cannot be blank
    })

    try {
        const value = await schema.validateAsync({ email: req.body.email, password: req.body.password });
        // if the email and password sent to us from the frontend have passed the JOI checks successfully, this time we check whether they have entered the correct email and password
        if( value.email === 'deneme@gmail.com' && value.password === 'deneme123' ) {
            const secret = "deneme";
            // if the correct email and password are entered, we create an identity for this user
            const user = {
                id: 2,
                name: 'deneme2',
                surname: 'deneme3',
                email: 'deneme@gmail.com',
                role: 1,
                user_type: 'admin'
            }
            // with this ID, we create the jwt token of this user
            const token = jwt.sign(
                user,
                secret,
                { expiresIn: '7d'} // the validity period of the token is 7 days.
            );
            res.send({
                status: true,
                jwt: {
                    token: token,
                    expiresIn: '7d'
                },
                user // returning user information as response
            });
    
    
        } else { // if the entered email and password are in the joi filter, but an email or password that is not registered in the system is entered, we return false as a response.
            let response = {
                status: false
            }
            res.status(200).send(response)
        }
    }
    catch (err) { // if the entered email or password did not pass JOI validation, we return an error message.
        res.send({
            status: 400,
            message: "Please Enter Valid Values "
        })
    }

    
   
}


exports.jwtTest = (req,res) => {
    res.send({
        status: true,
        message: "jwttest calisti"
    })
}