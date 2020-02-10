const User = require('../models/User');
const { validationResult } = require('express-validator');
const checkForValidation = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
};
//Create and send jwt token to user
const sendTokenResponse = (user, statusCode, res) => {
	const token = user.getSinedJwtToken();
	res.status(statusCode).json({
		status : 'Success',
		token  : token
	});
};
// route POST api/v1/users
// desc Register a user
//access Public
exports.register = async (req, res) => {
	checkForValidation(req, res);

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
// @route GET api/v1/auth
// @ desc Get logged in user
//@access Privat
exports.login = async (req, res) => {
	console.log(req.body);
	//Checking for input validation
	checkForValidation(req, res);
	//retriving data from request body
	const { email, password } = req.body;
	try {
		//finding user
		const user = await User.findOne({ email }).select('password');
		//checking if there is a user with paramertre provided
		if (!user) return res.status(404).json({ status: 'Fail', message: 'Invalid Credentials' });
		const isMatch = await user.comparePassword(password, user.password);
		if (!isMatch) return res.status(404).json({ status: 'Fail', message: 'Invalid Credentials' });
		//here we have checked user and we send him back jwt token
		sendTokenResponse(user, 200, res);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ status: 'Fail', message: 'Server Error' });
	}
};
// @route Post api/v1/auth
// @desc auth user ad get token
//@access Public
exports.authUser = async (req, res) => {
	res.send('authenticate user');
};
