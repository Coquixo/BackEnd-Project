const { findAll } = require('../models/series');
const Serie = require('../models/series');
const { Op } = require("sequelize");
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
            where: { tittle: tittle }
        });
        res.send(resp);

    } catch (error) {
        res.send(error);
    }
}

//Get 7d upcoming series

SerieController.get7dUpcoming = async (req, res) => {
    const currentDate = new Date();

    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7)
    try {
        let resp = await Serie.findAll({
            where: {
                release_date: {
                    [Op.lte]: nextWeek,
                    [Op.gte]: currentDate
                }
            }
        })
        res.send(resp)


    } catch (error) {
        res.send(error)
    }



}

//Get Series that are on theaters 

SerieController.getTheaterSeries = async (req, res) => {
    try {

        let resp = await Serie.findAll({
            where: { in_theater: true }

        })

        res.send(resp);

    } catch (error) {
        res.send(error);
    }
}

//Get Top rated Serie 

SerieController.getTopRatedSeries = async (req, res) => {
    try {
        let resp = await Serie.findAll({
            where: { rate: [8 - 10] }

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

            where: { id_serie: req.params.id_serie }
        });

        res.send({
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