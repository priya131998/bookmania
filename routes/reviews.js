var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/books/:id/reviews', reviewsCtrl.create);
router.delete('/books/:bookId/reviews/:reviewId', reviewsCtrl.delete)


module.exports = router;
