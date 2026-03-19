import fs from 'fs'
import imagekit from '../configs/ImageKit.js';
export const addBlog = async(req,res) =>{
    try {
        const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.Blog);
        const imagefile = req.file;

        //check if all fields are present
        if(!title || !description || !category || !imageFile){
            return res.json({success:false,message:"Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imagefile.path);
                    // Upload Image To ImageKit 

        const responce = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        })

        // optimization through imagekit URL transformation 
        
    } catch (error) {
        
    }
}