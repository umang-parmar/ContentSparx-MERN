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
import Login from "./components/admin/Login.jsx";

import 'quill/dist/quill.snow.css'

import { AppProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <BrowserRouter>
      <AppProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />

          {/* for the admin dashboard */}
          <Route path="/admin" element={true ? <Layout /> : <Login />}>
            {/* using outlet component use these child components  */}
            <Route index element={<Dashboard />} />
            <Route path="addBlog" element={<AddBlog />} />
            <Route path="listBlog" element={<ListBlog />} />
            <Route path="comments" element={<Comments />} />
          </Route>

        </Routes>
      </AppProvider> //use context fileeeeeee

    </BrowserRouter>
  </StrictMode >
);
