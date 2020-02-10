const User = require('../models/User');
const jwt = require('jsonwebtoken');
exports.protect = async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		//set token from Bearer in header
		token = req.headers.authorization.split(' ')[1];
	}
	//Check if token exists
	if (!token) {
		return res.status(401).json({
			status  : 'Fail',
			message : 'Not Authorized to access this route'
		});
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		//finding user
		req.user = await User.findById(decoded.id);
		next();
	} catch (err) {
		return res.status(401).json({
			status  : 'Fail',
			message : 'Not Authorized to access this route'
		});
	}
};
