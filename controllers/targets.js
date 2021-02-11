const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')
const target = require('../models/target')

//control our routes

// this path is really localhost:8000/users/
router.get('/', (req, res)=> {
  // get all users
  db.target.findAll()
  .then( allTargets=> {
    res.render('allTargets', { allTargets})
  })

})

// this will be a user show page
router.get('/:id', (req, res)=> {
  // this will be a show page for a user
  db.targets.findOne({ 
    where: {
      id: req.params.id
    // },
    // include: [db.]
  })
  .then( toy=> {
    // we will get back a pets property
    console.log(pets.toy)
    // we will show all the animals
    res.render('instructorsShow', { instructors })
  })
  // we will a have a form to make a new animal
})

router.post('/:id/addTarget', (req, res)=> {
  db.user.findOne({ where: { id: req.params.id }})
  .then(user=> {
    //sequelize method
    user.createTarget({
      name: req.body.name,
      species: req.body.species
    })
    .then((target)=> {
      console.log(target)
      res.redirect(`/targets/${req.params.id}`)
    })
  })
})

// export the router to have access to it
module.exports = router