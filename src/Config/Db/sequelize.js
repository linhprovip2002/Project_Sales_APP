const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql',
});
