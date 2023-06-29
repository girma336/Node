const express = require('express');
const mongoose = require('mongoose')
// const connectoinString = 'mongodb+srv://girmatarekegn:girma1137@nodeexpressproject.fdi5wuy.mongodb.net/NODE-TASK?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

    // .then(() => console.log('CONNECT To Db... '))
    // .catch((err) => console.log(err))

module.exports = connectDB;