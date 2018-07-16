const mongoose = require('mongoose');

const DB = {
    connect : function () {
        mongoose.connect('mongodb://localhost:27017/cookbook', { useNewUrlParser: true })
            .then(console.log('Connected to DB'))
            .catch(e => console.log(e));
    }
};

module.exports = {
    connect : DB.connect
};