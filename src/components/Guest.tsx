import { SignInButton } from "@clerk/nextjs";
const Guest = () => {
    
    return ( <div className="w-screen text-center p-6 bg-yellow-500">
        <h1 className=" text-4xl p-7">Welcome </h1>
        <p className="text-xl p-3">Please sign In to  Record your HairCuts!</p>
        <div className="text-center w-full">

        <div className="bg-black ml-32 rounded-md text-lg w-20 text-white">

        <SignInButton />
        </div>
        </div>
    </div> );
}
 
export default Guest;