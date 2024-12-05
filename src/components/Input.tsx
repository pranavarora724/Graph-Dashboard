'use client';
import React, { useEffect, useRef, useState } from "react";

import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
} from "react-hook-form";


interface InputProps{
    label?:string,
    id:string,
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors,
    type?: string
    required?:boolean,
    disabled?:boolean,
}
    
    const Input : React.FC<InputProps> = ({
        errors,
        id,
        label,
        register,
        required,
        type,
        disabled,
    })=>{

        const numberInputOnWheelPreventChange = (e:any) => {
            // Prevent the input value change
            e.target.blur()
        
            // Prevent the page/container scrolling
            e.stopPropagation()
        
           
              setTimeout(() => {
                e.target.focus()
            }, 0)
        }
        return(
            <div className="w-[200px] relative">
               
                <input
        id={id}
        disabled={disabled}
        {...register(id, { required:required ,valueAsNumber:true })}
        placeholder=" "
        type='number'
        onWheel={numberInputOnWheelPreventChange}
        className={`no-spinners peer w-[200px] h-[25px] appearance-none p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
            ${errors[id] ? "border-rose-500" : "border-neutral-300"} ${
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        }`}
      />

{/* <input 
  type="number" 
  className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/> */}
      {/* <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] 
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-zinc-400"
        }`}
      >
        {label}
      </label> */}
      {
        // If error is there frst display that
        // if No Error check is Usrname availabe
        (errors[id])?
        (
        <div className="text-rose-500 mt-2 text-lg">{errors[id].message?.toString()}</div>
        ):
        (<></>)
    }
            </div>
        )
    }
    export default Input;