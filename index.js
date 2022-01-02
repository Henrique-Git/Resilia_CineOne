(async()=>{
    const configExpress = require('./config/configExpress')
    const database = require('./persist/db');
    const Bilheteria = require('./models/bilheteria');

    try{
        const resultado = await database.sync();

        console.log('Conexão com o Banco de Dados Realizada com Sucesso');

        const app = configExpress()
        app.listen(process.env.PORT || 3000, () => console.log(`Servidor Rodando: localhost:3000`));
    }
    catch(error){
        console.log(error);
    }
})();


