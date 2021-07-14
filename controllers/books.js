const Book = require("../models/book");

module.exports = {
    index,
    new: newBook,
    create,
    show,
    edit,
    update,
    delete: deleteBook
}

function index(req, res) {
  Book.find({}, function(err, books) {
    res.render('books/index', { books });
  });
}

function newBook(req, res) {
    res.render('books/new');
  }

// function create(req, res) {
//     req.body.author = req.body.author;
//     req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//   const book = new Book(req.body);
//   book.save(function(err) {
//     if (err) return console.log(err);
//     res.redirect('/');
//   });
// }

function create(req, res) {
  // remove whitespace next to commas
  req.body.author = req.body.author.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.author) req.body.author = req.body.author.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const book = new Book(req.body);
  book.save(function(err) {
    // one way to handle errors
    if (err) return res.render('books/new');
    console.log(book);
    // for now, redirect right back to new.ejs
    res.redirect('/books');
  });
}

function show(req, res) {
  Book.findById(req.params.id, function(err, book) {
    res.render('books/show', { title: 'Book Details', book });
  });
}

async function deleteBook(req, res) {
  const deleteOne = await Book.findByIdAndRemove(req.params.id);
  res.redirect('/books');
}

async function edit(req, res) {
  const book = await Book.findById(req.params.id)
  res.render('books/edit',{
    id: req.params.id, book
  })
}
async function update(req, res) {
  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body);
  console.log(updateBook)
  res.redirect('/books');
}