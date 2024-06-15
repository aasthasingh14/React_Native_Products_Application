import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
});

export default model('Item', itemSchema);
