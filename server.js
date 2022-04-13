require("dotenv").config();
const express = require("express");
// const db = require("./db/conn");
const app = express();
// const path = require('path');
// const cors = require('cors');
const PORT = 5050;

//MIDDLEWARE
//SERVE THE STATIC FILES FROM THE REACT APP
// app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors());


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));