import express from 'express';
import { addBlog } from '../controllers/BlogController';
 
const blogRouter = express.Router();

blogRouter.post("/add",uoload.single('image'),addBlog);

export default blogRouter;