import { useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  // const navigate = useNavigate(); 
  const { navigate } = useAppContext()


  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      {/* From assets.js images are selected */}
      <img
        onClick={() => {
          navigate("/");
        }}
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
      />
      // login button
      <button
        onClick={() => {
          navigate("/admin/login");
        }}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer text-white bg-blue-700 px-10 py-2.5 hover:bg-blue-900 hover:scale-105"
      >
        {'Login'}
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
