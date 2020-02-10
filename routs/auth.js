const express = require('express');
const router = express.Router();
// @route GET api/v1/auth
// @ desc Get logged in user
//@access Privat
router.get('/', (req, res) => {
	res.send('get logged in user');
});
// @route Post api/v1/auth
// @desc auth user ad get token
//@access Public
router.post('/', (req, res) => {
	res.send('register a user');
});

module.exports = router;
