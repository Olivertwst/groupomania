const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
// const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const app = express();
const postRoutes = require('./routes/post');


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/media', express.static(path.join(__dirname, 'media')));
app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;

