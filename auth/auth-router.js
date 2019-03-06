const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../secret/secret');
const Users = require('../users/users-model');

// POST REQUEST TO REGISTER A USER
router.post('/register', (req, res) => {
    const user = req.body;

    const hash = bcryptjs.hashSync(user.password, 12)
    user.password = hash;

    Users.add(user)
        .then(savedUser => {
            res.status(201).json(savedUser)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;