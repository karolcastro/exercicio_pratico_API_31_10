// importar o express
const express = require('express')
const router = express.Router()

const controller = require('../controles/filmesControler')// esta importando do controler

// rotas para o acesso // a ordem das rotas interfere
router.get('/', controller.get)
router.get('/diretor/:director', controller.getByDiretor)//  /:diretor é o params
router.get('/genero/:genre', controller.getByGenero)

//Crie uma rota Post que crie um novo filme e salve o resultado no arquivo json
// router.post('/',controller.post)


module.exports = router