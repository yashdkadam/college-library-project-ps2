import mongoose  from 'mongoose';
const { Schema } = mongoose;

const BookSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    category : 
    {
        type:string,
        required : true
    },
    quantity:{
        type : Number,
        default : 1
    }
  });
  const Book = mongoose.model('book', BookSchema);
export default Book