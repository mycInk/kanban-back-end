import { Provide } from '@midwayjs/core';
import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const client = new MongoClient(uri);
const dbName = 'WebProject';
const collectionName = 'ProjectList';
@Provide()
export class ProjectService {
  getProjectList = async () => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.find({}).project({
        _id: 0,
        ProjectID: 1,
        ProjectName: 1,
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
  addProject = async project => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.insertOne(project);
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
  removeProject = async project => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.deleteOne(project);
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
  getProjectInfo = async project => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.findOne(project);
      console.log(result);
      console.log('获取完成');
      return result;
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  };
  editProjectName = async project => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.updateOne(
        { ProjectID: project.ProjectID },
        { $set: { ProjectName: project.ProjectName } }
      );
      console.log(result);
      console.log('修改完成');
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
