const express = require('express');
const router = express.Router();
const SerieController = require('../controllers/SerieController')


//Get all Series

router.get('/getAll', SerieController.getSeries);

//Get Top rated Series ---- no ho se

router.get('/getTopRated', SerieController.getTopRatedSeries);

//Get one serie by id

router.get('/getById/:id', SerieController.getSerieById);

//Get Series by Tittle

router.get('/getByTittle/:tittle', SerieController.getSerieByTittle)

//Generate new Serie By Body

router.post('/registerSerie', SerieController.registerSerie);

//Update Serie

router.put('/updateSerie',SerieController.registerSerie);

//Delete Serie by param

router.delete('/deleteSerie/:id_serie', SerieController.deleteSerie);

module.exports = router;