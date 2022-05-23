const express = require('express') // - 1min

const router = express.Router() // - 1min

router.get('/', (request, response) => {
    /**
     * json é o meu formato de resposta
     */
    const message = "bem vindas a Reprograma Music" // 1 min

    response.status(200).json({ message }) // 1 min
})

module.exports = router