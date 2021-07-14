var Book = require('../models/book');

module.exports = {
  create,
  index
};

function create(req, res) {
  Book.findById(req.params.id, function(err, book) {
    book.reviews.push(req.body);
    book.save(function(err) {
      res.redirect(`/reviews/${book._id}`);
    });
  });
}

function index(req, res) {
    Book.findById(req.params.id, function(err, book) {
      res.render('books/review-show', { book });
    });
  }
