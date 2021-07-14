const Book = require('../models/book');

module.exports = {
  create,
  delete: deleteReview
};

function create(req, res) {
  Book.findById(req.params.id, function(err, book) {
    book.reviews.push(req.body);
    book.save(function(err) {
      res.redirect(`/books/${book._id}`);
    });
  });
}

  async function deleteReview(req, res) {
    //find a particular book using the req.params.bookId 
    //find the review of the particular you want to remove using req.params.reviewId
    //remove the particular review
    //save the book
    const book = await Book.findById(req.params.bookId)
    const index = book.reviews.findIndex(function (review) {
      review._id === req.params.reviewId
    })
    book.reviews.splice(index, 1)
    await book.save()
    console.log(book)
    res.redirect(`/books/${req.params.bookId}`);
  }
