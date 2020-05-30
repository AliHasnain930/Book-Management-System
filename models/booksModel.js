const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    publisher : {
        type : String,
        required : true
    },
    publishingDate : {
        type : Date,
        required : true
    }
})

module.exports = mongoose.model('Book', bookSchema)