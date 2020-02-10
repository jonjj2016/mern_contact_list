const mongoose = require('mongoose');
// @route GET api/v1/contacts
// @desc Get all users cotacts
//@access privat
exports.getAll = (req, res, next) => {
	res.status(200).json({ msg: 'get all contacts' });
};
// @route POST api/v1/contacts
// @desc ADD NEW cotact
//@access Privat
exports.postOne = (req, res) => {
	res.status(200).json({ msg: 'add a contact' });
};
// @route Get api/v1/contacts/:id
// @desc get specific contact
//@access Privat
exports.getOne = (req, res, next) => {
	res.status(200).json({ msg: 'get one contact' });
};
// @route POST api/v1/contacts/:id
// @desc update existing cotact
//@access Privat
exports.update = (req, res, next) => {
	res.status(200).json({ msg: 'update one contact' });
};
// @route Delete api/v1/contacts/:id
// @desc delete cotact
//@access Privat
exports.deleteOne = (req, res, next) => {
	res.status(200).json({ msg: 'delete one contact' });
};
