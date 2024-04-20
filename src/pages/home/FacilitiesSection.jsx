import Container from "../../components/shared/Container";
import handBack from "../../assets/icon/hand-back.svg";

const FacilitiesData = [
  {
    title: "Low Transfer Fees",
    description:
      "BIZ Token withdraw with Low Fees and ZERO Transfer in P2P System. Swap your Token Instantly no hidden cost. Use this token as a payment process of your business as low cost.",
  },
  {
    title: "Best Practices & Trading",
    description:
      "We developed a holistic AI solution that took account of all best practices in the world of cryptocurrency trading with Absolete Tools.",
  },
  {
    title: "Secure Token & Flexibility",
    description:
      "BizToken was developed based on two core principles, “keep it simple” & “make it transparent”. We have intentionally kept our platform simple.",
  },
  {
    title: "Automation Development",
    description:
      "The automation development of price, payment, staking or any sector will be helpful to our members business and it's grow business quickly.",
  },
];
const FacilitiesSecondData = [
  "Join with Refer Link and Verify Email with Automatic Code Checking.",
  "Add Funding Asset Instant with API and Buy Token in Real-Time Price.",
  "Stake your Token any time and Get Profit.",
  "Withdraw your Token or Balance Instant.",
];

const FacilitiesSection = () => {
  return (
    <div className="w-full bg-[#fff] pt-10 pb-20 lg:px-0 px-3">
      <Container>
        <div className="w-full">
          <div className="pb-14 text-center">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px] mb-4">
              Facilities with BIZ
            </h2>
            <p className="text-style2">
              We work to develop attractive featuers for furure facilities of
              BIZ <br /> Community
            </p>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {FacilitiesData.slice(0, 3).map((data, i) => (
              <div
                key={i}
                className="bg-[#F3FAFF] px-[25px] py-[45px] border-l-4 border-b-8 border-t-4 border-r-8 border-[#2F76DE] rounded-3xl col-span-12 md:col-span-4"
              >
                <h3 className="text-[28px] font-medium text-[#242424] mb-4">
                  {data.title}
                </h3>
                <p className="text-style2">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[860px] mx-auto mt-9 px-[25px] py-[45px] border-l-4 border-b-[10px] border-t-4 border-r-[16px] border-[#2F76DE] rounded-3xl bg-[#F3FAFF]">
            <div className="w-full md:flex justify-between gap-4">
              <div className="flex-1 mt-8">
                {FacilitiesData.slice(3).map((data, i) => (
                  <div key={i}>
                    <h3 className="text-[28px] font-medium text-[#242424] mb-4">
                      {data.title}
                    </h3>
                    <p className="mr-10 text-style2">{data.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex-1 space-y-9 md:mt-0 mt-8">
                {FacilitiesSecondData.map((data, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <img className="size-9" src={handBack} alt="" />
                    <p className="text-style2">{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FacilitiesSection;
