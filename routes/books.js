var express = require('express');
var router = express.Router();
const booksCtrl = require("../controllers/books");

router.get('/new', booksCtrl.new);
router.get('/', booksCtrl.index);
router.post('/', booksCtrl.create);
router.get('/:id', booksCtrl.show);
router.get('/:id/edit', booksCtrl.edit)
router.put('/:id', booksCtrl.update)
router.delete('/:id', booksCtrl.delete)

module.exports = router;
