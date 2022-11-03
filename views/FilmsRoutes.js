const express = require('express');
const router = express.Router();
const FilmController = require('../controllers/FilmController');


//Get all Films

router.get('/getFilms',FilmController.getFilms);

//Generate new Film

router.post('/registerFilm', FilmController.registerFilm);

//Update Film

router.put('/updateFilm', FilmController.updateFilm);

//Delete Film

router.delete('/deleteFilm/:id_film', FilmController.deleteFilm);

module.exports = router;