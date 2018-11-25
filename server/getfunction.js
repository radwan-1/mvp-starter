var request = require('request');
//var config = require('../config.js');
var express = require('express');

let app = express();



let getListofFood = (food,callback) => {

  let options = {
    url: 'https://www.food2fork.com/api/search?key=fb6e672bfda1f3fae96f67f62b9a2594&q=/'+food+'/',
    headers: {
      'User-Agent': 'request'
    }
  };

  request(options, function (err, response, body) {
    if(err){
      console.log('here', err)
      callback(err, null)
    } else {
      console.log('here again', body)
      callback(null, body)
    }
    });
}
module.exports.getListofFood = getListofFood;