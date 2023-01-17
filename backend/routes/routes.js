const express = require('express');
const router = express.Router();
const reserveNowTemplateCopy = require('../models/ReserveNowModels')

router.post('/reservenow', (request, response) => {

  const reservedUser = new reserveNowTemplateCopy({
    fullName: request.body.fullName,
    email: request.body.email,
    petName: request.body.petName,
    kindOfPet: request.body.kindOfPet,
    petWeight: request.body.petWeight,
    petSize: request.body.petSize,
    startDate: request.body.startDate,
    endDate: request.body.endDate,
  })
  reservedUser.save()
  .then(data => {
    response.json(data)
  })
  .catch(error =>{
    response.json(error)
  })
})

module.exports = router;