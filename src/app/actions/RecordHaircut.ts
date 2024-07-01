'use server';
import { db } from "@/lib/data";
import { checkUser } from "@/lib/checkUser";

export const recordData = async ({ hairStyle, tipAmount, amount }: { hairStyle: string, tipAmount: string, amount: string }) => {
    try {
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
        console.log(newHaircut)
    } catch (error) {
        console.log(error)
    }
}