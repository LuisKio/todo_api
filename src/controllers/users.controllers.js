const UsersServices = require('../services/users.services');

const createUser = async(req, res) => {
    try {
        const dataUser = req.body;
        const result = await UsersServices.create(dataUser);

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = {
    createUser,
}