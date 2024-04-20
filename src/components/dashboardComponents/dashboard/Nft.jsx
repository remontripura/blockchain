const Nft = () => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-400">
            <th className="text-[14px] font-normal p-5">Nft</th>
            <th className="text-[14px] font-normal p-5">Portfolio %</th>
            <th className="text-[14px] font-normal p-5">Price(24H)</th>
            <th className="text-[14px] font-normal p-5">Balance</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-center border-b border-slate-500">
            <td className="p-5">Biztoken</td>
            <td className="p-5">1000BIZ</td>
            <td className="p-5">$0.40</td>
            <td className="p-5">1000BIZ</td>
          </tr>
          <tr className="text-center  border-b border-slate-500">
            <td className="p-5">Biztoken</td>
            <td className="p-5">1000BIZ</td>
            <td className="p-5">$0.40</td>
            <td className="p-5">1000BIZ</td>
          </tr>
          <tr className="text-center border-b border-slate-500">
            <td className="p-5">Biztoken</td>
            <td className="p-5">1000BIZ</td>
            <td className="p-5">$0.40</td>
            <td className="p-5">1000BIZ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Nft;
