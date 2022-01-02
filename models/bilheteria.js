const Sequelize = require('sequelize')
const database = require('../persist/db')

const Bilheteria = database.define('bilheteria', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    horario:{
        type: Sequelize.TIME,
        allowNull: false
    },

    pgto:{
        type: Sequelize.STRING,
        allowNull: false
    },

    numIngressos:{
        type: Sequelize.INTEGER,
    },

    idioma:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Bilheteria;