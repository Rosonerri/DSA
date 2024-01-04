import express, { Application, Request, Response } from "express";

const Port = 3400;

const dataBase = [
    {
        id: 1,
        name: "Daniel",
        email: "Daniel@email.com"
    },

    {
        id: 2,
        name: "Maxwell",
        email: "Maxwell@email.com"
    },
    {
        id: 3,
        name: "Peter",
        email: "Peter@email.com"
    },
]

const app:Application = express()
 app.use(express.json())

 app.get("/", (req:Request, res:Response)=>{
    res.send("My First Server")
 })
 //Get
 app.get("/get-all", (req:Request, res:Response) =>{
    res.send(dataBase)
 })
//Post
app.post("/post", (req:Request, res:Response) =>{
    let newUser = req.body;
    dataBase.push(newUser)
    res.json(dataBase)
})
 app.listen(Port, ()=>{
    console.log("Server Listening to port on", Port)
 })