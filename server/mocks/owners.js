module.exports = function(app) {
  var express = require('express');
  var ownersRouter = express.Router();

  var owners = [
    {
      id: 1,
      firstName: 'Huiyuannnn',
      lastName: 'Yang',
      interests: 'Watching Friends',
      favoriteColor: 'purple',
      imageUrl: 'assets/images/owner_huiyuan_yang.jpg'
    },

    {
      id: 2,
      firstName: 'Ericccc',
      lastName: 'Sodomka',
      interests: 'Pooping and farting whenever wherever I want :)',
      favoriteColor: 'blue',
      imageUrl: 'assets/images/owner_eric_sodomka.jpg'
    }
  ];

  ownersRouter.get('/', function(req, res) {
    res.send({
      'owners': owners
    });
  });

  ownersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ownersRouter.get('/:id', function(req, res) {
    res.send({
      'owner': {
        id: req.params.id,
      }
    });
  });

  ownersRouter.put('/:id', function(req, res) {
    res.send({
      'owners': {
        id: req.params.id
      }
    });
  });

  ownersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/owners', ownersRouter);
};
