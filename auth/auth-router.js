const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../secret/secret');
const Users = require('../users/users-model');

// TOKEN GENERATOR


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

// POST REQUEST TO LOGIN USER
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findUserBy({ username })
        .first()
        .then(user => {
            if (user && bycryptjs.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}`,
                    token
                })
            } else {
                res.status(401).json({
                    message: 'Credentials are invalid'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;