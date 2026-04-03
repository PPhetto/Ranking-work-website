import { connectDB } from "@/lib/mongodb";
import Users from "@/models/Users";
// import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const user = await Users.findOne({username: body.username})

    if (!user) {
        return Response.json(
            {message: "Username not found"},
            {status: 401}
        )
    }

    if (user.password !== body.password) {
        return Response.json(
            {message: "Password incorrect"},
            {status: 401}
        )
    }

    if (user.role === "admin") {
        return Response.json({
            message: "Admin login successfully",
            userId: user._id,
            username: user.username,
            role: user.role
        })
    }

    return Response.json({
        message: "User login success",
        userId: user._id,
        username: user.username,
        role: user.role
    })

    // const token = jwt.sign(
    //     {
    //         userId: user._id,
    //         role: user.role
    //     },
    //     "SECRET_KEY",
    //     { expiresIn: "1d" }
    // )

    // return Response.json(
    //     {
    //         message: "Login success",
    //         userId: user._id
    //         // token: token
    //     }
        
    // )
}