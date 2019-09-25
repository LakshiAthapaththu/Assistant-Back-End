// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var capabilitySchema = new Schema({
  domain : String,
  cap_id : Number,
  main_capability:String,
  sub_capability:String,
  created_at: Date,
  updated_at: Date
});
var Capability = mongoose.model('Capability', capabilitySchema);
module.exports = Capability;

// get all the users
// console.log(exports);
// module.exports.Capability.find({}, function(err, capabilities) {
//     if (err) throw err;
  
//     console.log(capabilities);
// });

exports.findAllById=function(id){
    module.exports.Capability.find({ cap_id: id }, function(err, sub_capabilities) {
        if (err) throw err;
      

        console.log(sub_capabilities);
      });
}
exports.findAllByName=function(name){
    module.exports.Capabilitiy.find({ main_capability : name }, function(err, sub_capabilities) {
        if (err) throw err;

        console.log(sub_capabilities);
      });
}