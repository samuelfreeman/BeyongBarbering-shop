import React from "react";

const TipAmount = ({ setTipAmount }: any) => {
    // Inside TipAmount component

    const handleChange = (event: any) => {
        setTipAmount(event.target.value);
    };

    return (
        <div className="">
            <input onChange={handleChange} className="bg-black text-white  rounded-lg p-5 w-60" type="number" placeholder="Enter your Tip Amount: 0.0" />
        </div>
    );
};



export default TipAmount;
