import { Outlet } from "react-router-dom";
import Navbar from "../main/Navbar";

const NewsLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NewsLayout;
