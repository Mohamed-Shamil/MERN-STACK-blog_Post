
import { Request, Response } from 'express';
import multer from 'multer';
import crypto from 'crypto';
import sharp from 'sharp';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3, bucket } from '../config/s3';

// Define a custom type for the Request object with the 'file' property
interface MulterRequest extends Request {
  file: Express.Multer.File;
}

// MULTER SETUP
export const multerSetup = () => {
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage
     ,limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
  
  
  return {upload };
};

export const imageUpload = async (req: MulterRequest, res: Response) => {
    
    
    
    const handleUpload = async (req: MulterRequest, res: Response) => {
        const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');
        
        const file = req.file;
        
        // Resize image
        const buffer = await sharp(file.buffer).toBuffer();
        // .resize({ height: 1920, width: 1080, fit: "contain" })
    const imageName = randomImageName();


    const params = {
      Bucket: bucket.bucketName,
      Key: imageName,
      Body: buffer,
      ContentType: file.mimetype,
    };
    
    

    const command = new PutObjectCommand(params);
    await s3.send(command);

    return imageName;
  };

  return handleUpload;
};
