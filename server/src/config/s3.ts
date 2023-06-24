import { Request, Response } from "express";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";

export const bucket = {
  region: process.env.AWS_BUCKET_REGION,
  bucketName: process.env.S3_BUCKET,
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

export const s3 = new S3Client({
  credentials: {
    accessKeyId: bucket.accessKey!,
    secretAccessKey: bucket.secretAccessKey!,
  },
  region: bucket.region!,
});

export const post = (response: any) => {
  const imageUrl = response.map(async (post: any) => {
    // const getObjectParams = [
    //   {
    //     Bucket: bucket.bucketName,
    //     Key: post.image,
    //   },
    //   {
    //     Bucket: bucket.bucketName,
    //     Key: post.authorImage,
    //   },
    // ];

    const getObjectParams = {
      Bucket: bucket.bucketName,
      Key: post.image,
    };

    // const commands = getObjectParams.map((params) => new GetObjectCommand(params));
    // const signedUrls = await Promise.all(commands.map((command) => getSignedUrl(s3, command, { expiresIn: 3600 })));

    // post.imageUrl = signedUrls[0]; // URL for image
    // post.authorImageUrl = signedUrls[1]; // URL for authorImage

    // return post;

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    post.imageUrl = url;
    const posts = await { ...post, imageUrl: url };
    return posts;
  });
  return imageUrl;
};

// export const post = async (response: any) => {
//   const imageUrl = await Promise.all(
//     response.map(async (post: any) => {
//       const getObjectParams = [
//         {
//           Bucket: bucket.bucketName,
//           Key: post.image,
//         },
//         {
//           Bucket: bucket.bucketName,
//           Key: post.authorImage,
//         },
//       ];

//       const commands = getObjectParams.map((params) => new GetObjectCommand(params));
//       const signedUrls = await Promise.all(commands.map((command) => getSignedUrl(s3, command, { expiresIn: 3600 })));

//       post.imageUrl = signedUrls[0]; // URL for image
//       post.authorImageUrl = signedUrls[1]; // URL for authorImage

//       return post;
//     })
//   );

//   return imageUrl;
// };

export const getOneImage = async (response: any) => {
  const getObjectParams = {
    Bucket: bucket.bucketName,
    Key: response[0].image,
  };

  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

  response[0].imageUrl = url;

  return response;
};

export const getProfileImage = async (response: any) => {
 
  const getObjectParams = {
    Bucket: bucket.bucketName,
    Key: response.image,
  };
  
  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
  

  response.image = url;

  return response;
};

export const deletePost = async (response: any) => {
  try {
    if (!response.image) {
      throw new Error("Image URL not provided");
    }
    const params = {
      Bucket: bucket.bucketName,
      Key: response.image,
    };

    const command = new DeleteObjectCommand(params);
    await s3.send(command);

    return response;
  } catch (error) {
    console.error("An error occurred during post deletion:", error);
  }
};
