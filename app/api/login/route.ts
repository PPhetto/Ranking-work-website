import { connectDB } from "@/lib/mongodb";
import Users from "@/models/Users";

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const user = await Users.findOne({username: body.username})

    if (!user) {
        return Response.json(
            {message: "Username bot found"},
            {status: 401}
        )
    }

    if (user.password !== body.password) {
        return Response.json(
            {message: "Password incorrect"},
            {status: 401}
        )
    }
    return Response.json(
        {
            message: "Login success",
            userId: user._id
        }
        
    )
}