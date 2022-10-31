const express = require('express');
const router = express.router();

const Film = require('../models/films');

//Get all Films

router.get('/getFilms', (req, res) => {

    Film.findAll()
        .then(resp => {
            res.send(resp);
        });
});

//Generate new Film

router.post('/registerFilm', async (req, res) => {

    try {
        let data = req.body;
        let resp = await Film.create({

            id_film: data.id_film,
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
})

//Update Film

router.put('/updateFilm', async (req, res) => {

    try {
        let data = req.body;
        let resp = await Film.update({

            tittle: data.tittle,
            genre: data.genre,
            rate: data.rate,
            release_date: data.release_date

        }, {
            where: { id_film: data.id_film }
        });

        res.send({
            resp: resp,
            message: 'Film updated correctly'
        })


    } catch (error) {
        res.send(error);
    }

});

//Delete Film

router.delete('/deleteFilm/:id_film', async (req, res) => {

    try {
        let data = req.params;
        let resp = await Film.destroy({
            where: { id_film: data.id_film }

        })
        console.log(resp);

        if (resp == 1) {
            res.send('Film has been deleted');
        } else {
            res.send("Film hasn't been deleted");
        }

    } catch (error) {
        res.send(error);
    }

})

module.exports = router;