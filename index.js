//import mongoose
const mongoose = require("mongoose");
//import schema
const Schema = require("./Models/schemas");

//Map global promise - to rid of other warning
mongoose.Promise = global.Promise;

const database = mongoose.connect("mongodb://localhost:27017/nodecli");

//Add Login
const addLogin = (login) => {
  Schema.create(login).then((login) => {
    console.info("New login added");
    database.close(); // without this db will hang
  });
};

//Find Login
const findLogin = (user) => {
  //case insenstive
  const search = new RegExp(user, 'i'); //the 'i' makes sure it's case insensitive
  Schema.find({$or: [{Username: search}, {Name: search}]}) //$or to for search in different places =>  
    //returns promise 
    .then(user => {
      console.info(user);
      console.info(`${user.length} matches`);
      database.close();
    });
}

module.exports = {
  addLogin,
  findLogin
}