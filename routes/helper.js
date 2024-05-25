import { client } from "../index.js";

export async function getUserByName(email) {
    return await client.db("zenStudentDashboard").collection("users").findOne({email : email});
  }

export async function createUSer(data) {
return await client.db("zenStudentDashboard").collection("users").insertOne(data);
}

export async function createQuery(data) {
  return await client.db("zenStudentDashboard").collection("queries").insertOne(data);
  }