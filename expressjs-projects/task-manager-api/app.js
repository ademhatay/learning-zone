const express = require('express');
const dbConnect = require('./db/dbConnect');
require('dotenv').config();
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express();

//db
dbConnect();

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const server = () => {
	try {
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}...`);
		})
	} catch (error) {
	console.log(error);
	}
}

server();