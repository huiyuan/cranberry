module.exports = function(app) {
  var express = require('express');
  var cranberryRouter = express.Router();

  cranberryRouter.get('/', function(req, res) {
    res.send({
      'cranberry': []
    });
  });

  cranberryRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  cranberryRouter.get('/:id', function(req, res) {
    res.send({
      'cranberry': {
        id: 1,
        name : 'Cranberry',
        moods: [
          { mood: 'Sad', image: 'assets/images/cranberry_sad.jpg'},
          { mood: 'Upset', image: 'assets/images/cranberry_upset.jpg'},
          { mood: 'Happy', image: 'assets/images/cranberry_happy.jpg'},
          { mood: 'Excited', image: 'assets/images/cranberry_excited.jpg'},
          { mood: 'Thrilled', image: 'assets/images/cranberry_thrilled.jpg'}
        ],
        happyScore: 0
      }
    });
  });

  cranberryRouter.put('/:id', function(req, res) {
    res.send({
      'cranberry': {
        id: req.params.id
      }
    });
  });

  cranberryRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/cranberry', cranberryRouter);
};
