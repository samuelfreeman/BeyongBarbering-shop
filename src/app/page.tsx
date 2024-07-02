import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"
import Record from "@/components/RecordHaircut"
const page = async () => {
  const user = await currentUser()
  
  if (!user) {
    return <Guest />
  }

  return (
    <div className="h-screen bg-yellow-500 ">
      <h1 className=" text-xl pt-14 pb-7 h-[15vh] text-center"><span className="text-3xl italic font-bold pb-2">Welcome </span> , <br/> {user.username?.toUpperCase()} !</h1>
      <div className="pt-16 h-[60vh] ">
        <Record />

      </div>
    </div>
  )
}

export default page
