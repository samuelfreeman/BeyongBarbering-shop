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
<div className="flex flex-col justify-evenly items-center h-full w-full ">


        <div className=" pl-7 mb-20">
            <h1 className="pb-5  font-bold">Choose Hairstyle: </h1>
            <HairStyle setHairStyle={setHairStyle} setAmount={setAmount} />
        </div>
        <div className="mb-10 mt-20">
            <TipAmount setTipAmount={setTipAmount} />
        </div>
        <div className="mt-28 bg-white">
            <button className="bg-black p-6  text-white w-60 text-2xl rounded-md " onClick={handleSubmit}>
                {isLoading ? "Saving..." : "Record Hairstyle"}
            </button>
        </div>
</div>
    </>);
}

export default Record;