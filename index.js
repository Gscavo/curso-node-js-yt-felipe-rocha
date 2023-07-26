// const { Person } = require("./modules/person");
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect')

dotenv.config();

connectToDatabase();

// require('./packages/path');
// require('./modules/fs')
// require('./modules/http');

require('./modules/express')

// const person = new Person("Guilherme");