import { SignInButton } from "@clerk/nextjs";
const Guest = () => {
    
    return ( <div className="w-screen h-screen text-center p-6 bg-yellow-500">
        <h1 className=" text-4xl p-7">Welcome </h1>
        <p className="text-xl p-3">Please sign In to  Record your HairCuts!</p>
        <div className="text-center w-full">

        <div className="ml-28  mt-10 p-2 pl-2 bg-black rounded-md  w-32 md:ml-[45%] text-white">

        <SignInButton />
        </div>

        </div>


        <div className="mt-72">
            <h1>Built and maintained by Samuel Twum Boateng</h1>
        </div>
    </div> );
}
 
export default Guest;