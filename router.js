const express = require('express')
const router = express.Router()

const UsersRoutes = require('./views/UsersRoutes');
const OrdersRoutes = require('./views/OrdersRoutes');
const FilmsRoutes = require('./views/FilmsRoutes');
const SeriesRoutes = require('./views/SeriesRoutes');

// const UserRoutes = require('./views/UserRoutes')
// const ProfileRoutes = require('./views/ProfileRoutes')


//middleware para las rutas de usuario
// router.use('/user', UserRoutes)
// router.use('/profile', ProfileRoutes)

router.use('/users', UsersRoutes);
router.use('/orders', OrdersRoutes);
router.use('/films', FilmsRoutes);
router.use('/series', SeriesRoutes);

module.exports = router;