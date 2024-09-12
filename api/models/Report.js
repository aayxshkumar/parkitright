const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
//   owner: {
//     type: mongoose.Schema.ObjectId,
//     ref: "user",
//     required: true,
//   },
  Reg_no: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    //required: true,
  },
  photos: [{ type: String }],
  Vtype:{
    type: String
  },
  Active_:{
    type: Boolean,
    default: true
  }
  

//   price: {
//     type: Number,
//   },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
