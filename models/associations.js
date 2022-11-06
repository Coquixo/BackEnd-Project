const Users = require('./users');
const Orders = require('./orders');
const Films = require('./films');
const Series = require('./series');


//Relation 1 to N Users => Orders

Users.hasMany(Orders, {foreignKey: "user_id"});
Orders.belongsTo(Users, {foreignKey: "user_id"});

//Relation 1 to N Orders => Films

Films.hasMany(Orders, {foreignKey: "film_id"});
Orders.belongsTo(Films, {foreignKey: "film_id"});

//Relation 1 to N Orders => Series

Series.hasMany(Orders, {foreignKey: "serie_id"});
Orders.belongsTo(Series, {foreignKey: "serie_id"});

