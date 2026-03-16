import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Blog from "./pages/Blog";
import Home from "./pages/Home.jsx";
import Layout from "./pages/admin/Layout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AddBlog from "./pages/admin/AddBlog.jsx";
import ListBlog from "./pages/admin/ListBlog.jsx";
import Comments from "./pages/admin/Comments.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* for the admin dashboard */}
        <Route path="/admin" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="addBlog" element={<AddBlog/>}/>
          <Route path="listBlog" element={<ListBlog/>}/>
          <Route path="comments" element={<Comments/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
