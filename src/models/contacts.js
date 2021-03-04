import { model, Schema } from 'mongoose';

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber: {
        type: Number,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        required: true,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true
});

export default model('Contact', ContactSchema)