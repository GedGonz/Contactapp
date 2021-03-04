import { model, Schema } from 'mongoose';

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lasname: {
        type: String,
        required: true,
        trim: true
    },
    number: {
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