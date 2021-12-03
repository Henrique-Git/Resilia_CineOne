const { update } = require('../models/bilheteria')
const Bilheteria = require('../models/bilheteria')
const Sequelize = require('sequelize')

const bilheteria = app => {
    app.get('/bilheteria', async (req, res) => {

        const todasCompras = await Bilheteria.findAll();
            
        res.send(todasCompras);  
    })

    app.get('/bilheteria/:id', async (req, res) => {

        const umaCompra = await Bilheteria.findOne({where: {id: req.params.id}})

        res.send(umaCompra)
    })

    app.post('/bilheteria', async (req, res) => {
        
        const compra = req.body

        const create = await Bilheteria.create(compra);

        res.send(compra)
    })

    app.delete('/bilheteria/:id', async (req, res) => {

        const apagaCompra = await Bilheteria.destroy({where: {id: req.params.id}})

        res.send(`Compra de número ${req.params.id} excluída`)
    })

    app.patch('/bilheteria/update/:id', async (req, res) => {
        
        const novosDados = req.body

        const atualizaCompra = await Bilheteria.findOne({where: {id: req.params.id}})
        
        atualizaCompra.update({
            horario: novosDados.horario ? novosDados.horario : bilheteria.horario, 
            pgto: novosDados.pgto ? novosDados.pgto : bilheteria.pgto,
            numIngressos: novosDados.numIngressos ? novosDados.numIngressos : bilheteria.numIngressos, 
            idioma: novosDados.idioma ? novosDados.idioma : bilheteria.pgto
        })

        await atualizaCompra.save()

        res.send(`Registro ${req.params.id} atualizado com sucesso`) 
    })
}
module.exports = bilheteria;