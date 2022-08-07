import express from "express";

import { getAllJobs } from "../controllers/Job.js";

const router = express.Router();

router.get("/", getAllJobs);

export default router;
