import { Outlet } from "react-router-dom";

import FreeBizFooter from "./FreeBizFooter";
import Navbar from "../main/Navbar";

const FreeBizLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FreeBizFooter />
    </div>
  );
};

export default FreeBizLayout;
