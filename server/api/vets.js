const router = require('express').Router();
const { Vet } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Vet.findAll({
  })
  .then(vets => res.json(vets))
  .catch(next)
});

router.get(`/:vetId`, (req, res, next) => {
  Vet.findOne({
    where: {
      id: Number(req.params.vetId)
    }
  })
  .then(vet => res.json(vet))
  .catch(next)
});

router.post('/', (req, res, next) => {
  let data = req.body
  Vet.findOrCreate({
    where: {
      name: data.name,
      email: data.email,
      description: data.description,
      imageUrl: data.imageUrl
    }
  })
  .then(vet => res.json(vet))
  .catch(next)
});