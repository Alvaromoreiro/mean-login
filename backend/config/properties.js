const USER = 'admin';
const PASSWORD = '----------------';

module.exports = {
    SECRET_KEY: 'secret123',
    PORT: 3000,
    DB: `mongodb+srv://${USER}:${PASSWORD}@cluster0.gjui2hj.mongodb.net/?retryWrites=true&w=majority`,
}