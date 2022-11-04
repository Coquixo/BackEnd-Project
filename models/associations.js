const Users = require('./users');
const Orders = require('./orders');
const Films = require('./films');
const Series = require('./series');


//Relation 1 to N Users => Orders

Users.hasMany(Orders);
Orders.belongsTo(Users);

//Relation 1 to N Orders => Films

Films.hasMany(Orders);
Orders.belongsTo(Films);

//Relation 1 to N Orders => Series

Series.hasMany(Orders);
Orders.belongsTo(Series);

