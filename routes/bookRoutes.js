const express = require('express')
const router = express.Router()
const Book = require('./../models/booksModel.js')

router.get('/add', (req, res) => {
    res.render('add', { book : new Book() })
})

router.get('/edit/:id', async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.render('edit', { book : book })
})

router.post('/', async (req, res) => {
    let book = new Book ({
        title : req.body.title,
        author: req.body.author,
        category: req.body.category,
        publisher: req.body.publisher,
        publishingDate: req.body.date
    })

    try {
        book = await book.save()
        res.redirect('/')
    }
    catch(e) {
        res.render('add')
    }
})

router.put('/:id', async (req, res) => {
    let book = await Book.findById(req.params.id)
    book.title = req.body.title
    book.author = req.body.author
    book.category = req.body.category
    book.publisher = req.body.publisher
    book.publishingDate = req.body.date
    try {
        book = await book.save()
        res.redirect('/')
    }
    catch(e) {
        res.render('edit')
    }
})

router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router