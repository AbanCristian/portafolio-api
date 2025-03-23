import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_SV,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true
});

export { cloudinary };
