const express = require('express') // - 30s

const app = express() // aqui crio a minha aplicação - 1min

app.use(express.json()) // aqui habilito o body-parse que irá permitir eu trabalhar com json no app - 1min

app.use(cors()) // aqui habilito os CORS deixando minha api aberta  - 1min

app.use("/", require('./routes/index')) // aqui defino minha rota inicial - 1min

app.use("/", require("./routes/musicRoutes")) // aqui defino minhas rotas para as musicas - 1min
 
module.exports = app // exporto minha aplicação - 1min