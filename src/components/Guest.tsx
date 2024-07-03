import { SignInButton } from "@clerk/nextjs";
const Guest = () => {

    return (
        <div className="relative w-screen h-screen bg-homeImage bg-cover bg-center text-white">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-10">
                <h1 className="text-4xl p-7">Welcome</h1>
                <p className="text-xl p-3">Please sign In to Record your HairCuts!</p>
                <div className="text-center w-full">
                    <div className="mx-auto mt-10 p-2 bg-yellow-500 rounded-md w-32 text-white">
                        <SignInButton />
                    </div>
                </div>
                <div className="mt-72 text-white">
                    <h1>Built and maintained by Samuel Twum Boateng</h1>
                </div>
            </div>
        </div>
    );

}

export default Guest;