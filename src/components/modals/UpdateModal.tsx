'use client'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import { fieldsValidations } from "@/types/fieldsValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

import Input from "../Input";


interface UpdateModalrops{
    rank?:number,
    percentile?:number,
    score?:number,
    isOpen?:boolean,

    setRank:(value: number | ((prevVar: number) => number)) => void,
    setPercentile:(value: number | ((prevVar: number) => number)) => void,
    setScore:(value: number | ((prevVar: number) => number)) => void,
    setIsOpen:(value: boolean | ((prevVar: boolean) => boolean)) => void,
}

const UpdateModal:React.FC<UpdateModalrops>= (
    {
        rank,
        score,
        percentile,
        isOpen,
        setRank,
        setScore,
        setPercentile,
        setIsOpen
    }
)=>
{

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues:{
            rank:rank,
            percentile:percentile,
            score:score
        },
        resolver:zodResolver(fieldsValidations)
      })

      const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        console.log("data = " , data);

        setRank(data.rank);
        setScore(data.score);
        setPercentile(data.percentile);
        setIsOpen(false);
      }

      const body = (
        <div className="p-4">
            
            <div className="flex flex-row justify-between">
                
                <div className="text-black font-bold text-2xl">Update Scores</div>
                <div>
                    <img className="w-12" src="pics/html.png"></img>
                </div>
            </div>

          {/* Input fields */}
            <div className="mt-8 flex flex-col gap-y-8">
                <div className="flex flex-row justify-between items-center">
                    
                    <div className="flex flex-row gap-x-4 items-center">
                        <PiNumberCircleOneFill  className="text-2xl text-blue-600"/>
                        <div>Update your <span className="font-semibold">Rank</span></div>
                    </div>

                    <Input
                    label="rank"
                    type="number"
                    register={register}
                    errors={errors}
                    required={true}
                    id="rank" 
                    />
                </div>

                <div className="flex flex-row justify-between items-center">
                    
                    <div className="flex flex-row gap-x-4 items-center">
                        <PiNumberCircleTwoFill  className="text-2xl text-blue-600"/>
                        <div>Update your <span className="font-semibold">Percentile</span></div>
                    </div>

                    <Input
                    label="percentile"
                    type="number"
                    register={register}
                    errors={errors}
                    required={true}
                    id="percentile" 
                    />
                </div>

                <div className="flex flex-row justify-between items-center">
                    
                    <div className="flex flex-row gap-x-4 items-center">
                        <PiNumberCircleThreeFill  className="text-2xl text-blue-600"/>
                        <div>Update your <span className="font-semibold">Current Score</span><div className="font-semibold">(Out of 15)</div></div>
                        {/* <div className="font-semibold">(Out of 15)</div> */}
                    </div>

                    <Input
                    label="score"
                    type="number"
                    register={register}
                    errors={errors}
                    required={true}
                    id="score" 
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row justify-between">
                <div> </div>
                <div className="flex flex-row gap-x-6 mt-6">
                <div onClick={()=>{setIsOpen(false); reset();}} className="p-4 border text-blue-600 border-blue-600 rounded-lg cursor-pointer">Cancel</div>
                <div className="flex flex-row items-center gap-x-4 p-4 text-white border cursor-pointer border-blue-600 bg-blue-800 rounded-lg">
                    <div onClick={handleSubmit(onSubmit)}>Save</div>
                    <FaArrowRightLong />
                </div>
            </div>
            </div>
        </div>
      )
    return(
        <Modal
        onSubmit={()=>{}}
        onClose={()=>{setIsOpen(false) ; reset();}}
        isOpen={isOpen}
        body={body}
        
        ></Modal>
    )
}

export default UpdateModal;