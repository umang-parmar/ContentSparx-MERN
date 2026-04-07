import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home.jsx";
import Layout from "./pages/admin/Layout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AddBlog from "./pages/admin/AddBlog.jsx";
import ListBlog from "./pages/admin/ListBlog.jsx";
import Comments from "./pages/admin/Comments.jsx";
import Login from "./components/admin/Login.jsx";

import 'quill/dist/quill.snow.css'

import { AppProvider, useAppContext } from "./context/AppContext.jsx";
import { Toaster } from 'react-hot-toast'

const RequireAdmin = ({ children }) => {
  const { isAdmin } = useAppContext();
  return isAdmin ? children : <Navigate to="/" replace />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />

          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/*" element={<RequireAdmin><Layout /></RequireAdmin>}>
            <Route index element={<Dashboard />} />
            <Route path="addBlog" element={<AddBlog />} />
            <Route path="listBlog" element={<ListBlog />} />
            <Route path="comments" element={<Comments />} />
          </Route>

        </Routes>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
