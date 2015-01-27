module.exports = function(app) {
  var express = require('express');
  var galleryRouter = express.Router();
  var gallery = [
    {id: 1, title: 'Sad', url: 'assets/images/cranberry_sad.jpg'},
    {id: 2, title: 'Happy', url: 'assets/images/cranberry_happy.jpg'},
    {id: 3, title: 'Upset', url: 'assets/images/cranberry_upset.jpg'},
    {id: 4, title: 'Excited', url: 'assets/images/cranberry_excited.jpg'},
    {id: 5, title: 'Thrilled', url: 'assets/images/cranberry_thrilled.jpg'}
  ];

  galleryRouter.get('/', function(req, res) {
    res.send({
      'gallery': gallery
    });
  });

  galleryRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  galleryRouter.get('/:id', function(req, res) {
    res.send({
      'gallery': gallery[req.params.id]
    });
  });

  galleryRouter.put('/:id', function(req, res) {
    res.send({
      'gallery': {
        id: req.params.id
      }
    });
  });

  galleryRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/gallery', galleryRouter);
};
