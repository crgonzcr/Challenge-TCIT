require("dotenv").config();
const express = require("express");
const { appConfig } = require("./config");

//Create server with express
const app = express();

// Public directory
app.use( express.static("public"));

//Middlewares
app.use(express.json());

//Routes
app.use("/api/",require("./routes/routes"));


app.listen(appConfig.port, () => console.log(appConfig.port));