import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

// ------------------- MongoDB -------------------

async function main() {
  await mongoose.connect(
    "mongodb+srv://umang2502parmar_db_user:umang@cluster0.fon1bor.mongodb.net/blogDB"
  );
}

// ------------------- Multer Setup -------------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// serve uploaded images
app.use("/uploads", express.static("uploads"));

// ------------------- Blog Schema -------------------

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

// ------------------- Comment Schema -------------------

const commentSchema = new mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

// ------------------- Server -------------------

app.listen(3000, async () => {
  console.log("Server started on port 3000");
  await main();
  console.log("MongoDB Connected");
});

// ------------------- Routes -------------------

app.get("/", (req, res) => {
  res.send("Welcome");
});

// ================= NEW BLOG =================

app.post("/newblog", upload.single("image"), async (req, res) => {
  try {
    const blogData = JSON.parse(req.body.blog);

    const newBlog = new Blog({
      title: blogData.title,
      subTitle: blogData.subTitle,
      description: blogData.description,
      category: blogData.category,
      isPublished: blogData.isPublished,
      img: req.file ? `/uploads/${req.file.filename}` : null
    });

    await newBlog.save();

    res.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

// ================= GET ALL BLOGS =================

app.get("/allblog", async (req, res) => {
  const allBlog = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
  res.json({ success: true, allBlog });
});

// ================= GET BLOG BY ID =================

app.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const singleBlog = await Blog.findById(id);
  res.json({ success: true, singleBlog });
});

// ================= DELETE BLOG =================

app.post("/blog/delete", async (req, res) => {
  try {
    const { id } = req.body;

    console.log("Delete request for blog:", id);

    if (!id) {
      return res.json({
        success: false,
        message: "Blog ID is required",
      });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }

    await Comment.deleteMany({ blog: id });

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
// ================= TOGGLE PUBLISH =================

app.post("/blog/toggle-publish", async (req, res) => {
  const { id } = req.body;

  const blog = await Blog.findById(id);

  blog.isPublished = !blog.isPublished;

  await blog.save();

  res.json({
    success: true,
    message: "Publish status updated",
    isPublished: blog.isPublished,
  });
});

// ================= ADD COMMENT =================

app.post("/add-comment", async (req, res) => {
  const { blog, name, content } = req.body;

  await Comment.create({ blog, name, content });

  res.json({
    success: true,
    message: "Comment added for review",
  });
});

// ================= GET BLOG COMMENTS =================

app.post("/comments", async (req, res) => {
  const { blogId } = req.body;

  const comments = await Comment.find({
    blog: blogId,
    isApproved: true,
  }).sort({ createdAt: -1 });

  res.json({
    success: true,
    comments,
  });
});

// ================= ADMIN BLOG LIST =================

app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  res.json({
    success: true,
    blogs,
  });
});

// ================= ADMIN COMMENTS =================

app.get("/comments", async (req, res) => {
  const comments = await Comment.find({})
    .populate("blog")
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    comments,
  });
});

// ================= DASHBOARD =================

app.get("/dashboard", async (req, res) => {
  const recentBlogs = await Blog.find({})
    .sort({ createdAt: -1 })
    .limit(5);

  const blogs = await Blog.countDocuments();
  const comments = await Comment.countDocuments();
  const drafts = await Blog.countDocuments({ isPublished: false });

  const dashboardData = {
    blogs,
    comments,
    drafts,
    recentBlogs,
  };

  res.json({
    success: true,
    dashboardData,
  });
});

// ================= DELETE COMMENT =================

app.post("/delete-comment", async (req, res) => {
  const { id } = req.body;

  await Comment.findByIdAndDelete(id);

  res.json({
    success: true,
    message: "Comment deleted successfully",
  });
});

// ================= APPROVE COMMENT =================

app.post("/approve-comment", async (req, res) => {
  const { id } = req.body;

  await Comment.findByIdAndUpdate(id, { isApproved: true });

  res.json({
    success: true,
    message: "Comment approved successfully",
  });
});