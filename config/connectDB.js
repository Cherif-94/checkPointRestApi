const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("data base is connected");
  } catch (error) {
    console.log("Error to connect with Data base :(  ", error);
  }
};

module.exports = connectDB;
