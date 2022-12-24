const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const postRoutes = require('./routes/posts')
const cors =require('cors')
require("dotenv").config();

app.use(cors())
app.use(bodyParser.json());
app.use(postRoutes)

const PORT = process.env.PORT || 8000;

const DB_URL = 'mongodb+srv://sandaru:sandaru123@testapp.c24ynvn.mongodb.net/testapp?retryWrites=true&w=majority'


mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
})
.catch((err)=>console.log(err))

app.listen(PORT,()=>{
    console.log(`App is running in ${PORT}`)
})