const mongoose = require("mongoose");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    nickname: { type: String, required: true },
    classID: { type: Number, required: true },
    guildName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.setUserId = function () {
  this.id = uuidv4();
};

// userSchema.methods.checkPass = function( password ) {
//     return this.password === md5( password );
// };

module.exports = mongoose.model("User", userSchema);
