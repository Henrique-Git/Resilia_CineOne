const express = require("express")
const consign = require("consign")
const bodyParser = require("body-parser")

const config = () =>{
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign()
        .include('controller')
        .into(app)
    
    return app
}

module.exports = config
