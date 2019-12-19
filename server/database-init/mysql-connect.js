const Sequelize = require( 'sequelize' );
const dbconf = require( '../../server-config' ).database;


let maysqlConnect = new Sequelize( dbconf.name, dbconf.userid, dbconf.password, {
  host: dbconf.host,
  dialect: 'mysql'
} );


module.exports = maysqlConnect;