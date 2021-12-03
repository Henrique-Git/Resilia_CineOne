const Sequelize = require('sequelize');

const seq = new Sequelize({
    dialect: 'sqlite',
    storage: './persist/database.sqlite'
})

module.exports = seq;