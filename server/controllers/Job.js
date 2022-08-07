const getAllJobs = async (req, res) => {
  return res.status(200).json({ message: "All Jobs" });
};

export { getAllJobs };
