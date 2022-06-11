
// src/app.js
const express = require('express') // 1
const cors = require('cors') // 1.2
const app = express() // 1.3

app.use(express.json()) // 1.4
app.use(cors()) // 1.5


module.exports = app // 1.6

// ------------------------------
// server.js

const app = require('./src/app')

const PORT = process.env.PORT || 8000

// process.env

/**
 * são as variaveis de ambiente presente na nossa maquina, ao utilizar a dependencia dotenv
 * conseguimos expor as variaveis que possuimos no .env
 * para a nossa api e dessa forma, conseguimos acessar dados sensiveis
 * como senha do banco de dados
 * ou um usuario e senha por exemplo.
 */

app.listen(8000, () => 'Tudo bem não funcionar, mas se rodar, vá na porta: ' + PORT)


// ---------------------------------------------------------------------------------------

// moogoseConnect.js

const moogose = require('moogose')

const MONGODB_URI = process.env.MONGODB_URI
/**
 * explicar do porque pegar a url do banco pelo env
 */

const moogoseConnect = async () => {
    try {
        /**
         * explicar  o setup de conexão
         */
        await moogose.connect(MONGODB_URI,  {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })

        console.log('huhu, banco conectado')
    } catch (error) {
        console.error(error) // mostra o erro no terminal
        process.exit(1) // encerra a nossa api
    }
}

module.exports = { moogoseConnect }

//  musicaSchema.js

const mongoose = require('mongoose');

/**
 * entidade:
 */
const musicaSchema = new mongoose.Schema({
    artist: {
        type: String,
        required: true
    },

    album: String,

    /**
     * provocar elas sobre duração, Numero?  String? Date?
     */
    duracao: String,

    year: Date,

    title: String,

    like: Number,

    comments: {
        default: [],
        type: [String]
    },

    legends: false

}, { timestamp })


/**
 * explicar aonde está a collection e a schema
 */
const musicaModel = mongoose.model("musica", musicaSchema)

module.exports = musicaModel

// 

const createMusic = async (req, res) => {
    try {
        const newMusic = new MusicaModel(req.body)

        const savedMusic = await newMusic.save()

        res.status(201).json(savedMusic)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}


const findAllMusic = async (req, res) => {
   try {

    const allMusic = await MusicaModel.find(req.query)

    res.status(200).json(allMusic)

   } catch (error) {
     res.status(500).json({ message: error.message})
   }
}

const findById = async (req, res) => {
    try {

        const findMusic = await MusicaModel.findById(req.params.id)
        res.status(200).json(findMusic)

    } catch (error) {
        res.status(500).json({ message: error.message })        
    }
}

const findMusicsByArtist = async () => {
    try {
        const allMusic = await MusicaModel.find({
            artist: new RegExp(req.query.artist, 'ig')
        })

        res.status(200).json(allMusic)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ... rotas