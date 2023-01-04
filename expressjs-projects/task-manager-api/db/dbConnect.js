const mongoose = require('mongoose');

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
		console.log(`MongoDB connected to host: ${mongoose.connection.host}`);
	} catch (error) {
		console.log(error.message);
	}
}

module.exports = dbConnect;