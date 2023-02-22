import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: {
        title: String,
        url: String,
        description: String,
        status: String,
        scientific: String,
        health_benefits: String,
        quote: String,
        tags: [String],
        img: String,
        cuisine_img: String,
        liked: Boolean,
        Taste: String,
        Texture: String,
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;