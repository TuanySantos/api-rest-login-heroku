const mongoose = require("../database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true,
  },

  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },

  password: {
    type: String,
    require: true,
    select: false,
  },

  phoneNumbers: [
    {
      phone: Number,
      areaCode: Number,
    },
  ],

  create_date: {
    type: String,
  },

  update_date: {
    type: String,
  },

  login_date: {
    type: String,
  },

  tokenUser: {
    type: String,
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
