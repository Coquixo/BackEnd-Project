const Users = require('./users');
const Orders = require('./orders');
const Films = require('./films');
const Series = require('./series');


//Relation 1 to N Users => Orders

Users.hasMany(Orders);
Orders.belongsTo(Users);

//Relation 1 to N Orders => Films

Orders.hasMany(Films);
Films.belongsTo(Orders);

//Relation 1 to N Orders => Series

Orders.hasMany(Series);
Series.belongsTo(Orders);

