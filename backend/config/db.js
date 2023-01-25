const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dbUrl = require('./properties').DB;

module.exports = () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB ', err));

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
}