const app = require('./src/app')
const port = 4000   
app.listen(port, function(){
    console.log (`app esta rodando na porta ${port}`)
})