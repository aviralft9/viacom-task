const express = require('express')
const UserDetails = require('../models/userdetails')
const router = new express.Router()
var userDetailsArray = [new UserDetails("testdata", "testdata", "testdata", "9999")];

router.post('/users', async (req, res) => {
    const user = new UserDetails(req.body.UserDetails)
    console.log(user.firstname);
    try {
        await userDetailsArray.push(user.firstname);
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users', async (req, res) => {
    res.send(userDetailsArray);
})

module.exports = router