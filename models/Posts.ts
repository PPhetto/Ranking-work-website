import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
})

export default mongoose.models.Posts || mongoose.model("Post", PostSchema)