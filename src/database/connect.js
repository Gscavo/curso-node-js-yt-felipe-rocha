const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.f4hu1xj.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Conectado ao banco com sucesso");
}

module.exports = connectToDatabase;