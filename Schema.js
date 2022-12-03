const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User={
  Email: String,
  Phone: Number,
  Password: {type:Schema.Types.Mixed},
  ConfirmPassword: {type:Schema.Types.Mixed},
  FirstName: String,
}

const Users = mongoose.model('users', User)

module.exports = Users;