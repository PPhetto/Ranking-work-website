import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Posts";
import { JwtgetPost } from "@/types/Post";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    await connectDB()

    const cookiesStore = await cookies()
    const token = cookiesStore.get("token")?.value

    if (!token) {
        return Response.json({ message: "Unauthorized"}, { status: 401 })
    }

    const decode = jwt.verify(token, "MY_SECRET_KEY") as JwtgetPost

    const body = await req.json()

    const post = await Post.create({
        title: body.title,
        description: body.description,
        image: body.image,
        user: new mongoose.Types.ObjectId(decode.userId)
    })

    return Response.json(post)
}

export async function GET(req: Request) {
    await connectDB()

    const cookiesStore = await cookies()
    const token = cookiesStore.get("token")?.value

    if (!token) {
        return Response.json({ message: "Unauthorized" }, { status: 401 })
    }

    const decode = jwt.verify(token, "MY_SECRET_KEY") as JwtgetPost

    let posts

    if (decode.role === "admin" ) {
        posts = await Post.find()
    } else {
        posts = await Post.find({ user: decode.userId })
    }


    // const { searchParams } = new URL(req.url)
    // const userId = searchParams.get("userId")

    // let posts

    // if (userId) {
    //     posts = await Post.find({ user: userId })
    // } else {
    //     posts = await Post.find()
    // }

    return Response.json({posts,username: decode.username, role: decode.role})
}

export async function DELETE(req: Request) {
    await connectDB()

    const cookiesStore = await cookies()
    const token = cookiesStore.get("token")?.value

    if (!token) {
        return Response.json({ message: "Unauthorized"}, { status: 401 })
    }

    // const decode = jwt.verify(token, "MY_SECRET_KEY") as JwtgetPost

    const body = await req.json()

    const deletePost = await Post.findByIdAndDelete(body._id)

    return Response.json(deletePost)
}

export async function PUT(req: Request) {
    await connectDB()

    const cookiesStore = await cookies()
    const token = cookiesStore.get("token")?.value

    if (!token) {
        return Response.json({ message: "Unauthorized"}, { status: 401 })
    }

    const body = await req.json()

    const editPost = await Post.findByIdAndUpdate(body._id,{
        title: body.title,
        description: body.description,
        image: body.image
    }, {
        new: true
    })

    return Response.json(editPost)
}