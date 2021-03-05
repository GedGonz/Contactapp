import { config } from 'dotenv'

config();
export default {
    mongodbURL: process.env.MONGODB_URL || 'mongodb://localhost/Contactdb',
    cloudinaryNAME: process.env.CLOUDINARY_NAME,
    cloudinaryAPI_KEY: process.env.CLOUDINARY_API_KEY,
    cloudinaryAPI_SECRET: process.env.CLOUDINARY_API_SECRET,
}