console.clear()
import moment from "moment"
import PromptSync from "prompt-sync"
import PromtSync from "prompt-sync"
const prompt = PromptSync();
// console.log("Bring in cup 1")
// console.log("Bring in cup 2")
// console.log("Bring in cup 3")
// console.log("Bring in cup 4")
// console.log("Bring in cup 5")

// //Comment code 

// function cup(guessTime: number){
//     console.log("This function brings cup!")

//     let time  = new Date().getTime()
//     let delayTime = time + guessTime;

//     while(new Date().getTime() < delayTime){
//         // console.log("Start processing")
//     };
//     console.log()
//     console.log("Proceess Excecuted at", moment(time).format("LTS"))
//     console.log("End Process excecuted at: ", moment(delayTime).format("LTS"));
//     console.log("This Whole Process Took ", (delayTime - time)/1000, "Seconds");
// }

// const check = (cb: any): void=>{
//     setTimeout(()=>{
//         return cb("Data")
//     }, 0)
// }

// console.log(
//     check((res:any)=>{
//        console.log(res) 
//     })
// );
// let name: string = "Peter";

// check(()=>{
//     console.log("resolve check1")
//     check(()=>{
//     console.log("resolve check1")
//         check(()=>{
//     console.log("resolve check1")
//         })
//     })
// })

//PROMISE
// const promise = new Promise((resolve, reject)=>{
// if(false){
//     resolve("A Promise Kept")
// }else{
//     reject("A promise Failed")
// }
// })
// .then((res)=>{
// // console.log(res);
// console.log(`${res}with ${myName}`);
// })
// .catch((err) =>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Clean up code")
// });
// let myName:string = "Ajayi";


const promise = new Promise ((resolve, reject)=>{
const numb: number = Math.floor(Math.random() * 10);

const guessNumber: number = parseInt(prompt("what's Your Number: "));
if (guessNumber === numb){
resolve("A Promise Kept")
}else{
reject("A Promise Failed")
}
});



