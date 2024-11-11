// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GenerateRandomPost } from "@/utils/generate";
import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), "src/pages/api/json/data.json");
export default function handler(req, res) {
    const { page, pageSize } = req.query; 
    var data = []
    for (let index = 0; index < (pageSize ?? 10); index++) {
      const element = GenerateRandomPost()
      data.push(element)
     // await SaveToMockData(element)
    }
    var result = {
      TotalPages: 10,
      Page:page ?? 1,
      PageSzie:pageSize ?? 10,
      Data: data,
    }

    res.status(200).json(result);
  }
  
export async function SaveToMockData(newData) {
  const jsonData = await fsPromises.readFile(dataFilePath);
  const objectData = JSON.parse(jsonData);

  objectData.Data.push(newData);
  const updatedData = JSON.stringify(objectData);
  await fsPromises.writeFile(dataFilePath, updatedData);

}
