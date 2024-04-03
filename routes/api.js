'use strict';

var expect = required('chai').expect;
let mongodb = require('mongodb')
let mongoose = require('mongoose')

module.exports = function (app) {

  let uri = 'mongodb+srv://carolina:' + process.env.PW + '@freecodecamp.ys83xkg.mongodb.net/FreeCodeCamp?retryWrites=true&w=majority&appName=FreeCodeCamp'

  app.route('/api/stock-prices')
    .get(function (req, res){
      
    });
    
};
