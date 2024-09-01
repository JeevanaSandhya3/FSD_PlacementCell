const express = require("express");
const router = express.Router();
const Recruiters = require("../../models/Recruiters/RecruiterDetails"); // Adjust the path to your "Recruiters" model

// Get all recruiters
router.get("/getRecruiters", async (req, res) => {
  try {
    let recruiters = await Recruiters.find();

    const data = {
      success: true,
      message: "All Recruiters Loaded!",
      recruiters,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Add a new recruiter
router.post("/addRecruiter", async (req, res) => {
  let { companyName } = req.body;
  try {
    let recruiter = await Recruiters.findOne({ companyName });
    if (recruiter) {
      const data = {
        success: false,
        message: "Recruiter Already Exists!",
      };
      res.status(400).json(data);
    } else {
      await Recruiters.create(req.body);
      const data = {
        success: true,
        message: "Recruiter Added!",
      };
      res.json(data);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Update an existing recruiter
router.patch("/updateRecruiter/:id", async (req, res) => {
  try {
    const updatedRecruiter = await Recruiters.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecruiter) {
      return res.status(404).json({ success: false, message: "Recruiter not found" });
    }
    const data = {
      success: true,
      message: "Recruiter Updated!",
      recruiter: updatedRecruiter,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Delete a recruiter
router.delete("/deleteRecruiter/:id", async (req, res) => {
  try {
    let deletedRecruiter = await Recruiters.findByIdAndDelete(req.params.id);
    if (!deletedRecruiter) {
      return res.status(404).json({ success: false, message: "Recruiter not found" });
    }
    const data = {
      success: true,
      message: "Recruiter Deleted!",
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
