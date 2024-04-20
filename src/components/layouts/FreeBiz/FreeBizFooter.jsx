import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const FreeBizFooter = () => {
  return (
    <div className="w-full bg-[#3F3F3F] md:py-[125px] py-[80px]">
      <div className="max-w-[537px] mx-auto flex flex-col justify-center items-center">
        <h3 className="text-[#FFFFFF] text-center text-[28px] font-semibold">
          Join Out Social media
        </h3>
        <div className="flex items-center md:gap-10 gap-5 mt-10">
          <div className="flex flex-col items-center">
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit cursor-pointer ">
              <FaFacebook className="md:text-5xl text-3xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] md:mt-[15px] text-[#FFFFFF]">Facebook</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit cursor-pointer">
              <FaTwitter className="md:text-5xl text-3xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] md:mt-[15px] text-[#FFFFFF]">Twitter</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit cursor-pointer">
              <FaLinkedin className="md:text-5xl text-3xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] md:mt-[15px] text-[#FFFFFF]">Linkedin</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit cursor-pointer">
              <FaYoutube className="md:text-5xl text-3xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] md:mt-[15px] text-[#FFFFFF]">Youtube</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeBizFooter;
