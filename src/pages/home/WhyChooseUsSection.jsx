import Container from "../../components/shared/Container";
import asset from "../../assets/image/asset.jpg";
import community from "../../assets/image/community.jpg";
import insigts from "../../assets/image/insights.jpg";

const WhyChooseUsData = [
  {
    img: asset,
    heading: "Secured Asset",
    title:
      "Buy BIZ Token to Stake or Store in Decentralize Apps and It's gives you Asset Security.",
  },
  {
    img: community,
    heading: "Big Community",
    title:
      "We develop a Big Community to Increase Token Price and you can gain quickly with this Token.",
  },
  {
    img: insigts,
    heading: "HFT Insights",
    title:
      "BIZ Token is a High-Frequency Trading Industry that's allow you buy-sell and Trade Instantly.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <div className="w-full bg-[#fff] pt-10 pb-20 lg:px-0 px-3">
      <Container>
        <div className="w-full">
          <div className="mb-20 lg:w-[50%] md:w-full w-full">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px] mb-4">
              Why Choose BIZ Token?
            </h2>
            <p className="text-style2">
              BIZ Token develop under Binance Smart Chain that a Strong Network
              in the Crypto World and makes it Easily usable P2P System.
            </p>
          </div>
          <div className="grid lg:grid-col-3 md:grid-cols-3 grid-cols-1 gap-5">
            {WhyChooseUsData.map((data, i) => (
              <div
                key={i}
                className="bg-[#F3FAFF] rounded-2xl pb-12"
                style={{
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                }}
              >
                <img
                  className="w-full h-[400px] rounded-t-2xl"
                  src={data.img}
                  alt=""
                />
                <div className="mx-4">
                  <h3 className="text-[#000] md:text-[28px] text-[20px] font-medium my-5">
                    {data.heading}
                  </h3>
                  <p className="text-style2">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUsSection;
