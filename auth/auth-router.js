const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../secret/secret');
const Users = require('../users/users-model');

// TOKEN GENERATOR
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secret.jwtSecret, options)
}

// POST REQUEST TO REGISTER A USER
router.post('/register', (req, res) => {
    const user = req.body;

    const hash = bcryptjs.hashSync(user.password, 12)
    user.password = hash;

    Users.add(user)
        .then(savedUser => {
            const token = generateToken(user)
            res.status(201).json({
                savedUser,
                token
            }
            )
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// POST REQUEST TO LOGIN USER
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findUserBy({ username })
        .first()
        .then(user => {
            console.log(user)
            if (user && bcryptjs.compareSync(password, user.password)) {
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