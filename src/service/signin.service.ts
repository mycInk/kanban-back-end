import { Provide } from '@midwayjs/core';
import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const client = new MongoClient(uri);
@Provide()
export class SignInService {
  signinService = async data => {
    const dbName = 'WebProject';
    const collectionName = 'UserInfo';
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const file = {
        Account: data.Account,
        Password: data.Password,
      };
      const result = await collection.findOne(file);
      console.log(result);
      return result;
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  };
}
