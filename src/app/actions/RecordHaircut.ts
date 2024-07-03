'use server';
import { db } from "@/lib/data";
import { checkUser } from "@/lib/checkUser";



export const recordData = async ({ hairStyle, tipAmount, amount }: { hairStyle: string, tipAmount: string, amount: string }) => {
    try {



        if (!tipAmount) {
            tipAmount = '0'
            const user = await checkUser()
            const newHaircut = await db.haircut.create({
                data: {
                    userId: user?.id,
                    type: hairStyle,
                    tipAmount: parseInt(tipAmount),
                    amount: parseInt(amount),
                },
            })
            return newHaircut
        }


    } catch (error) {
        console.log(error)
    }
}