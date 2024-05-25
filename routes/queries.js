import express from "express";
import { client } from "../index.js";
import {ObjectId} from "mongodb";
import { auth } from "../middleware/auth.js";
import { createQuery, deleteQuery } from "./helper.js";

const router = express.Router();

router.get("/getAllqueries", async function(req,res){
    const coursesData = await client.db("zenStudentDashboard").collection("queries").find().toArray();
    res.send(coursesData);
})

router.post("/postQuery",async function (req,res){
    const {heading,description,status,time} = req.body[0];
    console.log(req.body);
    console.log(heading,description,status,time);
    const result = await createQuery({heading,description,status,time});
    res.send(result);
})

router.delete("/:id", async function (req, res) {
    const {id} = req.params
    const result = await deleteQuery(id);
    res.send(result);
} )

export const queriesRouter = router;