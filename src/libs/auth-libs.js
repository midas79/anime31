import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // authOptions (bukan authOption)

export const authUserSession = async () => {
    const session = await getServerSession(authOptions)
    return session?.user
}