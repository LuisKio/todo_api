const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');

class TodosServices{
    static async create(dataTask){
        try {
            const resultTask = Todos.create(dataTask);

            return resultTask;
        } catch (error) {
            throw(error);
        };
    };

    static async getAllTask(){
        try {
            const dataTaks = Todos.findAll({
                include: {
                    model: Categories
                }
            });
            return dataTaks;
        } catch (error) {
            throw(error);
        };
    };

    static async update(id, newData) {
        try {
            await Todos.update(newData, {
                where: {
                    id
                }
            });
        } catch (error) {
            throw(error);
        };
    };

    static async delete(id){
        try {
            await Todos.destroy({
                where: {
                    id
                }
            });
        } catch (error) {
            throw(error);
        }
    }

};

module.exports = TodosServices;