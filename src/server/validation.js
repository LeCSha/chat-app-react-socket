const joi = require('@hapi/joi')

const registerValidation = data => {
    //validation schema with joi package
    const schema = {
        name: joi.string().min(3).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    }
    return joi.validate(data, schema)
}

const loginValidation = data => {
    //validation schema with joi package
    const schema = {
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required(),
    }
    return joi.validate(data, schema)
} 

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation