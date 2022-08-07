import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import jobPath from "./routes/Job.js";

const app = express();

// CORS setup
app.use(cors());

// ENV setup
dotenv.config();

// Configure JSON forms
app.use(express.json());

// URL Paths configure
app.use("/", jobPath);

// Server Setup
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
