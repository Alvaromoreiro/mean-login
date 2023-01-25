const Users = require('./auth.controller');
module.exports = (router) => {
    router.post('/register', Users.registerUser);
    router.post('/login', Users.loginUser);
    router.post('/logout', Users.logoutUser);
}