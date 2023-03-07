const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');

initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log('DB CONECTADA');
    })
    .catch((err) => {
        console.log(`Error ${err}`);
    });

db.sync({alter: true})
    .then(() => {
        console.log('DATABASE SINCRONIZADA');
    })
    .catch((err) => {
        console.log(`Error ${err}`);
    });

app.use(userRoutes);
app.use(todosRoutes);

app.listen(PORT, () => {
    console.log(`ESCUCHANDO EN EL PUERTO ${PORT}`);
});