var mongoose = require('mongoose');
mongoose.Promise = global.Promise
//mongoose.connect('mongodb://localhost/test');
let dbUrl = 'mongodb://radwan-1:maryjoy29@ds263740.mlab.com:63740/user';

mongoose.connect('mongodb://radwan-1:R123456@ds263740.mlab.com:63740/user');

var dotenv = require('dotenv');
var db = mongoose.connection

//(process.env.MONGODB);

// let dbUrl = 'mongodb://radwan-1:maryjoy29@ds263740.mlab.com:63740/user';

db.on('error', function(error) {
  console.log('mongoose connection error', error);
});

// mongoose.connect(dbUrl);


var itemSchema =  mongoose.Schema({
  count: Number,
  recipe: String
});

var Item = mongoose.model('Item', itemSchema);

let save = function (result){
  console.log("RADWAN DON'T FALTER:", result)
  let newItem = new Item({
    count: result.count,
    recipe: result.recipes[0].title
    // Recipe_page: result.recipes[0].f2f_url
  })

  newItem.save(function(err, newItem){
    if(err){
      throw err;
    }
      console.log('saved!', newItem);
  })

}

module.exports.save = save;