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

//delete blog by id 
app.get("/blog/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deleteBlog = await Blog.deleteOne({ _id: id });
 
  //Delete All Comments Associated With The Blog
  await Comment.deleteMany({blog:id });

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

//For the comment on the blogs--------------------------------------------------------------------------   

const commentSchema = new mongoose.Schema({
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'blog', required: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

app.post("/add-comment", async (req, res) => {
  const { blog, name, content } = req.body;
  await Comment.create({ blog, name, content }) //create new data into the DB
  res.json({ success: true, message: 'Comment added for review' })
})

app.post("/comments", async (req, res) => {
  const { blogId } = req.body;
  const comments = await Comment.find({ blog: blogId, isApproved: true }).sort({ createdAt: -1 });
  res.json({ success: true, comments })
})

//--------------------------------------------------------------------------------------------------------------

//get bloglist for admin find all blog post doesnt matter isApproved or not
app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.json({ success: true, blogs })
})

//admin can see all comments doesnt matter isApproved or not
app.get("/comments", async (req, res) => {
  const comments = await Comment.find({}).populate("blog").sort({ createdAt: -1 });
  res.json({ success: true, comments })
})

//get dashboard data total blog,comment,draft number etc...
app.get("/dashboard", async (req, res) => {
  const recentBlogs = await Blog.find({}).sort({ cratedAt: -1 }).limit(5);
  const blogs = await Blog.countDocuments(); // total no. of blogs count
  const comments = await Comment.countDocuments(); //total no. of comments
  const drafts = await Blog.countDocuments({ isPublished: false }); //blog is not published which is counted into the draft

  const dashboardData = {
    blogs, comments, drafts, recentBlogs
  }
  res.json({ success: true, dashboardData })
})

//Delete the comment by id 
app.post("/delete-comment", async (req, res) => {
  const { id } = req.body;
  await Comment.findByIdAndDelete(id);
  res.json({ success: true, message: "comment deleted successfully" })
})

//Approve the comment by id 
app.post("/approve-comment", async (req, res) => {
  const { id } = req.body;
  await Comment.findByIdAndUpdate(id,{isApproved:true});
  res.json({ success: true, message: "comment Approved successfully" })
})
