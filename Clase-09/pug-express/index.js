const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About', message: 'Estas viendo la página de about'});
})
//http://localhost:3501/about

app.listen(3501);