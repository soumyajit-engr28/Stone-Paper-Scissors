let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Won!");
        msg.innerText="You win!";
    }
    else{
        console.log("You Lost!");
        msg.innerText="You Lost";
    }
};
const genCompChoice=()=>{
    const options=["stone","paper","Scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}
const playGame=(userChoice)=>{
    console.log("User Choice :",userChoice);
    // generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp Choice :",compChoice);
    if(userChoice===compChoice){
        console.log("Match is draw");
         msg.innerText="Match is Draw.Play Again.";
    }
    else{
         let userWin = true;
        if(userChoice==="stone"){
            userWin = (compChoice==="paper")?false:true;
        }
        else if(userChoice==="paper"){
            userWin=(compChoice==="stone")?true:false;
        }
        else{
            userWin=(compChoice==="stone")?false:true;
        }
         showWinner(userWin);
    }
   

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})