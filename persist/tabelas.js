class tabelas{
    init(conexao){
        this.conexao = conexao
        console.log('Tabelas Chamadas DEUS É BOM')

        this.criarBilheteria()
    }

    criarBilheteria(){
        const sql = 'CREATE TABLE IF NOT EXISTS Bilheteria (id int NOT NULL AUTO_INCREMENT, horarios time NOT NULL, pgto varchar(200) NOT NULL, numIngressos int, idioma boolean NOT NULL, PRIMARY KEY (id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela Bilheteria Criada com Sucesso')
            }
        })
    }
}

module.exports = new tabelas