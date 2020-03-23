const express = require("express");
const router = express.Router();
const mongoose = require("../database/connectionDatabase");
require("../database/models/aboutModel");
const About = mongoose.model("about");

router.get("/about", (req, res) => {
    About.find({})
      .then(about => {
        return res.json(about);
      })
      .catch(err => {
        res.status(400).json({
          err: true,
          message: "no about found"
        });
      });
  });

router.post("/about/register", (req, res) => {
    About.create(req.body, err => {
      if (err)
        return res.status(400).json({
          err: true,
          message: "user error not registered!"
        });
  
      return res.json({
        err: false,
        message: "about successfully registered!"
      });
    });
  });

  module.exports = router;