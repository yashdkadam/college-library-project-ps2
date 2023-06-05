// import connectToMongo from "./db.js";
const express = require("express");
const cors = require('cors')
const mongoURI = "mongodb://localhost:27017/testing"
const mongoose = require('mongoose')
const Router = require ("./routes/Router.js")
const connectToMongo = ()=>{
    mongoose
    .connect(mongoURI)
    .then( console.log("connected"))
    .catch (error => console.log(error));
}
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/', Router)


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})