import fs from 'fs'
import imagekit from '../configs/ImageKit.js';
import Blog from '../models/Blog.js'
export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.Blog);
        const imagefile = req.file;

        //check if all fields are present
        if (!title || !description || !category || !imageFile) {
            return res.json({ success: false, message: "Missing required fields" })
        }

        const fileBuffer = fs.readFileSync(imagefile.path);
        // Upload Image To ImageKit 

        const responce = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        // optimization through imagekit URL transformation 
        const optimizedImageUrl = imagekit.url({
            path: responce.filePath,
            transformation: [
                { quality: 'auto' }, //auto compression
                { format: 'webp' },//convert to modern format 
                { width: "1280" } //width resizing 
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({ title, subTitle, description, category, image, isPublished, })
        res.json({ sucess: true, message: "Blog Added Successfully" })

    } catch (error) {
        res.json({ sucess: false, message: error.message })

    }
}