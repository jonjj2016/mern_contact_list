const express = require('express');
const router = express.Router();
const { authUser, login } = require('../controllers/auth.controller');

router.route('/').get(login).post(authUser);

module.exports = router;
