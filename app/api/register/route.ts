import { connectDB } from "@/lib/mongodb";
import User from "@/models/Users";

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const used = await User.findOne({ username: body.username })

    if (used) {
        return Response.json(
            {message: "Username already used"},
            {status: 400}
        )
    }

    const user = await User.create({
        username: body.username,
        password: body.password,
        address: body.address,
        role: "user"
    })

    return Response.json(user)
}