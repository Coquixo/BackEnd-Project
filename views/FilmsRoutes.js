const express = require('express');
const router = express.Router();
const FilmController = require('../controllers/FilmController');
const authController = require('../controllers/authController');


//Get all Films

router.get('/getAll', FilmController.getFilms);

//Get Top rated Films  ----no ho se encara

router.get('/getTopRated', FilmController.getTopRatedFilms);

//Get one Film by id(param)

router.get('/getById/:id', FilmController.getFilmById);

//Get one film by Tittle(body)

router.get('/getByTittle/:tittle', FilmController.getFilmByTittle);

//Get Films by Genre

router.get('/getByGenre/:genre', FilmController.getFilmsByGenre);

//Register Film

router.post('/registerFilm', authController.assertIsAdmin, FilmController.registerFilm);

//Update Film

router.put('/updateFilm', authController.assertIsAdmin, FilmController.updateFilm);

//Delete Film

router.delete('/deleteFilm/:id_film', authController.assertIsAdmin, FilmController.deleteFilm);

module.exports = router;