const express = require('express')
const router = express.Router()

const UsersRoutes = require('./views/UsersRoutes');
const OrdersRoutes = require('./views/OrdersRoutes');
const FilmsRoutes = require('./views/FilmsRoutes');
const SeriesRoutes = require('./views/SeriesRoutes');

 
const authFunctions = require('./controllers/authController')

// router.post("/login", authFunctions.authLoginController);
// router.post("/register", authFunctions.authRegisterController);


//middleware para las rutas de usuario


router.use('/users', UsersRoutes);
router.use('/orders', OrdersRoutes);
router.use('/films', FilmsRoutes);
router.use('/series', SeriesRoutes);

module.exports = router;