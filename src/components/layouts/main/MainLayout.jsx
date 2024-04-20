import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MainFooter from "./MainFooter";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
