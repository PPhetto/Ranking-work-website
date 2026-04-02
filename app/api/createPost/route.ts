import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Posts";
import mongoose from "mongoose";

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const post = await Post.create({
        title: body.title,
        description: body.description,
        image: body.image,
        user: new mongoose.Types.ObjectId(body.user)
    })

    return Response.json(post)
}

export async function GET(req: Request) {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")

    let posts

    if (userId) {
        posts = await Post.find({ user: userId })
    } else {
        posts = await Post.find()
    }

    // const  posts = await Post.find({ user: userId })

    return Response.json(posts)
}

export async function DELETE(req: Request) {
    await connectDB()

    const body = await req.json()

    const deletePost = await Post.findByIdAndDelete(body._id)

    return Response.json(deletePost)
}

export async function PUT(req: Request) {
    await connectDB()

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