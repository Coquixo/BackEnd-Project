const express = require('express');
const router = express.Router();
const SerieController = require('../controllers/SerieController')


//Get all Series

router.get('/getSeries', SerieController.getSeries);

//Generate new Serie By Body

router.post('/registerSerie', SerieController.registerSerie);

//Update Serie

router.put('/updateSerie',SerieController.registerSerie);

//Delete Serie by param

router.delete('/deleteSerie/:id_serie', SerieController.deleteSerie);

module.exports = router;