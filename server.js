const express = require('express')
const booksRouter = require('./routes/bookRoutes')
const mongoose = require('mongoose')
const Book = require('./models/booksModel.js')
const methodOverride = require('method-override')

const app = express()

mongoose.connect('mongodb://localhost/books', 
    {useNewUrlParser : true, useUnifiedTopology : true }
)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const books = await Book.find().sort({publishingDate : 'desc'})
    res.render('home' , { books : books })
})

app.use('/books', booksRouter)

const port = process.env.PORT || 6000
app.listen(port)