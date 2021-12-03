<h1 align=center> CineOne :clapper:	</h1>

<h2 align=center> Projeto de uma API contendo as operações CRUD da bilheteria de um cinema </h2>

<p align='center'>
<img src="https://img.shields.io/static/v1?label=Status&message=UP&color=darkred&style=for-the-badge&logo=ghost"/>
</p>

### Navegação
--------------------

- #### [Sobre](#sobre)
- #### [Como Usar](#como-usar)
    - ##### [Pré-Requisitos](#pré-requisitos)
    - ##### [Dependências](#dependências)
    - ##### [Consumo](#consumo)
        - ###### [Rotas](#rotas)
- #### [Tecnologias Utilizadas](#tecnologias-utilizadas)
- #### [Contatos](#contatos)

--------------------

<h3 align=center>Sobre</h3>

<p align=justify> Projeto desenvolvido para fins educativos como requisito de conclusão do Módulo 4 da Formação FullStack da Resilia Educação. O projeto foi realizado em grupo, no entanto, cada um dos integrantes ficou responsável por uma <strong>Entidade</strong> definida sob o tema <strong>Cinema</strong>, sendo esse repositório atual o responsável pelas informações relacionadas à <strong>Bilheteria</strong>.</p>

--------------------

<h3 align=center>Como Usar</h3>

### Pré-Requisitos

<p align=justify>Para executar a API, primeiramente é necessário que seja realizada uma clonagem desse repositório para uma pasta do computador da seguinte maneira.</p>

```
git clone https://github.com/Henrique-Git/Resilia_CineOne

```
<p align=justify>Com o repositório copiado para uma pasta do computador, é necessário abrir o terminal e navegar até o caminho da pasta criada para o repositório.<p>

```
cd <nome da pasta>

```
<p align=justify>Finalizada essa etapa, podemos dar início à instalação das dependências utilizadas no projeto.</p>

### Dependências

<p align=justify>Para fazer as instalações de todas as dependências do projeto, é primeiro necessário que o computador possua instalado o <strong>NodeJS</strong>, pois as demais dependências utilizadas no projeto foram baseadas nesse ambiente.</p>

<p>Com o NodeJS instalado, todas as dependências podem ser instaladas através do mesmo comando:</p>

```
npm install <nome da dependência>

```
<p align=justify>As dependências utilizadas nesse projeto e que serão necessárias para sua execução foram:</p>

<ul>
    <li>Express</li>
    <li>Sqlite3</li>
    <li>Sequelize</li>
    <li>Consign</li>
    <li>Body-Parser</li>    
</ul>
    
### Consumo

<p align=justify>Após todas as dependências utilizadas no projeto serem instaladas, a API está pronta para ser executada. A primeira ação a ser tomada é a inicialização do servidor com <strong>Express</strong> através do comando:</p>
    
```
npm start

```

<p align=justify>Agora que o servidor já está rodando, para fazer o consumo da API e utilização das rotas definidas, pode ser utilizada qualquer ferramenta de testes de API desejada (Insomnia, Postman, SoapUI).</p>
    
#### Rotas

<p align=justify>As rotas disponibilizadas para consumo na API foram:</p>
