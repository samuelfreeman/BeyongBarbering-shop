import { currentUser } from "@clerk/nextjs/server";
import { db } from "./data";

export const checkUser = async () => {
    const user = await currentUser()
    if (!user) {
        return null
    }
    const loggedInUser = await db.user.findUnique({
        where: {
            id: user.id
        }
    })

    if (loggedInUser) {
        return loggedInUser
    }

    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: user.username,
            telephone: null,
            imageUrl: user.imageUrl,
            password: user.passwordEnabled


        }
    })

    if (!loggedInUser) {
        return newUser
    }
}