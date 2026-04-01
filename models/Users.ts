import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    role: {
        type: String,
    }
}, {
    timestamps:true
});

export default mongoose.models.User || mongoose.model("User", UserSchema)