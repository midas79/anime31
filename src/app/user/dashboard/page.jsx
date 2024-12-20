import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="text-primary">
            <h3> Dasboard</h3>
            <h5>
                Welcome  {user.name}
            </h5>
            <Image src={user.image} alt="..." width={250} height={250}/>
        </div>
    )
}

export default Page