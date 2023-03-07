const TodosServices = require('../services/todos.services');

const getAllTask = async(req, res) => {
    try {
        const allTask = await TodosServices.getAllTask();
        console.log(allTask);
        res.status(200).json(allTask);
    } catch (error) {
        res.status(404).json(error);
    }
}

const createTask = async(req, res) => {
    try {
        const dataTask = req.body;
        const result = await TodosServices.create(dataTask);

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json(error);
    };
};

const updateTask = async(req, res) => {
    try {
        const {id} = req.params;
        const newData = req.body;
        
        await TodosServices.update(id, newData);

        res.status(204).send();
    } catch (error) {
        
        res.status(404).json(error);
    }
}

const deleteTask = async(req, res) => {
    try {
        const {id} = req.params;
        await TodosServices.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json(error);
    }
}



module.exports = {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
}