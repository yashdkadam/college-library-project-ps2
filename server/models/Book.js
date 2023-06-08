const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    book_id:
    {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    description:
    {
        type: String,
        required: true
    }
});
const Book = mongoose.model('Book', BookSchema);
module.exports = Book
