import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

console.log("PUBLIC KEY:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("PRIVATE KEY:", process.env.IMAGEKIT_PRIVATE_KEY);

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

async function main() {
  await mongoose.connect(
    "mongodb+srv://umang2502parmar_db_user:umang@cluster0.fon1bor.mongodb.net/?appName=Cluster0"
  );
}

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", async (req, res) => {
  res.send("welcome");
});

app.use("/api/blog", blogRouter);

app.listen(3000, async () => {
  console.log("server is started");
  await main();
  console.log("mongo connected");
});

console.log(process.env.IMAGEKIT_PUBLIC_KEY);