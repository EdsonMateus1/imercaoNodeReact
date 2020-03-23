const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("./database/connectionDatabase");

require("./database/models/userModel");
const User = mongoose.model("user");

const Usercontrol = require ("./routes/userRouter");
const AboutControl = require ("./routes/aboutRouter");

require("./database/models/aboutModel");
const About = mongoose.model("about");


const app = express();
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(express.static("public"));

app.use('/',Usercontrol);
app.use('/',AboutControl);

app.get('/', (req , res) =>{
    res.send('main router')
});

app.listen(3030, err => {
  if (err) console.log(err);

  console.log("servidor rodando porta:http://localhost:3030 ");
});