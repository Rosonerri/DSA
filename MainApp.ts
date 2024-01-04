import { Application, Request, Response } from "express";
import { statusCode } from "./Utils/statusCode";
import {v4 as uuid} from "uuid"
import moment from "moment";
import fs from "fs"
import path from "path"

interface iData {
    name: string,
    id: string
    time: string
    course: string,
}

let dataset:Array<iData> = [
    {
     "id": "3002d2d8-2509-4470-ac4d-090e216cc2cf",
     "name": "Ayomide",
     "course": "JAva",
     "time": "1:06:33 PM"
    },
    {
    "id": "77c36722-c753-4501-b720-6b2fefa8f01a",
    "name": "Kehide",
    "course": "Html",
    "time": "1:08:27 PM"
   },
   {
    "id": "1e05e04a-0f2e-4ed2-96b1-499484f0d4a2",
    "name": "Habeeb",
    "course": "Frontend",
    "time": "1:09:09 PM"
   },
   {
   "id": "dbd4a0bb-8f43-43cb-9139-2ee8a6bfcdeb",
   "name": "Wisdom",
   "course": "Backend",
   "time": "1:09:39 PM"
   },
   {
   "id": "eb4250cd-47bd-4ae8-8af7-06fee5b5819a",
   "name": "Joan",
   "course": "Mongo DB",
   "time": "1:20:38 PM"
   }
];

// console.log(dataset[0].id);

const mainApp = (app:Application) => {
app.get("/", (req: Request, res: Response) => {
    try{
        fs.writeFile(path.join(__dirname, "Data","Data.json"), JSON.stringify(dataset), (error)=>{
            console.log(error);
        })
        return res.status(statusCode.Ok).json({
            message: "Data Gotten Succesfully",
            dataset
        });
    }catch(error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error"
        })
    }
})
app.get("/api/v1/get-one-data/:userID", (req: Request, res: Response) => {
    try{
        const {name, course} = req.body;
        const {userID} = req.params

        const user = dataset.find((el: iData) => {
            return el.id === userID
        })
        return res.status(statusCode.Ok).json({
            message: "Reading from dataset",
            data: user
        });
    }catch(error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error reading from dataset"
        })
    }

})

app.post("/api/v1/create-data", (req: Request, res: Response) => {
    try{
        const {name, course} = req.body

        const data: iData = {
            id: uuid(),
            name,
            course,
            time: moment(new Date().getTime()).format("LTS")
        }
        dataset.push(data)
        return res.status(statusCode.Ok).json({
            message: "Another Data Created Succesfully",
            data: data,
        });
    }catch(error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error reading from dataset"
        })
    }
})

app.patch("/api/v1/update-one-data/:userID", (req: Request, res: Response) => {
    try{
        const {course} = req.body;
        const {userID} = req.params

        const user: iData | any = dataset.find((el: iData) => {
            return el.id === userID
        })
        user.course = course
      
        return res.status(statusCode.Ok).json({
            message: "Updating from dataset",
            data: user,
        });
    }catch(error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error reading from dataset"
        })
    }
})
app.delete("/api/v1/delete-one-data/:userID", (req: Request, res: Response) => {
    try{
        const {course} = req.body;
        const {userID} = req.params

        const user: iData | any = dataset.filter((el: iData) => {
            return el.id === userID
        })
        const newdatabase: iData | any = dataset.filter((el: iData) => {
            return el.id === userID
        })
        dataset = newdatabase
      
        return res.status(statusCode.Ok).json({
           message:`${user.name} has been deleted succesfully`,
           data: user,
        });
    }catch(error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error reading from dataset"
        })
    }
})
}
export default mainApp;