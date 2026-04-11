import { connectDB } from "@/lib/mongodb";
import Users from "@/models/Users";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers"
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const user = await Users.findOne({username: body.username})

    if (!user) {
        return NextResponse.json(
            {message: "Username not found"},
            {status: 401}
        )
    }

    if (user.password !== body.password) {
        return NextResponse.json(
            {message: "Password incorrect"},
            {status: 401}
        )
    }

    const token = jwt.sign(
        {
            userId: user._id,
            username: user.username,
            role: user.role
        },
        "MY_SECRET_KEY",
        { expiresIn: "1d" }
    )

    const response = NextResponse.json({
        message: "Login success"
    })

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24
    })

    return response

    // if (user.role === "admin") {
    //     return Response.json({
    //         message: "Admin login successfully",
    //         userId: user._id,
    //         username: user.username,
    //         role: user.role
    //     })
    // }

    // return Response.json({
    //     message: "User login success",
    //     userId: user._id,
    //     username: user.username,
    //     role: user.role
    // })
}


export async function GET() {

    const cookiesStore = await cookies()
    
    const token = cookiesStore.get("token")?.value

    if (!token) {
        return Response.json({ message: "Found" }, { status: 401 })
    }

    const decode = jwt.verify(token, "MY_SECRET_KEY")

    return Response.json(decode)
}