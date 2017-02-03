var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var fs = require('fs');

mongoose.connect('mongodb://localhost/insults');

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>0){
    require(models_path + '/' + file);
  }
});
