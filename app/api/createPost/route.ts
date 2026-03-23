import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Posts";

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const post = await Post.create({
        title: body.title,
        description: body.description,
        image: body.image
    })

    return Response.json(post)
}

export async function GET() {
    await connectDB()

    const  posts = await Post.find()

    return Response.json(posts)
}