import { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  const [firstValue, setFirstValue] = useState(() => EditorState.createEmpty());
  const api_key = "d9fbec5bc5650a087316215838a6a574";

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const content = draftToHtml(convertToRaw(firstValue.getCurrentContent()));
    const title = data.title;
    const category = data.category;
    const formData = new FormData();
    formData.append("image", data.imageUrl[0]);

    const imgBBResponse = await fetch(
      `https://api.imgbb.com/1/upload?key=${api_key}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!imgBBResponse.ok) {
      throw new Error("Failed to upload image to imgBB");
    }
    const imgBBData = await imgBBResponse.json();
    console.log(imgBBData);
    const deleteApi = imgBBData.data.delete_url;
    const imageUrl = imgBBData.data.url;
    try {
      const response = await fetch(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/news",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, category, content, imageUrl, deleteApi }),
        }
      );
      if (response.ok) {
        Swal.fire({
          title: "Blog post successful",
          icon: "success",
        });
        reset();
      } else {
        console.error("Failed to save content:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  const { data: categoryItem, isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/category"
      ).then((res) => res.json()),
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mx-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Image
          </label>
          <input
            type="file"
            className="md:w-full w-1/2  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
            placeholder="Image"
            id="imageUrl"
            {...register("imageUrl")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Blog title
          </label>
          <input
            type="text"
            className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
            placeholder="Blog Title"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Category
          </label>
          <select
            {...register("category")}
            className="w-1/2  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
          >
            {" "}
            {categoryItem?.map((category) => (
              <option key={category._id} defaultValue={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>

        <div className="my-10 col-lg-12 col-md-12">
          <Editor
            editorState={firstValue}
            onEditorStateChange={setFirstValue}
            required={true}
            wrapperClassName="wrapper-class"
            toolbarClassName="toolbar-class"
            editorClassName="editor-class"
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "embedded",
                "emoji",
                "remove",
                "history",
              ],
              image: {
                urlEnabled: true,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: undefined,
                previewImage: true,
                defaultSize: {
                  height: "auto",
                  width: "auto",
                },
                fontSize: { className: "demo-option-custom-medium" },
                fontFamily: {
                  options: [
                    "Arial",
                    "sans-serif",
                    "Georgia",
                    "Impact",
                    "Tahoma",
                    "Times New Roman",
                    "Verdana",
                  ],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 px-8 py-2 text-[#fff] font-semibold rounded-md"
        >
          Save blog
        </button>
      </form>
    </div>
  );
};

export default Blog;
