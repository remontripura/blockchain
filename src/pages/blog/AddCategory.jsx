import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery, useQueryClient } from "@tanstack/react-query"; // Import useQueryClient
import Lottie from "react-lottie-player";
import lottieJson from "../../json/loading.json";

const AddCategory = () => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/category",
        data
      );
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          text: "Category set Successfully",
        });
        reset();
        await queryClient.invalidateQueries("repoData");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          text: "category already exists",
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Oops something went wrong",
        });
      }
    }
  };
  const { data, isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/category"
      ).then((res) => res.json()),
  });
  if (isPending) {
    return (
      <div className=" flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>
    );
  }
  return (
    <div className="mx-2">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Category
          </label>
          <input
            type="text"
            className="md:w-1/2 w-full px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
            placeholder="Add Category"
            id="categoryName"
            {...register("categoryName")}
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 px-8 py-2 text-[#fff] font-semibold rounded-md"
        >
          Save blog
        </button>
      </form>
      <div className="my-5 w-full">
        <h3 className="text-[24px] font-semibold my-3">Category List</h3>
        <div className="flex flex-wrap items-center gap-3 w-3/4 p-5 pl-0">
          {data?.map((item, i) => (
            <p
              key={i}
              className="px-3 py-1 bg-[#1E40AF] rounded text-[#fff] font-semibold cursor-pointer"
            >
              {item.categoryName}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
