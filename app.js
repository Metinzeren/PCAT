const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const ejs = require('ejs');
const Photo = require('./models/Photo');
const app = express();
const fileUpload = require('express-fileupload');
mongoose.connect('mongodb://localhost/pcat-test-db');
const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
//ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);

const port = 3000;
app.listen(port, () => {
  console.log('sunucu başlatıldı');
});
