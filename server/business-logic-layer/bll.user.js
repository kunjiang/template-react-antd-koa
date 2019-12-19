const dalUser = require( '../database-access-layer/dal.user' );

exports.create = async user => {
  return dalUser.create( user );
}

exports.remove = async ids => {
  return dalUser.remove( ids );
}