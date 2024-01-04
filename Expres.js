const express = require("express")
const app = express()

const Port = 3000
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

// app.use((req, res)=>{
//     console.log("We Got a New Request")

// })

app.get("/", (req, res) =>{
    res.send(dataBase)
})

app.listen(Port, ()=>{
    console.log("Listening On Port ", Port)
})