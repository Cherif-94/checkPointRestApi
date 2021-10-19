// require express
const express = require("express");
const connectDB = require("./config/connectDB");

// instance express
const app = express();
require("dotenv").config();
// ***********************************************************************
// call the function that well connect with mongoDB
connectDB();

// middle ware to readh the json type
app.use(express.json());

// middle ware for contact api ( router )
app.use("/api/person", require("./router/person"));

// ********************************************************************
// creation du port
const PORT = process.env.PORT;
// creation server
app.listen(PORT, (ERROR) => {
  ERROR
    ? console.log("EROOR !! ")
    : console.log("Server is running Succesfully !! :)", PORT);
});
