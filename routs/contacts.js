const express = require('express');

const router = express.Router();
// @route GET api/v1/contacts
// @desc Get all users cotacts
//@access privat
router.get('/', (req, res) => {
	res.status(200).json({ msg: 'contact.js' });
});
// @route POST api/v1/contacts
// @desc ADD NEW cotact
//@access Privat
router.post('/', (req, res) => {
	res.status(200).json({ msg: 'contact.js' });
});
router
	.route('/:id')
	// @route POST api/v1/contacts/:id
	// @desc update existing cotact
	//@access Privat
	.patch((req, res) => {
		res.status(301).json({ msg: 'patch.js' });
	})
	// @route Delete api/v1/contacts/:id
	// @desc delete cotact
	//@access Privat
	.delete((req, res) => {
		res.status(204).json({ msg: 'delete.js' });
	})
	// @route Get api/v1/contacts/:id
	// @desc get specific contact
	//@access Privat
	.get((req, res) => {
		res.status(201).json({ msg: 'getOne.js' });
	});
console.log(router);
module.exports = router;
