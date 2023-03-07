const {Router} = require('express');
const {createTask, getAllTask, updateTask, deleteTask} = require('../controllers/todos.controllers');

const router = Router();

router.get('/api/v1/todos', getAllTask);

router.post('/api/v1/todos', createTask);

router.put('/api/v1/todos/:id', updateTask);

router.delete('/api/v1/todos/:id', deleteTask);

module.exports = router;