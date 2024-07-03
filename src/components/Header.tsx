
import * as React from "react";


import { NextUIProvider } from "@nextui-org/react";



import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
    const user = await checkUser()


    return (<NextUIProvider><nav className="">
        <div className=" bg-gray-900  w-screen" >
            <div className=" text-black flex justify-between h-20 items-center ">

                <h2 className='text-2xl font-black pl-6 italic text-yellow-500'>Fresh Beyond </h2>
                <div className=''>
                    <SignedOut>
                    <div className=" p-2 mr-6 bg-yellow-500 rounded-md   text-white">
                        <SignInButton />
                    </div>
                    </SignedOut>


                    <SignInButton>
                        <div className=" mr-10 ">
                        <UserButton />
                        </div>
                    </SignInButton>
                </div>
            </div>


            <div className="w-screen h-1  bg-white"></div>

        </div>

    </nav>
    </NextUIProvider>);
}

export default Header;