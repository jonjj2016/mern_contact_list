const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
	name     : {
		type     : String,
		required : true
	},
	email    : {
		type     : String,
		unique   : true,
		required : true
	},
	password : {
		type     : String,
		required : true,
		select   : false
	},
	date     : {
		type    : Date,
		default : Date.now
	}
});
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	try {
		const salt = await bcrypt.genSalt(12);
		this.password = await bcrypt.hash(this.password, salt);

		console.log(this.password);
		next();
	} catch (err) {
		console.log(err.message);
	}
});
userSchema.methods.getSinedJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
};
userSchema.methods.comparePassword = function (givenPassword, userPassword) {
	return bcrypt.compare(givenPassword, userPassword);
};
module.exports = mongoose.model('User', userSchema);
