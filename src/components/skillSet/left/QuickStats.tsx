import { FaTrophy } from "react-icons/fa6";
import { FiClipboard } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

interface quickStatsProps{
  rank:number,
  percentile:number,
  score:number
}
const QuickStats:React.FC<quickStatsProps> = (
  {
    rank ,
    percentile,
    score
  }
)=> {
  return (
    <div>
      <div className="px-2 py-4 border rounded-lg">
        <div className="font-semibold ">Quick Statistics</div>

        <div className="mt-2 flex flex-row justify-between">
          <div className="flex flex-row gap-x-2 items-center">
            <div className="p-2 border bg-gray-100 rounded-full">
              <FaTrophy className="text-xl md:text-lg text-yellow-400"></FaTrophy>
            </div>
            <div>
              <div className="text-lg md:text-sm max-[500px]:text-sm">{rank}</div>
              <div className="text-xs text-gray-600">YOUR RANK</div>
            </div>
          </div>

          <div className="h-[100px] w-[1px] bg-gray-200"></div>

          <div className="flex flex-row gap-x-2 items-center">
            <div className="p-2 border bg-gray-100 rounded-full">
              <FiClipboard className="text-xl md:text-lg max-[500px]:text-sm"></FiClipboard>
            </div>
            <div>
              <div className="text-lg md:text-sm max-[500px]:text-sm">{percentile}%</div>
              <div className="text-xs text-gray-600">PERCENTILE</div>
            </div>
          </div>
          <div className="h-[100px] w-[1px] bg-gray-200"></div>

          <div className="flex flex-row gap-x-2 items-center">
            <div className="p-2 border bg-gray-100 rounded-full">
              <IoCheckmarkDoneCircle className="text-green-500 text-xl md:text-lg max-[500px]:text-sm"></IoCheckmarkDoneCircle>
            </div>
            <div>
              <div className="md:text-sm lg:text-lg max-[500px]:text-sm">{score}/15</div>
              <div className="text-xs text-gray-600">CORRECT ANSWERS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStats;
