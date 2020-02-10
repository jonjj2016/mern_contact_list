const mongoose = require('mongoose');
// @route GET api/v1/auth
// @ desc Get logged in user
//@access Privat
exports.login = async (req, res) => {
	res.send('get logged in user');
};
// @route Post api/v1/auth
// @desc auth user ad get token
//@access Public
exports.authUser = async (req, res) => {
	res.send('authenticate user');
};
