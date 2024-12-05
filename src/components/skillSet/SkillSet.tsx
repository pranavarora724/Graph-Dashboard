import ComparisonGraph from "./left/ComparisonGraph";
import HTML from "./left/HTML";
import QuickStats from "./left/QuickStats";
import QuestionWise from "./right/QuestionWise";
import SyllabusWise from "./right/SyllabusWise";

interface SkillSetProps{
    setIsOpen:(value: boolean | ((prevVar: boolean) => boolean)) => void,
    rank:number,
    percentile:number,
    score:number
}
const SkillSet:React.FC<SkillSetProps> = ({setIsOpen , rank , percentile , score})=>
{
    return(
        <div className=" p-6 max-w-[1180px] w-[90%] md:w-[80%] lg:w-[90%] mx-auto">
            
            <div>Skill Set</div>
            <div className="flex flex-col md:flex-row md:gap-x-4 mt-4 justify-center gap-y-4 max-[768px]:items-center">

                {/* LEFT PART */}
                <div className="flex flex-col gap-y-6 lg:w-[550px] md:w-[57%] w-[90%]">
                    <HTML setIsOpen={setIsOpen}></HTML>
                    <QuickStats rank={rank} score={score} percentile={percentile}></QuickStats>
                    <ComparisonGraph percentile={percentile}></ComparisonGraph>
                </div>


                {/* Right PART */}
                <div className="flex flex-col lg:w-[450px] md:w-[43%] w-[90%] gap-y-6">
                    <SyllabusWise></SyllabusWise>
                    <QuestionWise score={score}></QuestionWise>
                </div>
                
            </div>
        </div>
    )
}

export default SkillSet;