import { Link } from "react-router-dom";

const HomeError = () => {
  return (
    <div className="w-[500px] mx-auto flex justify-center  h-[80vh]">
      <div>
        <img
          className="w-full mt-20"
          src="https://i.ibb.co/J38JsB7/404.png"
          alt=""
        />
        <h3 className="text-3xl font-medium text-center">oops! page not found</h3>
        <div className="w-fit mx-auto bg-[#458DF3] rounded-2xl mt-5 px-5 py-3">
          <Link
            to="/"
            className=" text-white text-center flex items-center justify-center h-full"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeError;
