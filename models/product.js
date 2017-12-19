import mongoose from 'mongoose';

const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    price: Number,
    likes: {
        type: Number,
        default: 0
    } 
})

export default mongoose.model('Product', Product)