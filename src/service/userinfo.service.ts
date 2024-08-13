import { Provide } from '@midwayjs/core';
import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const client = new MongoClient(uri);
const dbName = 'WebProject';
const collectionName = 'UserInfo';
@Provide()
export class UserInfoService {
  async changeName(name: string, uid: string) {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      console.log(name);
      console.log(uid);
      const result = await collection.updateOne(
        {
          uid: uid,
        },
        {
          $set: {
            Name: name,
          },
        }
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  }
  async changePassword(password: string, uid: string) {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.updateOne(
        {
          uid: uid,
        },
        {
          $set: {
            Password: password,
          },
        }
      );
      console.log(result);
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
