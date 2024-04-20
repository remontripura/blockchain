import Container from "../../shared/Container";

import icon from "../../assets/icon/logo.png";

const FaqHeader = () => {
  return (
    <div className="bg-[#3F3F3F]">
      <Container>
        <div className="flex justify-between py-[30px] px-3">
          <img className="" src={icon} alt="" />
          <div className="flex md:gap-8 gap-2 items-center">
            <button className="md:px-[30px] px-[10px] py-[13px] border-2 border-[#FFFFFF] rounded-lg font-bold md:text-[18px] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000] duration-300">
              Contact Us
            </button>
            <button className="md:px-[30px] px-[10px] py-[13px] border-2 border-[#FFFFFF] rounded-lg font-bold text-[18px] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000] duration-300">
              Start Building
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqHeader;
