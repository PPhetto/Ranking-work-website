import { connectDB } from "@/lib/mongodb"
import Posts from "@/models/Posts"

export async function GET() {
    await connectDB()
    
    const rank = await Posts.aggregate([
        {
            $group: {
                _id: "$user",
                postcount: { $sum: 1}
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "_id",
                as: "user"
            }
        },
        { $unwind: "$user" },
        {
            $project: {
                username: "$user.username",
                postcount: 1
            }
        },
        {
            $sort: { postcount: -1 }
        }
    ])
    return Response.json(rank)
}