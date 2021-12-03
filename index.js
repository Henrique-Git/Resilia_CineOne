(async()=>{
    const configExpress = require('./config/configExpress')
    const database = require('./persist/db');
    const Bilheteria = require('./models/bilheteria');

    try{
        const resultado = await database.sync();

        console.log('Conexão com o Banco de Dados Realizada com Sucesso');

        const app = configExpress()
        app.listen(3000, () => console.log(`Servidor Rodando: localhost:3000`));
    }
    catch(error){
        console.log(error);
    }
})();



/*const configExpress = require('./config/configExpress')
const conexao = require('./persist/conexao')
const tabelas = require('./persist/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log('Sucessooooo PORRAAA!')

        tabelas.init(conexao)
        const app = configExpress()

        app.listen(3000, () => console.log(`Servidor Rodando: localhost:3000`))
    }
})*/

