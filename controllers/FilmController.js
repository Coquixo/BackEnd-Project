const Film = require('../models/films');
const FilmController = {};

//Get All Films

FilmController.getFilms = async (req, res) => {

    Film.findAll()
        .then(resp => {
            res.send(resp);
        });
};

//Get A Film By Id

FilmController.getFilmById = async (req, res) => {

    try {
        let id_film = req.params.id;
        Film.findByPk(id_film)
            .then(resp => {
                res.send(resp);
            });
    } catch (error) {
        res.send(error);
    }
}

//Get Films By Tittle

FilmController.getFilmByTittle = async (req, res) => {

    try {
        let tittle = req.params.tittle;
        let resp = await Film.findAll({
            where: { tittle: tittle }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }

}

//Get Film By Genre

FilmController.getFilmsByGenre = async (req, res) => {

    try {
        let genre = req.params.genre;
        let resp = await Film.findAll({
            where: { genre: genre }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
};

//Get Top Rated Films 

FilmController.getTopRatedFilms = async (req, res) => {

    try {
        let resp = await Film.findAll({
            include: {
                model: Film,
                where: {
                    rate: [8 - 10]
                }
            }
        });
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
}

//Generate New Film

FilmController.registerFilm = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Film.create({
            tittle: data.tittle,
            genre: data.genre,
            rate: data.rate,
            release_date: data.release_date
        })
        res.send(resp)
    }
    catch (error) {
        res.send(error);
    }
};

//Update Existing Film

FilmController.updateFilm = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Film.update({

            tittle: data.tittle,
            genre: data.genre,
            rate: data.rate,
            release_date: data.release_date

        }, {
            where: { id_film: req.params.id_film }
        });
        res.send({
            message: 'Film updated correctly'
        })
    } catch (error) {
        res.send(error);
    }
};

//Delete Film by Id

FilmController.deleteFilm = async (req, res) => {

    try {
        let data = req.params;
        let resp = await Film.destroy({
            where: { id_film: data.id_film }
        })
        if (resp == 1) {
            res.send('Film has been deleted');
        } else {
            res.send("Film hasn't been deleted");
        }
    } catch (error) {
        res.send(error);
    }
};

module.exports = FilmController;