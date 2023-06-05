import mongoose from "mongoose";
const mongoURI = "mongodb://localhost:27017/testing"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}
export default connectToMongo