const { validationResult } = require('express-validator');

exports.checkForValidation = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
};
