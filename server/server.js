require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  session = require('express-session'),
  userMiddleware = require('./userMiddlewares'),
  animals_ctrl = require('./controllers/animals_ctrl');


  const app = express();
  app.use(bodyParser.json());

  app.use(session({ //SIM3 83D
    secret: 'sleurhganfosdjf;galkdjlgiuaj;sldklqi3asdfadf2y473op34utjgkjbdfq90w4towe8ry',
    resave: false,
    saveUninitialized: true
  }))
  app.use(userMiddleware.checkForSession);

  massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
  })

  app.get('/get/animals', animals_ctrl.get_animals); //SIM1 76c
  app.get('/get/details/:id', animals_ctrl.get_details);
  app.post('/post/animal', animals_ctrl.create_animal);//SIM1 76c
  app.put('/put/animal/:id', animals_ctrl.update_animal);//SIM1 76c
  app.delete('/delete/animal/:id', animals_ctrl.delete_animal);//SIM1 76c


  app.listen(6007, () => {
    console.log("I am listening on port", 6007)
  })