const mongoose = require("../connectionDatabase");

const About = new mongoose.Schema(
  {
    title : {
      type: String,
      require : true,
    },
   description : {
       type : String,
       require : true,
   },
  },
  {
    timestamps: true
  }
);
mongoose.model("about", About);