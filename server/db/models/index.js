const User = require('./user');
const Vet = require('./vet')

Vet.hasMany(User);

module.exports = {
  User,
  Vet
}
