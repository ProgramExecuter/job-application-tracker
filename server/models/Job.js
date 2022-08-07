import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  company: String,
  location: String,
  jobId: String,
  position: String,
  noticePeriod: Number,
  resume: String,
  coverLetter: String,
  referral: String,
  latestUpdate: String,
  message: String,
  stage: String,
  applyDate: {
    type: Date,
    default: Date.now(),
  },
  offer: Number,
  offerDetails: String,
  joiningDate: String,
  rating: Number,
  team: String,
  technology: String,
});

export default mongoose.model("job", jobSchema);
