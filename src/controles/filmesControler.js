// arquivo controler
const filmes = require('../model/filmes.json')
// const fs = require('fs'); // arquivo file system para gravar as informações

// esta pegando a lista de todas os filmes
exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}
//Crie uma rota GET que retorne uma lista de filmes de um diretor específico
exports.getByDiretor = (req, res) => {
    const director = req.params.director
    const diretor = filmes.filter(item => item.director == director)// trocar para filter

    res.status(200).send(diretor)
}

//Crie uma rota GET que retorne uma lista de filmes de um gênero específico
// preciso fazer 2 lacos pq tem um objeto dentro de outro objeto
exports.getByGenero = (req, res) => {
    const escolhergenero = req.params.genre

    // const array = filmes.filter( item => item.genre.includes(escolhergenero)) //forma abreviada

    let array = []
    for (let i = 0; i < filmes.length; i += 1) {// escolher dentro da lista maior
        for (let j = 0; j < filmes[i].genre.length; j += 1) {// escolher dentro da outra lista
            if (filmes[i].genre[j] === escolhergenero) {//buscar o que quer

                array.push(filmes[i])
            }
        }
    }
    return res.status(200).send(array)
}

// exports.post = (req, res) => {
//     const
// }