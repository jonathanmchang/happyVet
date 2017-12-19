const router = require('express').Router();
const { Vet } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Vet.findAll({
  })
  .then(vets => res.json(vets))
  .catch(next)
});
