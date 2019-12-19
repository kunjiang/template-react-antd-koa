const Sequelize = require( 'sequelize' );
const User = require( '../model/model.user' );
let Op = Sequelize.Op;

async function create ( user ) {
  return User.create( user );
}

async function remove ( ...ids ) {
  return User.destroy( { 
    where: {
      id: {
        [Op.in]: [ ...ids ]
      }
    }
  } );
}

module.exports = {
  create,
  remove,
};