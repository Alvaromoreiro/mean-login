const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    create: function(data) {
        const user = new this(data);
        return new Promise((resolve, reject) => {
            user.save((err, createdUser) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(createdUser);
                }
            });
        });
    },
    login: function(query) {
        return new Promise((resolve, reject) => {
            this.find(query, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            });
        });
    }
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;