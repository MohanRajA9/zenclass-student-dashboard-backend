import { client } from "../index.js";
import {ObjectId} from "mongodb";

export async function getUserByName(email) {
    return await client.db("zenStudentDashboard").collection("users").findOne({email : email});
  }

export async function createUSer(data) {
return await client.db("zenStudentDashboard").collection("users").insertOne(data);
}

export async function createQuery(data) {
  return await client.db("zenStudentDashboard").collection("queries").insertOne(data);
  }

  // export async function deleteQuery(id) {
  //   return client.db("firstDatabase").collection("products").deleteOne({_id: ObjectId(id)});
  // }