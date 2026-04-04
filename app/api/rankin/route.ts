import { connectDB } from "@/lib/mongodb"
import Posts from "@/models/Posts"
import Users from "@/models/Users"

export async function GET(req: Request) {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const username = searchParams.get("username")

    const user = await Users.findOne({ username })
    if (!user) {
        return Response.json({
            message: "User not found",
            status: 404
        })
    }
    
    const post = await Posts.find({ userId: user._id })

    return Response.json(post)
}