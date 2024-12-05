'use client';

import { useGSAP } from "@gsap/react";
import { RxCrossCircled } from "react-icons/rx";
import gsap from "gsap";

function Cross()
{

    const { contextSafe } = useGSAP();

    //    GSAP animation for closing of sidebar
    const closeSidebarHandler = contextSafe(() => {
        gsap.to('.sidebar', {
            x: -220,
            duration: 1
        })

    })

    return(
        <div onClick={()=>{closeSidebarHandler()}} className="flex justify-between mt-2 px-2  md:hidden">
        <div> </div>
        <div>
        <RxCrossCircled  className="text-black text-xl"/>
        </div>
    </div>
    )
}

export default Cross;