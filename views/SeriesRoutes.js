const express = require('express');
const router = express.router();

const Serie = require('../models/series');

//Get all Series

router.get('/getSeries', (req, res) => {

    Serie.findAll()
        .then(resp => {
            res.send(resp);
        });
});

//Generate new Serie

router.post('/registerSerie', async (req, res) => {

    try {
        let data = req.body;
        let resp = await Serie.create({

            id_serie: data.id_serie,
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

//Update Serie

router.put('/updateSerie', async (req, res) => {

    try {
        let data = req.body;
        let resp = await Serie.update({

            tittle: data.tittle,
            genre: data.genre,
            rate: data.rate,
            release_date: data.release_date

        }, {
            where: { id_serie: data.id_serie}
        });

        res.send({
            resp: resp,
            message: 'Serie updated correctly'
        })


    } catch (error) {
        res.send(error);
    }

});

//Delete Serie

router.delete('/deleteSerie/:id_serie', async (req, res) => {

    try {
        let data = req.params;
        let resp = await Serie.destroy({
            where: { id_serie: data.id_serie }

        })
        console.log(resp);

        if (resp == 1) {
            res.send('Serie has been deleted');
        } else {
            res.send("Serie hasn't been deleted");
        }

    } catch (error) {
        res.send(error);
    }

})

module.exports = router;