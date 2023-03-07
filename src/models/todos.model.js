const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'pending'
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
    },
});

module.exports = Todos;