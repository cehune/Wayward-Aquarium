import mongoose from "mongoose";

//create normal datas schema
const postSchema = mongoose.Schema({

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
    
});

//'fish' is the collection in the database
const PostMessage = mongoose.model('fish', postSchema);
export default PostMessage;