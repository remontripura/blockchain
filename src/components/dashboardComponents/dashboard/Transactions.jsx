import upArrow from "../../../assets/dashboardImg/arrow-up-right.svg";
import downArrow from "../../../assets/dashboardImg/arrow-up-right0.svg";
const Transactions = () => {
  return (
    <div className="mt-10 ">
      <div>
        <h3 className="ml-10 mb-3 font-semibold">Jan 15</h3>
        <div className=" bg-[#FFFFFF] rounded-3xl px-[30px]">
          <div className="flex justify-between  py-[22px] border-b border-slate-500">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#FFD0CA] rounded-full size-[30px] flex justify-center items-center p-[7px]">
                <img className="w-full" src={upArrow} alt="" />
              </div>
              <span className="font-semibold">Send</span>
            </div>
            <h3>-23 Mind</h3>
          </div>
          <div className="flex justify-between py-[22px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#FFD0CA] rounded-full size-[30px] flex justify-center items-center p-[7px]">
                <img className="w-full" src={downArrow} alt="" />
              </div>
              <span className="font-semibold">Receive</span>
            </div>
            <h3>-23 Mind</h3>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="ml-10 mb-3 font-semibold">Jan 16</h3>
        <div className=" bg-[#FFFFFF] rounded-3xl px-[30px]">
          <div className="flex justify-between  py-[22px] border-b border-slate-500">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#FFD0CA] rounded-full size-[30px] flex justify-center items-center p-[7px]">
                <img className="w-full" src={upArrow} alt="" />
              </div>
              <span className="font-semibold">Send</span>
            </div>
            <h3>-23 Mind</h3>
          </div>
          <div className="flex justify-between py-[22px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#FFD0CA] rounded-full size-[30px] flex justify-center items-center p-[7px]">
                <img className="w-full" src={downArrow} alt="" />
              </div>
              <span className="font-semibold">Receive</span>
            </div>
            <h3>-23 Mind</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
