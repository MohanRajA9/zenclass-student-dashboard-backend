import express from "express";
import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";
import { coursesRouter } from "./routes/courses.js";
import cors from "cors";
import { userRouter } from "./routes/users.js";
import { classesRouter } from "./routes/classes.js";
import { tasksRouter } from "./routes/tasks.js";
import { classesData, courseData, queriesData, taskData, } from "./data.js";
import { countRouter } from "./routes/count.js";
import { queriesRouter } from "./routes/queries.js";

const app = express();
dotenv.config(); 
// app.use(cors());
app.use(
        cors({
          origin: "*",
          credentials: true
        })
      );
      
app.use(express.json());

const port = process.env.PORT || 4000;

const mongo_URL = process.env.Mongo_URL;

async function createConnection(){
    const client = new MongoClient(mongo_URL);
    await client.connect();
    // console.log(client);
    console.log("Mongo is connected");
    return client;
}

export const client = await createConnection();

app.get("/", async function(request,response){
    response.send("Hi, Welcome to Capstone...!!!")
})

app.use("/courses",coursesRouter);
app.use("/users",userRouter);
app.use("/classes",classesRouter);
app.use("/tasks",tasksRouter);
app.use("/count",countRouter);
app.use("/queries",queriesRouter);



// await client.db("zenStudentDashboard").collection("courses").insertMany(courseData);
// await client.db("zenStudentDashboard").collection("tasks").insertMany(taskData);
// await client.db("zenStudentDashboard").collection("classes").insertMany(classesData);
// await client.db("zenStudentDashboard").collection("queries").insertMany(queriesData);


app.listen(port,()=>console.log(`App has started in port ${port}`));
