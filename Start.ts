console.clear()
import express, {Application, Request, Response } from "express";
import MainApp from "./MainApp";


const port:number = 4000

const app: Application = express()
app.use(express.json())



MainApp(app)
const server = app.listen(port, () => {
    console.log("server is now running on port", port);
    
})

process.on("uncaughtException", (error:Error) => {
    console.log("uncaughtException:", error);

    process.exit(1);
})
process.on("rejectionHandled", (reason: any) => {
    console.log("rejectionHandled: ", reason);
    
    server.close(() => {
        process.exit(1)
    })
})