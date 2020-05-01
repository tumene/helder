const http = require('http');
const path = require('path');
const express = require('express');

const hbs = require('hbs');
const app = express();

//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');

//set public folder as static folder static file
app.use(express.static('public'));

//route for home page
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send('Get to Know About Us');
});

app.get('/services', (req, res) => {
    res.send('What We do');
});

app.get('/contact', (req, res) => {
    res.send('We would love to hear from you');
});

http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    res.end("Hello World");
});

app.listen(8002, () => {
    console.log('Server is running at port 8002');
});

