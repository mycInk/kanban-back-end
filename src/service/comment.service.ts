import { Provide } from '@midwayjs/core';
import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const client = new MongoClient(uri);
const dbName = 'WebProject';
const collectionName = 'CommentList';
@Provide()
export class CommentService {
  getCommentList = async MissionID => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.find(MissionID).project({
        MissionID: 1,
        Commenter: 1,
        CommenterID: 1,
        Content: 1,
        CommentID: 1,
        Date: 1,
        _id: 0,
      });
      const resultArray = [];
      for await (const doc of result) {
        resultArray.push(doc);
      }
      console.log('加载完成');
      return resultArray;
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  };
  addComment = async CommentInfo => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.insertOne(CommentInfo);
      console.log(result);
      console.log('添加完成');
      return result;
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  };
  removeComment = async CommentID => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.deleteOne(CommentID);
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
  };
}
