const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    student_id:
    {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_no:
    {
        type: Number,
        required: true
    },
    debt:
    {
        type: Number,
        default: 0
    }
});
const Student = mongoose.model('student', StudentSchema);
module.exports = Student
