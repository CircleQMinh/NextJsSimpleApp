import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), "src/pages/api/json/msg.json");

export default async function handler(req, res) {
    const { name, email, msg } = req.query; 
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  }

