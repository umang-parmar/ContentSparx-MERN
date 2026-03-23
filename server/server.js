import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

async function main() {
  await mongoose.connect("mongodb+srv://umang2502parmar_db_user:umang@cluster0.fon1bor.mongodb.net/?appName=Cluster0");
}

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTitle: { type: String },
  description: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  isPublished: { type: Boolean, default: false },
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

app.use(express.json());
app.use(cors());

app.listen(3000, async () => {
  console.log("server is started");
  await main();
  console.log("mongo connected");
});

app.get("/", async (req, res) => {
  res.send("welcome");
});

//new blog
app.post("/newblog", async (req, res) => {
  const { title, subTitle, description, category, img, isPublished } = req.body;
  const blog = new Blog({ title, subTitle, description, category, img, isPublished });
  await blog.save();
  res.json({ msg: "Success blog added!" });
});

// get all blogs
app.get("/allblog", async (req, res) => {
  const allBlog = await Blog.find({ isPublished: true });
  // console.log(allBlog);
  res.json({ allBlog });
});

// get blogs by id
app.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const singleBlog = await Blog.findById(id);
  res.json({ singleBlog });
});

//delete blog
app.get("/blog/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const deleteBlog = await Blog.deleteOne({ _id: id });
  res.json({ msg: "Delete" });
});

//toggle-publish True:-Show blogs False:-dont show blogs
app.post("/blog/toggle-publish", async (req, res) => {
  const { id } = req.body;
  const blog = await Blog.findById(id);
  blog.isPublished = !blog.isPublished;
  await blog.save();
  res.json({ msg: "Publish status updated", isPublished: blog.isPublished });
})