import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: {
        title: String,
        url: String,
        description: String,
        status: String,
        tags:[String],
        binomial: String,
        img: String,
        diet: String,
        cuisine_img: String,
        cuisine: String,
        liked: Boolean
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;