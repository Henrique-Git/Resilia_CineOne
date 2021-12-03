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
/*{
    compraBilhete(bilheteria){
        const sql = 'INSERT INTO Bilheteria SET ?'

        conexao.query(sql, bilheteria, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log(resultados)
            }
        })
    }

    bilhetesComprados(res){
        const sql = 'SELECT * FROM Bilheteria'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }
            else{
                res.send(resultados)
            }
        })
    }
}*/

module.exports = Bilheteria;