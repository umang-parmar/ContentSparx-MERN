import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

async function main() {
  await mongoose.connect(
    "mongodb+srv://umang2502parmar_db_user:umang@cluster0.fon1bor.mongodb.net/?appName=Cluster0"
  );
}

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("welcome");
});

app.listen(3000, async () => {
  console.log("server is started");
  await main();
  console.log("mongo connected");
});

export default app;