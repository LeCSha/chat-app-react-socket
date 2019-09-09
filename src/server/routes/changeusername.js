const router = require('express').Router();
const User = require('../model/user');

router.post('/change-username', async (req, res) => {
    const userExists = await User.findOne({username : req.body.username})
    if (userExists) return res.status(400).send('Username already exists')
    res.send('change username ok')
})

module.exports = router