import express from "express";

import {
  getAllJobs,
  createJob,
  particularJob,
  updateJob,
  deleteJob,
} from "../controllers/Job.js";

const router = express.Router();

// Get all Jobs
router.get("/", getAllJobs);

// Create new Job
router.post("/", createJob);

// Get particular Job
router.get("/:jobId", particularJob);

// Update a Job
router.patch("/:jobId", updateJob);

// Delete a Job
router.delete("/:jobId", deleteJob);

export default router;
