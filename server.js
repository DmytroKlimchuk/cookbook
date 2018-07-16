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

//Дані
const main = {

};
const Recipe = require('./models/recipe.model');
const Ingredient = require('./models/ingredient.model');

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

//Обробка POST запитів
server.post('/post', (req, res) => {

    console.log('post');
    //console.log(req.body);

    const recipe = new Recipe(req.body);

    
    console.log('input ----- ' + recipe);

    recipe.save()
        .then(result => {
            console.log('Added')
        })
        .catch(error => console.log(error));

});



server.listen(config.port, config.host, () => {
    console.log('Server started');
});