const express = require('express');
const router = express.Router();
// route GET api/v1/users
// desc Get all users
//access Privat
router.get('/', (req, res) => {
	res.status(200).json({ msg: 'here all users' });
});
// route POST api/v1/users
// desc Register a user
//access Public
router.get('/', (req, res) => {
	res.status(200).json({ msg: 'here all users' });
});

module.exports = router;
