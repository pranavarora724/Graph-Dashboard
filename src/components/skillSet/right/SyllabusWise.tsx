'use client';

import ProgressBar from "@ramonak/react-progress-bar";

function SyllabusWise()
{
    return(
        <div className="p-4 border rounded-lg">
            <div className="text-black font-semibold">Syllabus Wise Analysis</div>

            <div className="flex flex-col w-[100%] mt-5">
                
                <div>HTML Tools , Forms , Library</div>
                <div className="flex flex-row gap-x-4  w-[100%] items-center">
                    <div className="bg-blue-100 rounded-full h-[6px] w-[100%]">
                        <div className="w-[80%] rounded-full bg-blue-400 h-[6px]"></div>
                    </div>
                <div className="text-blue-400">80%</div>
                </div>

                <div className="mt-6">Tags and References in HTML</div>
                <div className="flex flex-row gap-x-4  w-[100%] items-center">
                    <div className="bg-orange-100 rounded-full h-[6px] w-[100%]">
                        <div className="w-[60%] rounded-full bg-orange-400 h-[6px]"></div>
                    </div>
                <div className="text-orange-400">60%</div>
                </div>

                <div className="mt-6">Tables and References in HTML</div>
                <div className="flex flex-row gap-x-4  w-[100%] items-center">
                    <div className="bg-red-100 rounded-full h-[6px] w-[100%]">
                        <div className="w-[24%] rounded-full bg-red-400 h-[6px]"></div>
                    </div>
                <div className="text-red-400">24%</div>
                </div>

                <div className="mt-6">Tables CSS Basics</div>
                <div className="flex flex-row gap-x-4  w-[100%] items-center">
                    <div className="bg-green-100 rounded-full h-[6px] w-[100%]">
                        <div className="w-[96%] rounded-full bg-green-500 h-[6px]"></div>
                    </div>
                <div className="text-green-500">96%</div>
                </div>
            </div>
        </div>
    )
}

export default SyllabusWise;