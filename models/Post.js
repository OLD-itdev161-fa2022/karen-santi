import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    user: {
        type: 'ObjectId',
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('post', PostSchema);

// Without exporting you will not be able to import to other models
export default Post;