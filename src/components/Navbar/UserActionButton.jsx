import Link from "next/link"
import {authUserSession} from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
        <div className="flex items-center justify-between gap-6">
            {
                user ? <Link className="text-primary text-justify" href="/user/dashboard">Dashboard</Link> : null
            }
            
            <Link href={actionUrl} className="bg-dark text-accent py-1 px-12 inline-block"> {actionLabel} </Link>
        </div>
    )
}

export default UserActionButton