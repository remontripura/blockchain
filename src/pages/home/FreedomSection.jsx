import Container from "../../components/shared/Container";
import innovation from "../../assets/icon/freedom/innovation.svg";
import globe from "../../assets/icon/freedom/globe.svg";
import bitcoin from "../../assets/icon/freedom/bitcoin.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const FreedomData = [
  {
    img: globe,
    title: "Empowering Financial Access Globally",
    description:
      "Revolutionizing Financial Paradigms,DeFi transforms finance with accessibility, transparency, autonomy, leveraging blockchain for peer-to-peer transactions, empowering individuals.",
  },
  {
    img: innovation,
    title: "Unlocking Financial Opportunities",
    description:
      "DeFi offers various financial opportunities, operates round-the-clock, enables passive income, governance participation, and portfolio diversification globally.",
  },
  {
    img: bitcoin,
    title: "Overcoming Barriers to Entry",
    description:
      "DeFi's open infrastructure democratizes finance, fostering innovation and economic empowerment globally, eliminating traditional accessibility barriers.",
  },
];

const FreedomSection = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "2 1"],
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  return (
    <div
      style={{ x: xValue }}
      className="w-full bg-[#F3FAFF] pt-10 pb-20 lg:px-0 px-3"
    >
      <Container>
        <div className="w-full">
          <div className="lg:pt-[80px] pb-10">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
              DeFi: Empowering <br /> Financial Access Globally
            </h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {FreedomData.map((data, i) => (
              <div
                key={i}
                className=" bg-[#FFFFFF] pt-[42px] pr-[55px] pb-[47px] pl-[32px] gap-3 rounded-[10px]"
                style={{
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                }}
              >
                <div className="">
                  <div className="size-[70px] bg-[#2F77E0] p-2 rounded-full mt-1 flex justify-center items-center">
                    <img className="size-[44px]" src={data.img} alt="" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[24px] leading-9 pt-[20px] pb-[12px]">
                    {data.title}
                  </h3>
                  <p className="text-style1">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FreedomSection;

// <div className="w-full">
//           <div className="lg:pt-[80px] pb-10">
//             <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
//               Unlocking freedom with
//               <br /> Decentralized Finance
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
//             {FreedomData.map((data, i) => (
//               <div
//                 key={i}
//                 className=" bg-[#FFFFFF] p-7 gap-3 rounded-md"
//                 style={{
//                   boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
//                 }}
//               >
//                 <div className=" flex-[1]">
//                   <div className="w-[40px] h-[40px] bg-[#2F77E0] p-2 rounded-full mt-1">
//                     <img className="" src={data.img} alt="" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-3 flex-[8]">
//                   <h4>{data.title}</h4>
//                   <p className="text-style1">{data.description}</p>
//                   <div className="size-10 bg-[#2F76DE] p-3 rounded-full">
//                     <img className="w-full" src={rightArrow} alt="" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
