const express = require('express');
const { register, getAll, deleteUser } = require('../controllers/userController');
const { check } = require('express-validator');

const router = express.Router();

router.post(
	'/',
	[
		check('name', 'Please add name').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with minimum 6 characters').isLength({ min: 6 })
	],
	register
);
router.get('/', getAll);
router.delete('/:id', deleteUser);
module.exports = router;
