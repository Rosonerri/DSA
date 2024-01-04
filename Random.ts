console.clear()
import PromptSync from "prompt-sync";

const prompt = PromptSync();

function GuessNumber(){
  return new Promise ((resolve, reject) =>{
    const compNum: number = Math.floor(Math.random() * 10)
    let Attempt: number = 0

    const Guess = ()=>{
      const UserNum: number = parseInt(prompt("Enter a Number: "))
      if (compNum === UserNum){
        resolve("You Guess Right")
      }else{
        Attempt++
        if (Attempt < 4){
          console.log(`Wrong, You Have ${4 - Attempt} attempt(s) left`)
          Guess()
        }else{
          reject(`Your Guess Is Incorrect. The answer is ${compNum}`)
        }
      }
    }
    Guess()
  }).then((show)=>{
    console.log(show)
  }).catch((error) =>{
    console.log(error)
  })
}
GuessNumber();