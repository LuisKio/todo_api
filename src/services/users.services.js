const Users = require('../models/users.model');

class UsersServices {
    static async create(dataUser){
        try {
            const usersCreated = await Users.create(dataUser);
            return usersCreated;
        } catch (error) {
            throw(error);
        };
    };
};


module.exports = UsersServices;
