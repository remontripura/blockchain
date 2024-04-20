import { Navigate, useLocation } from "react-router-dom";

const user = {
  name: "edulife",
  password: "1234",
};

const AdminRoute = ({ children }) => {
  const name = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const location = useLocation();

  if (user.name == name && password == user.password) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
