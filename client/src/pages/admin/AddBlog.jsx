import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddBlog = () => {

  const { axios } = useAppContext();   // FIX
  const [isAdding,setIsAdding] = useState(false)

  const editorRef = useRef(null)
  const quilRef = useRef(null)

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {

      setIsAdding(true)

      const blog = {
        title,
        subTitle,
        description: quilRef.current.root.innerHTML,
        category,
        isPublished
      }

      const formData = new FormData()

      formData.append("blog", JSON.stringify(blog))
      formData.append("image", image)

      const { data } = await axios.post("/newblog", formData)

      if(data.success){

        toast.success(data.message)

        setImage(false)
        setTitle("")
        setSubTitle("")
        setCategory("Startup")

        quilRef.current.root.innerHTML = ""

      } else {
        toast.error(data.message)
      }

    } catch (error) {

      toast.error(error.message)

    } finally {

      setIsAdding(false)

    }
  }

  useEffect(() => {

    if(!quilRef.current && editorRef.current){

      quilRef.current = new Quill(editorRef.current,{
        theme:"snow"
      })

    }

  },[])

  return (

    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >

      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">

        <p>Upload thumbnail</p>

        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            className="mt-2 h-16 rounded cursor-pointer"
          />

          <input
            type="file"
            hidden
            id="image"
            required
            onChange={(e)=>setImage(e.target.files[0])}
          />
        </label>

        <p className="mt-4">Blog Title</p>

        <input
          type="text"
          placeholder="Type Here"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 rounded"
        />

        <p className="mt-4">Sub Title</p>

        <input
          type="text"
          placeholder="Type Here"
          value={subTitle}
          onChange={(e)=>setSubTitle(e.target.value)}
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 rounded"
        />

        <p className="mt-4">Blog Description</p>

        <div className="max-w-lg h-74 pb-16 pt-2 relative">
          <div ref={editorRef}></div>
        </div>

        <p className="mt-4">Blog Category</p>

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="mt-2 px-3 py-2 border border-gray-300 rounded"
        >

          {blogCategories.map((item,index)=>(
            <option key={index} value={item}>
              {item}
            </option>
          ))}

        </select>

        <div className="flex gap-2 mt-4">

          <p>Publish Now</p>

          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e)=>setIsPublished(e.target.checked)}
          />

        </div>

        <button
          disabled={isAdding}
          type="submit"
          className="mt-8 w-40 h-10 bg-blue-500 text-white rounded"
        >

          {isAdding ? "Adding..." : "Add Blog"}

        </button>

      </div>

    </form>
  );
};

export default AddBlog;