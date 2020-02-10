const User = require('../models/User');

// route POST api/v1/users
// desc Register a user
//access Privat
exports.getUser = async (req, res) => {
	try {
		res.status(200).json({
			status : 'Success',
			data   : req.user
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
