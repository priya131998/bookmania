var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

// router.post('/books/:id/reviews', reviewsCtrl.create);
// router.get('/books/:id/reviews', reviewsCtrl.index);
router.post('/:id', reviewsCtrl.create);
router.get('/:id', reviewsCtrl.index);

module.exports = router;
