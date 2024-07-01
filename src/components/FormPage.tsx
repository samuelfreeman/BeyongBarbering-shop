"use client"
import React, { useState } from 'react';

const FormPage = () => {
    const [hairStyles, setHairStyles] = useState([
        { label: 'Haircut', value: 30 },
        { label: 'Kids', value: 20 },
        // Add more styles as needed
    ]);

    type HaircutData = {
[key:string]:number

    }
    const clientAction = (event:any) => {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(event.target);
        const hairStyle = formData.get('style') as string;
        const tipAmount = formData.get('amount') as string | null;
  

        console.log(hairStyle);
    };

    return (
        <>
            <h1>Record HairCut</h1>
            <form onSubmit={clientAction}>
                <div>
                    <label>Hair Style:</label>
                    <select name="style" required>
                        {hairStyles.map((style) => (
                            <option key={style.label} value={style.label}>
                                {style.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="amount">Tip Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Enter tip amount(optional)" step={0.01} />
                </div>
                <button type="submit">Record Haircut</button>
            </form>
        </>
    );
};

export default FormPage;
