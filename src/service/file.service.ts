import { Provide } from '@midwayjs/core';
import * as fs from 'fs';
import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const client = new MongoClient(uri);
const dbName = 'WebProject';
const collectionName = 'FileStorage';
@Provide()
export class FileService {
  async uploadFile(files, fields) {
    try {
      for (let i = 0; i < files.length; i++) {
        fs.readFile(files[i].data, 'binary', async (err, datastr) => {
          if (err) {
            console.log(err);
            return;
          } else {
            await client.connect();
            console.log('成功连接到MongoDB');
            const database = client.db(dbName);
            console.log('成功连接到database: ' + dbName);
            const collection = database.collection(
              fields.MissionID + collectionName
            );
            console.log(
              '成功连接到collection: ' + fields.MissionID + collectionName
            );
            const result = await collection.insertOne({
              MissionID: fields.MissionID,
              filename: files[i].filename,
              data: datastr,
              date: fields.Date,
            });
            console.log(result);
          }
        });
      }
      console.log('上传完成');
      return;
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  }
  async downloadFile(fileInfo) {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(
        fileInfo.MissionID + collectionName
      );
      console.log(
        '成功连接到collection: ' + fileInfo.MissionID + collectionName
      );
      const result = await collection.findOne(fileInfo);
      console.log(result);
      const filename = result.filename;
      const data = result.data;
      const arr = data.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      console.log('下载完成');
      return {
        data: new File([u8arr], filename, { type: mime }),
        filename: filename,
      };
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  }
  async deleteFile(file) {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(file.ProjectID);
      console.log('成功连接到collection: ' + file.ProjectID);
      const result = await collection.deleteOne(file);
      console.log(result);
      console.log('删除完成');
      return result;
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  }
}
