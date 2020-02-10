const express = require('express');
const { getUser, deleteUser } = require('../controllers/userController');
const { login, register } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const { protect } = require('../midleware/auth');
const router = express.Router();

router.post(
	'/register',
	[
		check('name', 'Please add name').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with minimum 6 characters').isLength({ min: 6 })
	],
	register
);
router.post(
	'/login',
	[ check('email', 'Please include valid email').isEmail(), check('password', 'Password is required').exists() ],
	login
);
router.get('/', protect, getUser);
router.delete('/:id', protect, deleteUser);
module.exports = router;
