import express from "express";
import { client } from "../index.js";
import {ObjectId} from "mongodb";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/getAllqueries", async function(req,res){
    const coursesData = await client.db("zenStudentDashboard").collection("queries").find().toArray();
    res.send(coursesData);
})

export const queriesRouter = router;