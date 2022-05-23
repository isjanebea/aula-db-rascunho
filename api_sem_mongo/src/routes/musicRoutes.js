const express = require('express')

const router = express.Router()

const musicController = require("../controllers/musicController.js") // 1min

router.get("/musics", musicController.findAllMusics)  // 5 min, explicar o conceito de singular vs plural

router.get("/music/:id", musicController.findOneMusic) // 3min, reafirmar a explicacao anterior

router.post("/music/:id", musicController.createMusic) // 1min

router.put("/music/:id", musicController.updateOneMusic) // 1min

router.delete("/music/:id", musicController.deleteOneMusic) // 1min

module.exports = router