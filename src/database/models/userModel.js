const mongoose = require("../connectionDatabase");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    }
  },
  {
    timestamps: true
  }
);
mongoose.model("user", User);