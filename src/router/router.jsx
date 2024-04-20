import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import FreeBiz from "../pages/free-biz/FreeBiz";
import DashboardLayout from "../components/layouts/dashboard/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Buy from "../pages/dashboard/Buy";
import Swap from "../pages/dashboard/Swap";
import Sell from "../pages/dashboard/Sell";
import SellReceived from "../pages/dashboard/SellReceived";
import Import from "../pages/dashboard/Import";
import Error from "../components/error/Error";
import News from "../pages/news/News";
import NewsLayout from "../components/layouts/NewsLayout/NewsLayout";
import Login from "../components/Login/Login";
import Blog from "../pages/blog/Blog";
import AdminRoute from "./AdminRoute";
import FreeBizLayout from "../components/layouts/FreeBiz/FreeBizLayout";
import MainLayout from "../components/layouts/main/MainLayout";
import AdminLayout from "../components/layouts/admin/AdminLayout";
import AllBlog from "../pages/blog/AllBlog";
import EditBlog from "../pages/blog/EditBlog";
import Bloogs from "../pages/blog/Bloogs";
import HomeError from "../components/error/HomeError";
import AddCategory from "../pages/blog/AddCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <HomeError /> },
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Bloogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <NewsLayout />,
    children: [
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://biz-server-git-main-remontripuras-projects.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <FreeBizLayout />,
    children: [{ path: "free-biz-home", element: <FreeBiz /> }],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard/dashboard-home" /> },
      { path: "*", element: <Error /> },
      { path: "dashboard-home", element: <DashboardHome /> },
      { path: "buy", element: <Buy /> },
      { path: "sell", element: <Sell /> },
      { path: "swap", element: <Swap /> },
      { path: "send", element: <SellReceived /> },
      { path: "import-token", element: <Import /> },
    ],
  },

  {
    path: "blog/blog-post",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/blog/blog-post/all-blog" /> },
      { path: "*", element: <Error /> },
      {
        path: "blog-post",
        element: <Blog />,
      },
      {
        path: "all-blog",
        element: <AllBlog />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "edit-blog/:id",
        element: <EditBlog />,
        loader: ({ params }) =>
          fetch(
            `https://biz-server-git-main-remontripuras-projects.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
