'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
// import Button from "../Button";
import { FaGithub } from "react-icons/fa";
// import useRegisterModal from "../hooks/useRegisterModal";
import { useRouter } from "next/navigation";

interface ModalProps{
    title?:String,
    disabled?:boolean,
    isOpen?:boolean,
    onClose:()=>void,
    onSubmit:()=>void,
    body?:React.ReactNode, 
    footer?:React.ReactNode,
    // reset:()=>void
}


const Modal:React.FC<ModalProps> = 
({isOpen,
    onClose,
    onSubmit,
    // reset,
    body,
disabled,
footer,
title
})=>{
    return(
        (isOpen)?
        (<>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div className={`translate duration-300 h-full ${
              isOpen ? "translate-y-0" : "translate-y-full"
            } ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                  onClick={()=>{onClose()}}
                >
                  <IoMdClose size={18} />
                </button>
                {/* <div className="text-xl font-semibold">{title}</div> */}
              </div>
              <div className="relative p-6 flex-auto">
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
        </>):
        (<></>)
    )
}

export default Modal;