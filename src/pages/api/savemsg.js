import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), "src/pages/api/json/msg.json");

export default function handler(req, res) {
    const { name, email, msg } = req.query; 
    var data = {
        Name: name,
        Email: email,
        Msg: msg
    }
    SaveToMockData(data)

    res.status(200).json(data);
  }

  export async function SaveToMockData(newData) {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
  
    objectData.Data.push(newData);
    const updatedData = JSON.stringify(objectData);
    await fsPromises.writeFile(dataFilePath, updatedData);
  
  }
  