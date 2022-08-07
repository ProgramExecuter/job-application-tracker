// Get all Jobs
const getAllJobs = async (req, res) => {
  return res.status(200).json({ message: "All Jobs" });
};

// Create new Job
const createJob = async (req, res) => {
  return res.status(200).json({ message: "Create new Job" });
};

// Get a particular Job
const particularJob = async (req, res) => {
  return res.status(200).json({ message: `Job with Id: ${req.params.jobId}` });
};

// Update a Job
const updateJob = async (req, res) => {
  return res
    .status(200)
    .json({ message: `Edit Job with Id: ${req.params.jobId}` });
};

// Delete a Job
const deleteJob = async (req, res) => {
  return res
    .status(200)
    .json({ message: `Delete Job with Id: ${req.params.jobId}` });
};

export { getAllJobs, createJob, particularJob, updateJob, deleteJob };
