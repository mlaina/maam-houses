import axios from 'axios';
import React from 'react';
import S3FileUpload from 'react-s3/lib/ReactS3';

const {API_URL} = process.env;
const {KEYIDAWS} = process.env;
const {SECRETAWS} = process.env;
const {BUCKETNAME} = process.env;
const {REGION} = process.env;


export async function upload(file, dir) {
  const config = {
    bucketName: BUCKETNAME,
    dirName: dir,
    region: REGION,
    accessKeyId: KEYIDAWS,
    secretAccessKey: SECRETAWS
  };
  const data = S3FileUpload.uploadFile(file, config);
  console.log(data);
  return data;
}
