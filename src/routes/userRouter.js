const express = require("express");
const router = express.Router();
const mongoose = require("../database/connectionDatabase");
require("../database/models/userModel");
const User = mongoose.model("user");

router.get("/user", (req, res) => {
  User.find({})
    .then(user => {
      return res.json(user);
    })
    .catch(err => {
      res.status(400).json({
        err: true,
        message: "no users found"
      });
    });
});

router.get("/User/unique/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => {
      return res.json(user);
    })
    .catch(err => {
      return res.status(400).json({
        err: true,
        message: "no users found"
      });
    });
});

router.post("/user/register", (req, res) => {
  User.create(req.body, err => {
    if (err)
      return res.status(400).json({
        err: true,
        message: "user error not registered!"
      });

    return res.json({
      err: false,
      message: "user successfully registered!"
    });
  });
});

router.put("/user/edit/:id", (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, err => {
    if (err)
      return res.status(400).json({
        err: true,
        message: "user not edit"
      });
    return res.json({
      err: false,
      message: "user edit sucess"
    });
  });
});

router.delete("/user/delete/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }, err => {
    if (err)
      return res.status(400).json({
        err: true,
        message: "user not delete"
      });

    return res.json({
      err: false,
      message: "user delete"
    });
  });
});

module.exports = router;