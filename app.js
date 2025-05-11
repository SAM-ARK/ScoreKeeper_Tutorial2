const p1Button =  document.querySelector('#p1btn');
const p2Button =  document.querySelector('#p2btn');
const resetButton = document.querySelector('#resetbtn')
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 4;


p1Button.addEventListener('click', function(){

    if(p1Score != winningScore){

    p1Score++;
    console.log(` player one score is ${p1Score}`);
    p1Display.textContent = p1Score;

    }else{
        console.log('Player one is the winnner');
    }
});

p2Button.addEventListener('click', function(){
  
    if(p2Score != winningScore){
    p2Score++;
    console.log(` player one score is ${p2Score}`);
    p2Display.textContent = p2Score;

    }else{
        console.log('Player two is the winnner');
    }
});


resetButton.addEventListener('click', function(){
    console.log("reset");
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
})