// este é o coração da aplicação

// chamar o express 

const express = require('express')
const app =  express()

// criacao das rotas // a rota sera o index
const index = require('./routes/index')
const filmes = require('./routes/filmesRoute')

// const professoras = require('./routes/professorasRoute')

app.use(express.json());

app.use( function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    console.log('Passamos pelo app'), 
    next()
})

app.use('/' , index)// tudo que tiver a / ele vai chamar para o index
app.use('/filmes', filmes) // rota filmes


module.exports = app