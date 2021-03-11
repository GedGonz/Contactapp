import { model, Schema } from "mongoose";


const UserModelSchema = new Schema({

    Username: {
        type: String,
        required: [true, 'username is required'],
        trim: true
    },
    Password: {
        type: String,
        required: [true, 'password is required'],
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('User', UserModelSchema);