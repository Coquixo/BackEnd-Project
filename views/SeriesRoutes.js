const express = require('express');
const router = express.Router();
const SerieController = require('../controllers/SerieController')
const authControllers = require('../controllers/authController')

//Generate new Serie By Body

router.post('/register', authControllers.assertIsAdmin, SerieController.registerSerie);

//Get all Series

router.get('/getAll', SerieController.getSeries);

//Get 7d Upcoming Series

router.get('/releasedThisWeek', SerieController.get7dUpcoming)

//Get Top rated Series 

router.get('/getTopRated', SerieController.getTopRatedSeries);

//Get one serie by id

router.get('/getById/:id_serie', SerieController.getSerieById);

//Get Series by Tittle

router.get('/getByTittle/:tittle', SerieController.getSerieByTittle);

//Get Series that are on theaters 

router.get('/getAllTheater', SerieController.getTheaterSeries);

//Update Serie

router.put('/update/:id_serie', authControllers.assertIsAdmin, SerieController.updateSerie);

//Delete Serie by param

router.delete('/delete/:id_serie', authControllers.assertIsAdmin, SerieController.deleteSerie);

module.exports = router;