let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
   {
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText=`you won! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
   
   }
   else{
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText=`you lose! ${compChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor="red";
   }
    
}
const drawGame=()=>{
// console.log("Game is draw");
msg.innerText="Game draw!";
}
const generateCompchoice=()=>{
    let options=["rock","paper","scissors"]
    let randIdx=Math.floor(Math.random()*options.length);/*options.length jo * karwai ha wo basically is length sa aik kam tak random no. generate kara gi*/
    return options[randIdx];
}
const playGame=(userChoice)=>{
// console.log("userChoice=",userChoice);
const compChoice=generateCompchoice();
// console.log("compChoice=",compChoice);

if(userChoice===compChoice)
{
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock")
    {
        if(compChoice==="scissors")
        {
            
           userWin=true;
        }
        else{
            
            userWin=false;        }
    }else if(userChoice=="paper")
    {
        if(compChoice==="rock")
        {
        userWin=true;}
        else{
             
             userWin=false;
        }
    }
    else if(userChoice=="scissors")
    {
        if(compChoice==="rock")
        {
        userWin=false;}
        else{
             
             userWin=true;
        }
        
    }
    showWinner(userWin,userChoice,compChoice);
}

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(`choice was clicked ${userChoice}`);
        playGame(userChoice);
    })
});