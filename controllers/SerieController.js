const Serie = require('../models/series');

const SerieController = {};

//Get all Series

SerieController.getSeries = async (req, res) => {
    Serie.findAll()
        .then(resp => {
            res.send(resp);
        });
};

//Get one serie by id

SerieController.getSerieById = async (req, res) => {
    try {
        let id_serie = req.params.id
        Serie.findByPk(id_serie)
            .then(resp => {
                res.send(resp)
            })
    } catch (error) {
        res.send(error)
    }
}

//Get Series By tittle

SerieController.getSerieByTittle = async (req, res) => {
    try {
        let tittle = req.params.tittle;
        let resp = await Serie.findAll({
            where: { tittle: tittle}
        });
        res.send(resp);

    } catch (error) {
        res.send(error);
    }
}

//Get Top rated Serie 

SerieController.getTopRatedSeries = async (req, res) => {
    try {
        let resp = await Serie.findAll({
            include: {
                model: Serie,
                where: {
                    rate: [8, 10]
                }
            }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
}

//Generate new Serie

SerieController.registerSerie = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Serie.create({

            id_serie: data.id_serie,
            tittle: data.tittle,
            genre: data.genre,
            rate: data.rate,
            in_theater: data.in_theater,
            release_date: data.release_date

        })

        res.send(resp)
    }
    catch (error) {
        res.send(error);
    }
};

//Update Serie

SerieController.updateSerie = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Serie.update({

            tittle: data.tittle,
            genre: data.genre,
            rate: data.rate,
            in_theater: data.in_theater,
            release_date: data.release_date

        }, {
            where: { id_serie: data.id_serie }
        });

        res.send({
            resp: resp,
            message: 'Serie updated correctly'
        })
    } catch (error) {
        res.send(error);
    }
};

//Delete Serie

SerieController.deleteSerie = async (req, res) => {
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

};

module.exports = SerieController;