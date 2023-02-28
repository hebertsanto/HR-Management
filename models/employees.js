const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeesSchema = new Schema({
      name:{
         type:String,
         required:true,
      },
      email:{
         type:String,
         required:true,
         match: /\S+@\S+\.\S+/
      }
})


module.exports = mongoose.model('Employee', EmployeesSchema);