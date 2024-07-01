'use client'
import HairStyle from "./HairStyle";
import { useState } from "react";
import TipAmount from "./TipAmount";
import { recordData } from "@/app/actions/RecordHaircut";

const Record = () => {
    const [hairStyle, setHairStyle] = useState('');
    const [amount, setAmount] = useState('');
    const [tipAmount, setTipAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async () => {
        console.log("Submitting:", { hairStyle, tipAmount, amount })
        setIsLoading(true)
        const result: any = await recordData({ hairStyle, tipAmount, amount })
        if (result) {

            setIsLoading(false);
        }

    }

    return (<>
<div className="flex flex-col justify-evenly h-full">


        <div className=" p-7 pl-4 text-center w-full">
            <h1 className="py-5">Choose Hairstyle </h1>
            <HairStyle setHairStyle={setHairStyle} setAmount={setAmount} />
        </div>
        <div className=" w-[50%] mt-36 ml-16">
            <TipAmount setTipAmount={setTipAmount} />
        </div>
        <div className="mt-11">
            <button className="bg-black p-6  text-white w-60 text-2xl rounded-md ml-16 mr-10 my-12 mt-10" onClick={handleSubmit}>
                {isLoading ? "Saving..." : "Record Hairstyle"}
            </button>
        </div>
</div>
    </>);
}

export default Record;