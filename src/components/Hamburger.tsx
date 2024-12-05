'use-client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";

function Hamburger()
{
    const {contextSafe} = useGSAP();
    const openSidebarHandler = contextSafe(()=>{
        gsap.to('.sidebar',{
            x:0,
            duration:1
        })
    })

    return (
        <div onClick={()=>{openSidebarHandler()}} className="absolute left-4 top-28 z-0 md:hidden flex">
            <div className="rounded-full shadow-lg">
            <RxHamburgerMenu />
            </div>            
        </div>
    )
}

export default Hamburger;