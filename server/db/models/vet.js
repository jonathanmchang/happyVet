const Sequelize = require('sequelize');
const db = require('../db');

const Vet = db.define('vet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'https://vignette.wikia.nocookie.net/simpsons/images/5/5e/Dr._Riviera.png/revision/latest?cb=20120509073411'
  }
});

module.exports = Vet;
