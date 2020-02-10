const User = require('../models/User');
const { validationResult } = require('express-validator');
//Create and send jwt token to user
const sendTokenResponse = (user, statusCode, res) => {
	const token = user.getSinedJwtToken();
	res.status(statusCode).json({
		status : 'Success',
		token  : token,
		data   : user
	});
};
// route POST api/v1/users
// desc Register a user
//access Public
exports.register = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const checkUser = await User.findOne({ email: req.body.email });
		if (checkUser) {
			return res.status(400).json({
				status  : 'Fail',
				message : 'Email has allready registered'
			});
		}
		const user = await User.create(req.body);

		sendTokenResponse(user, 200, res);
	} catch (err) {
		res.status(500).json({
			status  : 'Fail',
			message : 'Server Error'
		});
	}

	//res.status(200).json({ msg: 'here all users' });
};

// route POST api/v1/users
// desc Register a user
//access Privat
exports.getAll = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json({
			status : 'Success',
			data   : users
		});
	} catch (err) {
		console.log(err.message);
	}
};
exports.deleteUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ status: 'Fali', message: `No user with id ${req.params.id}` });
		await User.findByIdAndDelete(req.params.id);
		res.status(204).json({
			status : 'Success',
			data   : ''
		});
	} catch (err) {
		console.log(err.message);
	}
};
