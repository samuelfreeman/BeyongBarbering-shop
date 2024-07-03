import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"
import Record from "@/components/RecordHaircut"
const page = async () => {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return (
    <div className="relative h-screen bg-cover bg-center bg-homeImage text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 h-full">
        <h1 className="text-xl pt-14 pb-7 h-[15vh] text-center">
          <span className="text-2xl italic font-bold pb-2">Welcome </span>, {user.username}!
        </h1>
        <div className="pt-16 h-[60vh]">
          <Record />
        </div>
      </div>
    </div>

  )
}

export default page
