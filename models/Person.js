const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// the contact schema structure
const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,

  favoriteFood: [
    {
      type: String,
      required: true,
    },
  ],
});
module.exports = Person = mongoose.model("Person", PersonSchema);
