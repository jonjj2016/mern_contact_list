const mongoose = require('mongoose');
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_LOCAL, {
			useNewUrlParser    : true,
			useUnifiedTopology : true
		});
		console.log('mongoDb conneced');
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
module.exports = connectDB;
