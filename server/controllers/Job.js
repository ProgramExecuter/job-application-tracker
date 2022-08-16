import Job from "../models/Job.js";

// Get all Jobs
const getAllJobs = async (req, res) => {
  // List of all jobs
  const jobs = await Job.find();

  return res.status(200).json(jobs);
};

// Create new Job
const createJob = async (req, res) => {
  // Create new Job instance and save it
  const newJob = new Job(req.body);
  await newJob.save();

  return res.status(201).json(newJob);
};

// Get a particular Job
const particularJob = async (req, res) => {
  // Find the job
  const foundJob = await Job.findById(req.params.jobId);

  return res.status(200).json(foundJob);
};

// Update a Job
const updateJob = async (req, res) => {
  // Find and update Job
  await Job.findByIdAndUpdate(req.params.jobId, { $set: req.body });

  return res
    .status(200)
    .json({ message: `Updated Job with Id: ${req.params.jobId}` });
};

// Delete a Job
const deleteJob = async (req, res) => {
  // Find the job and delete it
  await Job.findByIdAndDelete(req.params.jobId);

  return res
    .status(200)
    .json({ message: `Deleted Job with Id: ${req.params.jobId}` });
};

export { getAllJobs, createJob, particularJob, updateJob, deleteJob };
