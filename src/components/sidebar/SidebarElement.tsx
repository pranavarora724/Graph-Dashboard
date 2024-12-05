'use-client';

import { IconType } from "react-icons";

interface SidebarElementProps{
    title?:string,
    Icon:IconType
}

const SidebarElement:React.FC<SidebarElementProps> =({title , Icon})=>{
    return(
        <div>
            <div className={`flex flex-row gap-x-4 items-center hover:bg-blue-50 hover:cursor-pointer group  py-4 px-4 rounded-r-full ${(title=='Skill Test')?('bg-blue-50'):('')}`}>
                <div className={`group-hover:text-blue-800 ${(title=='Skill Test')?('text-blue-800'):('')}`}>
                    <Icon className="font-semibold text-xl"></Icon>
                </div>

                <div className={`font-semibold group-hover:text-blue-700 ${(title=='Skill Test')?('text-blue-800'):('')} `}>{title}</div>
            </div>
        </div>
    )
}

export default SidebarElement;