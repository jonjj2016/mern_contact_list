const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
	name  : {
		type     : String,
		required : true
	},
	email : {
		type     : String,
		required : true
	},
	phone : {
		type : String
	},
	type  : {
		type    : String,
		default : 'personal',
		enum    : [ 'personal', 'professional' ]
	},
	date  : {
		type    : Date,
		default : Date.now
	},
	user  : {
		type : mongoose.Schema.Types.ObjectId,
		ref  : 'User'
	}
});
module.exports = mongoose.model('Contact', ContactSchema);
