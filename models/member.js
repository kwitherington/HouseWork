const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  house: house._id,
  name: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
