const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {registerValidation, loginValidation} = require('../validation')

router.post('/register', async (req, res) => {

    //let's validate ({error} will pull error object from req.body)
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    //checking if email already exists 
    const emailExists = await User.findOne({email : req.body.email})
    if (emailExists) return res.status(400).send('Email already exists')

    const userExists = await User.findOne({username : req.body.username})
    if (userExists) return res.status(400).send('Username already exists')

    //hash passwd
    const salt = await bcrypt.genSalt(10)
    const hash_passwd = await bcrypt.hash(req.body.password, salt)

    // create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash_passwd
    });
    try {
        const saved_user = await user.save()
        res.redirect('chat')
        next()
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    //let's validate ({error} will pull error object from req.body)
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //checking if email already exists 
    const user = await User.findOne({email : req.body.email})
    if (!user) return res.status(400).send('Email  is invalid')

    //check if password if correct
    const passValid = await bcrypt.compare(req.body.password, user.password)
    if (!passValid) return res.status(400).send('password is invalid')

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token)
    res.send('ok')
})

module.exports = router