import Container from "../../components/shared/Container";
// import rightArrow from "../assets/icon/arrow-small-right.svg";
import microsoft from "../../assets/icon/microsoft_logo.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const InvolvedName = [
  { title: "Join Our", point: "true" },
  { title: "Apply For", point: "false" },
  { title: "Join Our", point: "true" },
  { title: "Apply For", point: "false" },
];

const InvolvedSection = () => {
  const [mouse, setMouse] = useState(false);
  console.log(mouse);
  return (
    <div className="w-full bg-[#F3F3F3] pt-10 pb-20 lg:px-0 px-3">
      <Container>
        <div className="w-full">
          <div className="pb-10 text-center">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
              Get involved
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {InvolvedName.map((data, i) => (
              <motion.div
                initial={{ background: "#fff" }}
                whileHover={{ background: "#2F76DE" }}
                transition={{ duration: 0.3 }}
                key={i}
                className="bg-[#fff] py-10 flex justify-center items-center gap-10 flex-col rounded-md"
                onMouseEnter={() => setMouse(i)}
                onMouseLeave={() => setMouse(null)}
                style={{
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                }}
              >
                <img src={microsoft} alt="" />
                <motion.p
                  className={`${
                    mouse === i ? "text-[#fff]" : "text-[#434343]"
                  } font-medium text-[20px] duration-700`}
                >
                  {data.title}
                  <span
                    className={`${
                      mouse === i
                        ? "border-b-4 border-[#fff]"
                        : "border-b-4 border-[#2F76DE]"
                    }  ml-1 px-1 `}
                  >
                    {data.point === "true" ? "Wallet" : "Grant"}
                  </span>
                </motion.p>
                <div
                  className={`size-10 rounded-full border-2 flex justify-center items-center`}
                >
                  <FaArrowRightLong
                    className={`${
                      mouse === i ? "text-[#fff]" : "text-[#2F76DE]"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InvolvedSection;
