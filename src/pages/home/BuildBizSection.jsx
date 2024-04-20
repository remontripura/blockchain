import Container from "../../components/shared/Container";
import developmentImage from "../../assets/image/programming.png";

const BuildBizSection = () => {
  return (
    <div className="w-full bg-[#fff] pt-10 pb-20 lg:px-0 px-3">
      <Container>
        <div
          className="grid md:grid-cols-2 grid-cols-1 md:px-14 md:py-8 px-5 py-3 gap-5 rounded-2xl"
          style={{
            background:
              "linear-gradient(86deg, rgba(47, 118, 222, 0.83) 27.69%, rgba(179, 0, 194, 0.00) 115.26%)",
          }}
        >
          <div className="flex flex-col justify-around lg:pr-32 my-8 gap-5">
            <h3 className="lg:max-w-[30ch] text-[#fff] text-[28px] font-bold">
              Six unique aspects of BIZ Blockchain that will surprise Solidity
              developers
            </h3>
            <p className="lg:max-w-[50ch] text-[16px] text-[#fff]">
              When learning development on BIZ, you should be aware of certain
              design differences that make things on BIZ act quite differently
              from what you expect.
            </p>
            <div>
              <button className="py-4 px-14 rounded-full bg-[#fff] md:w-fit w-full">
                Build With Biz
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-full object-contain"
              src={developmentImage}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuildBizSection;
