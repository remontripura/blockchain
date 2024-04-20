import { useState } from "react";
import Container from "../../components/shared/Container";
import { FaPlus, FaMinus } from "react-icons/fa";
import {Helmet} from "react-helmet";

const faqData = [
  {
    question: "What standard are these tokens issued in?",
    answer:
      "BTC, BUSD, DAI, ETH, USDC, XRP, and USDT are issued as BEP20 tokens.",
  },
  {
    question: "Are there any rate limits?",
    answer: "Yes, you can only request 1 time per 24 hours, for all tokens.",
  },
  {
    question: "What if I want to request a large amount of tokens?",
    answer:
      "Request for a large number of tokens is restricted to development purposes only. Please reach out via the BizToken Telegram support group to make this request.",
  },
  {
    question:
      "Does the tBIZ have any value, like some Binance testnet that can be traded with a real price?",
    answer:
      "tBIZ holds no financial value and cannot be traded at a real price, given its unlimited supply, exclusively serving test and development purposes.",
  },
  {
    question: "What if my request keeps failing?",
    answer:
      "To prevent potential misidentification as a bot, kindly refrain from frequent operations and allow a few minutes before attempting the next action. Feel free to seek assistance on the BizToken Telegram support group if issues persist.",
  },
];

const FreeBiz = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [toggle, setToggle] = useState(null);
  const handeFaq = (i) => {
    setIsOpen((prev) => (prev === i ? null : i));
    setToggle((prev) => (prev === i ? null : i));
  };
  return (
    <div className="bg-[#e3f3ff] md:pb-[80px] md:pt-[150px] pt-[100px] pb-5 ">
      <Helmet>
        <title>Biz - Token - Free Biz</title>
    </Helmet>
      <Container className="">
        <div className="text-center md:mb-[80px] mb-10">
          <h3 className="md:text-[64px] text-[44px] font-bold text-[#323232] uppercase">
            Free <span className="text-[#2f76de]">Biz</span> Faucet
          </h3>
          <p className="text-[#323232]">
            Get BIZ Testnet tokens every 24 hours for test deployment.
          </p>
        </div>
        <div className="bg-[#ffff] md:py-[100px] py-[50px] pl-[60px] pr-[28px] rounded-lg">
          <form>
            <div className="flex flex-col">
              <label
                htmlFor="waller-address"
                className="font-semibole text-[20px] mb-[18px]"
              >
                Wallet Address
              </label>
              <div className="flex md:flex-row flex-col gap-7">
                <input
                  className="w-full bg-[#F3F3F3] rounded-2xl border border-[#747474] outline-[#2f76de] md:px-[47px] px-5 md:py-[15px] py-[15px] md:text-[20px] text-[16px]"
                  type="text"
                  id=""
                  placeholder="Enter your BNB Smart Chain Testnet address"
                />
                <button className="px-[152px] md:py-[15px] py-3 bg-[#2f76de] rounded font-semibold md:text-[32px] text-[18px] text-white md:w-fit w-full">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:mt-[100px] mt-10">
          <h2 className="font-bold text[48px] text-center mb-[71px]">FAQ</h2>
          <div className="space-y-5 w-[90%] mx-auto">
            {faqData.map((data, i) => (
              <div key={i} className=" p-3 bg-[#fff] rounded">
                <div
                  className="flex items-center justify-between mr-5"
                  onClick={() => handeFaq(i)}
                >
                  <div className="flex gap-7 md:items-start items-center mr-10">
                    <span className="text-[#2f76de] md:text-[48px] text-[24px] font-semibold">
                      0{i + 1}
                    </span>
                    <div className="mt-5">
                      <h3 className="cursor-pointer font-semibold md:text-[24px] text-[16px]">
                        {data.question}
                      </h3>
                      {isOpen == i && <p className="mt-10">{data.answer}</p>}
                    </div>
                  </div>
                  {toggle == i ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FreeBiz;
