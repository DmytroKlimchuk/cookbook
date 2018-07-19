//Ініціалізація
const express = require('express');
const path = require('path');
const merge = require('merge');
const bodyParser = require('body-parser');
const DB = require('./db');

// настройка сервера
const config = {
    port : 8080,
    host : 'localhost'
};

// Init
const server = express();

const Recipe = require('./models/recipe.model');

server.use( bodyParser.json() );       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Add headers
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Роутер

//GET

DB.connect();

server.get("/get",function(req,res){ 
    //res.send('Hello World!'); 
    console.log('get');

    Recipe.find({})
        .then(result => {
            res.json(result);
        });
  })  

server.get("/delete", function(req, res) {

    Recipe.find({}).remove()
    .then(() => {
        console.log('DB cleared');
        res.send('DB cleared'); 
    })
    .catch(e => console.log(e));

});


//Обробка POST запитів
server.post('/post', (req, res) => {

    console.log('post');

   const recipes = req.body;

    Recipe.find({}).remove()
        .then(() => {
            console.log('Cleared');
        })
        .catch(e => console.log(e));

    recipes.forEach(item => {
        recipe = new Recipe(item);
        recipe.save()
        .then(result => {
            console.log('Added');
        })
        .catch(error => console.log(error));
    });



});



server.listen(config.port, config.host, () => {
    console.log('Server started');
});