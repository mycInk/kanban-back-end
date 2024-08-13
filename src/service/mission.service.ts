import { Provide } from '@midwayjs/core';
import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const client = new MongoClient(uri);
const dbName = 'WebProject';
const collectionName = 'MissionList';
@Provide()
export class MissionService {
  getMissionList = async ProjectID => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection
        .find(ProjectID)
        .project({ MissionID: 1, MissionName: 1, _id: 0 });
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
  editMissionName = async mission => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.updateOne(
        { MissionID: mission.MissionID },
        { $set: { MissionName: mission.MissionName } }
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
  addMission = async mission => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.insertOne(mission);
      console.log(result);
      console.log('添加完成');
    } catch (error) {
      console.log('焯，出错力！');
      console.log(error);
    } finally {
      console.log('......');
      await client.close();
    }
  };
  removeMission = async mission => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.deleteOne(mission);
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
  getMissionInfo = async mission => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const options = {
        projection: {
          _id: 0,
          MissionID: 1,
          MissionName: 1,
          MissionStatus: 1,
          MissionDescription: 1,
        },
      };
      const result = await collection.findOne(mission, options);
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
  editMissionStatus = async mission => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.updateOne(
        { MissionID: mission.MissionID },
        { $set: { MissionStatus: mission.MissionStatus } }
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
  editMissionDescription = async mission => {
    try {
      await client.connect();
      console.log('成功连接到MongoDB');
      const database = client.db(dbName);
      console.log('成功连接到database: ' + dbName);
      const collection = database.collection(collectionName);
      console.log('成功连接到collection: ' + collectionName);
      const result = await collection.updateOne(
        { MissionID: mission.MissionID },
        { $set: { MissionDescription: mission.MissionDescription } }
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
