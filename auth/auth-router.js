const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../secret/secret');
const Users = require('../users/users-model');

module.exports = router;