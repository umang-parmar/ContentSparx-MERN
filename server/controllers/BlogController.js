// import fs from "fs";
// import imagekit from "../configs/ImageKit.js";
// import Blog from "../models/Blog.js";

// export const addBlog = async (req, res) => {
//   try {

//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);

//     const { title, subTitle, description, category, isPublished } = req.body;
//     const imageFile = req.file;

//     // Validate fields
//     if (!title || !description || !category || !imageFile) {
//       return res.json({ success: false, message: "Missing required fields" });
//     }

//     // Read file
//     const fileBuffer = fs.readFileSync(imageFile.path);

//     // Upload to ImageKit
//     const response = await imagekit.upload({
//       file: fileBuffer,
//       fileName: imageFile.originalname,
//       folder: "/blogs"
//     });

//     const image = response.url;

//     // Save blog
//     await Blog.create({
//       title,
//       subTitle,
//       description,
//       category,
//       image,
//       isPublished: isPublished === "true" // convert string → boolean
//     });

//     // Delete local file after upload
//     fs.unlinkSync(imageFile.path);

//     res.json({ success: true, message: "Blog Added Successfully" });

//   } catch (error) {
//     console.log("ERROR:", error);
//     res.json({ success: false, message: error.message });
//   }
// };