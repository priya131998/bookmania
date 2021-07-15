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
    res.render('books/index', { title: 'Book Index',books });
  });
}

function newBook(req, res) {
    res.render('books/new', { title: 'New book' });
  }


function create(req, res) {
  req.body.author = req.body.author.replace(/\s*,\s*/g, ',');
  if (req.body.author) req.body.author = req.body.author.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const book = new Book(req.body);
  book.save(function(err) {
    if (err) return res.render('books/new', { title: 'New book',books });
    console.log(book);
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