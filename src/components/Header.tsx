
import * as React from "react";


import { NextUIProvider } from "@nextui-org/react";



import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
    const user = await checkUser()


    return (<NextUIProvider><nav className="">
        <div className=" bg-yellow-400">
            <div className=" text-black flex justify-between h-20 items-center ">

            <h2 className='text-3xl font-black pl-6 italic'>Fresh Beyound </h2>
            <div className='pr-10'>
                <SignedOut>
                    <SignedIn />
                </SignedOut>
                <SignInButton>
                    <UserButton />
                </SignInButton>
            </div>
            </div>
            

            < hr className="bg-black h-1"/>
            
        </div>

    </nav>
    </NextUIProvider>);
}

export default Header;