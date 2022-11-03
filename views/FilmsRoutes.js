const express = require('express');
const router = express.Router();
const FilmController = require('../controllers/FilmController');


//Get all Films

router.get('/getAll',FilmController.getFilms);

//Get Top rated Films  ----no ho se encara

router.get('/getTopRated', FilmController.getTopRatedFilms);

//Get one Film by id(param)

router.get('/getById/:id' , FilmController.getFilmById);

//Get one film by Tittle(body)

router.get('/getByTittle/:tittle', FilmController.getFilmByTittle);

//Get Films by Genre

router.get('/getByGenre/:genre', FilmController.getFilmsByGenre);

//Generate new Film

router.post('/registerFilm', FilmController.registerFilm);

//Update Film

router.put('/updateFilm', FilmController.updateFilm);

//Delete Film

router.delete('/deleteFilm/:id_film', FilmController.deleteFilm);

module.exports = router;