import { currentUser } from "@clerk/nextjs/server";
import { db } from "./data";

export const checkUser = async () => {

    //  get current user 
    const user = await currentUser()

    if (!user) {
        return null
    }

    //  check if user exists in the database  if not create it
    const loggedInUser = await db.user.findFirst({
        where: {
            clerkUserId: user.id,
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