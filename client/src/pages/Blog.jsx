import { useParams } from "react-router";
import { assets, blog_data, comments_data } from "../assets/assets";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";

// for the blogs display into the detail

const Blog = () => {
  const { id } = useParams();

  const { axios } = useAppContext()

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  // for the add comment form add and store into the state (name and textarea)
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/blog/${id}`)
      data.success ? setData(data.singleBlog) : toast.error(data.message)
    } catch (error) {
      error.error(data.message)
    }
    //set the the according to the id backend and client
  };

  const fetchComments = async (e) => {
    try {
      const { data } = await axios.post('/comments', { blogId: id })
      if (data.success) {
        setComments(data.comments)
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);

    }
  };
  //post a new comment functionality 
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/add-comment', { blog: id, name, content })
      if (data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);

    }
  };

  useEffect(() => {
    (fetchBlogData(), // for the ui automatically change
      fetchComments());
  }, []);

  //we will display ui wrote into the return not logic easy
  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
      {/* its a logo for the header  */}
      <Navbar />

      <div className="text-center mt-20 text-gray-600 ">
        <p className="text-indigo-500 py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-indigo-500/35 bg-indigo-500/5 font-medium text-indigo-500">
          Michael Brown
        </p>
      </div>

      <div className="mx-4 max-w-5xl md:mx-auto my-10 mt-6 ">
        <img
          src={`http://localhost:3000${data.img}`}
          alt=""
          className="rounded-3xl mb-5"
        />        {/* rich-text class & description styling take into the index.css file  */}
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Comment Section  */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments- ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-blue-50 border border-blue-100 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add Comment Section  */}
        <div className="max-4-3xl mx-auto">
          <p className="font-semibold mb-4">Add Your Comment </p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              placeholder="Comment"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 px-8 hover:scale-105 hover:bg-blue-600 transition-all cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Share Buttons  */}
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <img src={assets.facebook_icon} width={50} alt=""></img>
            <img src={assets.twitter_icon} width={50} alt=""></img>
            <img src={assets.googleplus_icon} width={50} alt=""></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : <Loader />  //for the load to wrong id enter page
};

export default Blog;
