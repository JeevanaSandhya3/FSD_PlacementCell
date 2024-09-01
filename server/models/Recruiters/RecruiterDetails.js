const mongoose = require("mongoose");

const recruiterDetails = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  loginid: {
    type: Number,
    required: true,
  },
  officialEmail: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  ctc: {
    type: Number,
    required: true,
  },
  stipend: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  spoc: {
    type: String,
    required: true,
  },
  
}, { timestamps: true });

module.exports = mongoose.model("Recruiters Detail", recruiterDetails);
