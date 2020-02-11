const Contact = require('../models/Contact');
const User = require('../models/User');
const { checkForValidation } = require('../utils');

// @route GET api/v1/contacts
// @desc Get all users cotacts
//@access privat
exports.getAll = async (req, res, next) => {
	checkForValidation(req, res);
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.status(200).json({
			status : 'Success',
			data   : contacts
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({
			status  : 'Fail',
			message : 'Server Error'
		});
	}
};
// @route POST api/v1/contacts
// @desc ADD NEW cotact
//@access Privat
exports.postOne = async (req, res) => {
	checkForValidation(req, res);

	try {
		const user = req.user.id;
		const contact = await Contact.create({ ...req.body, user });
		res.status(200).json({ status: 'Success', data: contact });
	} catch (err) {
		res.status(500).json({
			status  : 'Fail',
			message : 'Server Error'
		});
	}
};
// @route Get api/v1/contacts/:id
// @desc get specific contact
//@access Privat
exports.getOne = async (req, res, next) => {
	try {
		//const contact=
	} catch (err) {}
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
