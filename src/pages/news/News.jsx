import Container from "../../components/shared/Container";
import { Link, useLoaderData } from "react-router-dom";
import timelogo from "../../assets/icon/time.svg";
import { useQuery } from "@tanstack/react-query";
import facebook from "../../assets/icon/pagesicon/facebook.svg";
import twitter from "../../assets/icon/pagesicon/twitter.svg";
import instagram from "../../assets/icon/pagesicon/instagram.svg";
import reddit from "../../assets/icon/pagesicon/reddit.svg";
import linkedin from "../../assets/icon/pagesicon/linkedin.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "react-lottie-player";
import lottieJson from "../../json/loading.json";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const loaderData = useLoaderData();
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { imageUrl, content, title, date } = loaderData;
  useEffect(() => {
    axios
      .get(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/category-group"
      )
      .then((response) => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
    window.scrollTo(0, 100);
  }, []);
  useEffect(() => {
    axios
      .get("https://biz-server-git-main-remontripuras-projects.vercel.app/news")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
    window.scrollTo(0, 100);
  }, []);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>
    );
  }
  const scroll = () => {
    window.scrollTo({
      top: 0,
      button: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <div className="md:pb-[80px] md:pt-[100px] pt-[100px] pb-5 ">
        <div className="flex justify-start items-center py-5 bg-[#FFFFFF] shadow rounded-lg my-5 w-fit px-[14px] gap-5">
          <span className="text-[20px] text-[#7A7A7A]">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#7A7A7A"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="text-[20px] text-[#2F76DE] font-medium">Blog</span>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-3">
          <div className="lg:col-span-9 col-span-12 px-3">
            <img
              className="md:h-[500px] h-[300px] object-cover w-full rounded-3xl"
              src={imageUrl}
              alt=""
            />
            <p className="flex items-center gap-5 mt-10 mb-[60px]">
              <img className="size-[30px]" src={timelogo} alt="" />
              <span className="text-[20px] text-[#787878]">
                {`${date?.date} ${date?.monthName} ${date?.year}  `}
              </span>{" "}
              <span className="font-medium text-[20px] text-[#787878] ml-3">
                2.18 PM
              </span>{" "}
            </p>
            <h3 className="font-bold text-[48px] text-[#242424] mb-3">
              {title}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></div>

            <div className="flex justify-end items-center md:gap-8 gap-3 md:my-[66px] my-[30px]">
              <h3 className="md:text-[32px] text-[20px] text-[#494949] font-bold">
                Share
              </h3>
              <img
                src={facebook}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <img
                src={twitter}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <img
                src={instagram}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <img
                src={reddit}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <img
                src={linkedin}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
            </div>
            <div className="md:mt-[84px] mt-[50px] mb-[100px]">
              <form>
                <div className="w-full space-y-3">
                  <input
                    type="text"
                    className="w-full md:px-[34px] px-[5px] md:py-[20px] py-[10px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                    placeholder="Name"
                  />
                  <textarea
                    name=""
                    id=""
                    rows=""
                    className="w-full h-[155px] md:px-[34px] px-[5px] md:py-[20px] py-[10px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                    placeholder="Enter Your Text"
                  ></textarea>
                  <button className="md:px-[41px] px-[20px] md:py-[16px] py-[8px] rounded-lg bg-[#2F77E0] text-[20px] font-medium text-[#FFFFFF]">
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="md:col-span-3 col-span-12 md:mx-0 mx-3">
            <div className=" bg-[#F3F3F3] p-4 rounded md:h-[500px] h-[300px]">
              <div className="bg-[#fff] rounded p-[10px] w-fit px-5 mb-3">
                <h3 className="font-bold text-[#2F76DE] text-[20px]">
                  Category
                </h3>
              </div>
              <ul className="space-y-3 p-1">
                {category?.map((item) => (
                  <li
                    key={item._id}
                    className="w-full bg-[#fff] rounded-full pl-3 pr-1 py-1 flex justify-between"
                  >
                    {item.category}
                    <span className="w-6 h-full bg-[#2F76DE] rounded-full text-center text-[#fff]">
                      {item.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F3FAFF] h-fit border p-3 rounded mt-5">
              <div className="bg-[#fff] rounded p-[10px] w-full text-center">
                <h3 className="font-bold text-[#2F76DE] text-[20px]">
                  Populer news
                </h3>
              </div>
              <div className="space-y-2">
                {data?.slice(0, 6).map((data) => (
                  <div
                    key={data._id}
                    className="flex items-start gap-2 border-b-2 border-b-[#CDCDCD] py-3"
                  >
                    <img
                      className="size-[80px] rounded-md"
                      src={data.imageUrl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-[12px] text-[#8B8B8B]">
                        Biz Ecosystem
                      </p>
                      <Link to={`/news/${data?._id}`}>
                        <p className="text-[#242424] font-medium text-[14px]">
                         {data.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F3FAFF] h-fit p-3 rounded mt-5">
              <div className="bg-[#fff] rounded p-[10px] w-fit text-center px-5">
                <h3 className="font-bold text-[#2F76DE] text-[20px]">
                  Follow Us
                </h3>
              </div>
              <div className="flex justify-start items-center  gap-4 md:my-[40px] my-[25px]">
                <img
                  src={facebook}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <img
                  src={twitter}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <img
                  src={instagram}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <img
                  src={reddit}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <img
                  src={linkedin}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-12">
          <h3 className="absolute z-[999] top-[16px] left-3 md:text-[48px] text-[32px] font-bold leading-8">
            Related blog
          </h3>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {data?.map((data) => (
              <SwiperSlide key={data._id} className="w-full ml-3">
                <img
                  className="h-[190px] w-full object-cover"
                  src={data.imageUrl}
                  alt=""
                />
                <Link to={`/news/${data?._id}`} onClick={scroll}>
                  <p className="mt-4 hover:text-blue-600 duration-300">
                    {data.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default News;
