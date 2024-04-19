'use strict';

var expect = required('chai').expect;
let mongodb = require('mongodb')
let mongoose = require('mongoose')

module.exports = function (app) {

  let uri = 'mongodb+srv://carolina:' + process.env.PW + '@freecodecamp.ys83xkg.mongodb.net/FreeCodeCamp?retryWrites=true&w=majority&appName=FreeCodeCamp'

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  let stockSchema = new mongoose.Schema({
    name: {type: String, required: true},
    likes: {types: Number, default: 0},
    ips: [String]
  })

  let Stock = mongoose.model('Stock', stockSchema)

  app.route('/api/stock-prices')
    .get(function (req, res){
      let responseObject = {}
      responseObject['stockData'] = {}
      
    });
    
};
