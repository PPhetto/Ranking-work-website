import { connectDB } from "@/lib/mongodb"
import Posts from "@/models/Posts"
import Users from "@/models/Users"
import { JwtgetPost } from "@/types/Post"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function GET(req: Request) {
    await connectDB()

    const cookiesStore = await cookies()
    const token = cookiesStore.get("token")?.value

    if (!token) {
        return Response.json({ message: "Unauthorized"}, {status: 401})
    }

    const decode = jwt.verify(token, "MY_SECRET_KEY") as JwtgetPost

    const { searchParams } = new URL(req.url)
    const username = searchParams.get("username")

    const user = await Users.findOne({ username })
    if (!user) {
        return Response.json({ message: "User not found"}, { status: 404})
    }
    
    const post = await Posts.find({ user: user._id })

    return Response.json({post, role: decode.role})
}