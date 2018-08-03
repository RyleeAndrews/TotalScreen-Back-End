'use strict';

const Profile = require('../models/profile.js');
const bodyParser = require('../lib/middleware/bodyParser.js');
const jsonParser = require('body-parser').json();
const profileRouter = module.exports = require('express').Router();

profileRouter.post('/postprofile', jsonParser, (req,res,next) => {

  try {
    let profile = new Profile(req.body);

    console.log('model', req.params);
    profile.save()
      .then( result => res.status(200).send(result))
      .catch(err => next(err));
  }
  catch(error){
    next(error.message);
  }
});
