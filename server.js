const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
require('dotenv').config();
app.use(express.urlencoded({extended: true}));

const DB_PASS = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USERNAME;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
})

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@systemcluster.ywzxxrb.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
     console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})

app.use(express.json());
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

