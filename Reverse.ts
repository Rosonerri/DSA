console.clear()
interface iData{
    id: number
    Names: string
    Stack: String
    Age: number
}
const arrRev = [
    {
        id: 1,
        Name: "Peter",
        Stack: "Front-End",
        Age: 24
    },
    {
        id: 2,
        Name: "Maxwell",
        Stack: "Dev-Ops",
        Age: 22
    },
    {
        id: 3,
        Name: "Samuel",
        Stack: "Project-Manager",
        Age: 23
    },
    {
        id: 4,
        Name: "Ahmed",
        Stack: "Back-end",
        Age: 19
    },
]
// //Reverse Array of object 
// let Reverse = arrRev.reverse();
// console.log(Reverse)

//Reverse Only the Names
let OnlyNames = arrRev.map((el)=>{
    return el.Name
})
console.log(OnlyNames.reverse())

//Reverse Only The Id
let OnlyId = arrRev.map((el)=>{
return el.id
})
console.log(OnlyId.reverse())

//reverse Only the Stack
const OnlyStack = arrRev.map((el)=>{
    return el.Stack
})
console.log(OnlyStack.reverse())

//Reverse Only Age

const OnlyAge =  arrRev.map((el)=>{
    return el.Age
})
console.log(OnlyAge.reverse())

console.time("Start")
console.timeEnd("Start")




console.time("OnlyNames")
console.log(OnlyNames)
console.timeEnd("OnlyNames")

console.time("OnlyId")
console.log(OnlyId)
console.timeEnd("OnlyId")

console.time("OnlyStack")
console.log(OnlyStack)
console.timeEnd("OnlyStack")

console.time("OnlyAge")
console.log(OnlyAge)
console.timeEnd("OnlyAge")