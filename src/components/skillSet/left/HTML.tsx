
'use client'

interface HTMLprops{
    setIsOpen:(value: boolean | ((prevVar: boolean) => boolean)) => void,
}
const HTML:React.FC<HTMLprops> = (
    {setIsOpen}
)=>
{
    return(
        <div>
            <div className="border rounded-lg flex flex-row items-center py-4 px-2 justify-between">

               <div className="flex flex-row gap-x-2 items-center">
               <div>
                    <img className="lg:w-12 md:w-8 w-12" src="pics/html.png"></img>
                </div>

                <div className="w-fit">
                <div className="font-semibold md:text-[12px] lg:text-[15px] max-[500px]:text-[9px]">Hyper Text Markup Language</div>
                <div className="flex flex-wrap flex-row md:text-[11px] lg:text-[13px] max-[500px]:text-[9px]">
                    <div className="">Question: 08 | Duration 15 mins</div>
                    {/* <div>Duration: 15 mins </div> */}
                    {/* <div>Submitted on 5 June 2021</div> */}
                </div>
                </div>

               </div>
                <div onClick={()=>{setIsOpen(true)}} className="bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:scale-90 transition-all duration-150">Update</div>
            </div>
        </div>
    )
}
export default HTML;