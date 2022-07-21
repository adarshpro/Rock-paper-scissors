let pScore = 0;
let cScore = 0;

const targetDiv = document.getElementById('content')
const playBtn = document.getElementById('playGame')
const playDiv = document.getElementById('startBtn')
playBtn.onclick = function(){
    if(targetDiv.style.display = 'none'){
        targetDiv.style.display = 'flex';
    } else {
        targetDiv.style.display = 'none';
    }
    playDiv.remove();
}


const options = document.querySelectorAll('.options');
options.forEach((option)=> {
    option.addEventListener('click', function() {
//changing from 'pInput=this.textContent'(fetches text on button) TO 'this.value'(fetches image link)//       
        const pInput = this.value;
        const cOptions = ['Rock','Paper','Scissors']
        const cInput = cOptions[Math.floor(Math.random()*3)]
        
        updateMoves(pInput,cInput);
        compareInputs(pInput,cInput);
        updateScore();
        if (checkWinner()){
            pScore = cScore = 0;
            updateScore();
        }
    });
});

function compareInputs(pInput,cInput){
    const currentMatch = `${pInput} vs ${cInput}`;
   
    //TIE CHECK//
   if (pInput === cInput) {
    document.getElementById("p-move").src = `./assets/${pInput}.svg`;
    document.getElementById("c-move").src = `./assets/${cInput}.svg`;
    document.getElementById('pSelection').textContent = `You selected ${pInput} & computer selected ${cInput}, It's a Tie!`;
    return;
   } 
   //ROCK---if---//
   if (pInput === 'Rock'){
    if(cInput === 'Scissors'){
        document.getElementById("p-move").src = `./assets/${pInput}_green.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}_red.svg`;
        document.getElementById('pSelection').textContent = `You selected ${pInput} & computer selected ${cInput}, You Win!`;
        pScore++;
    } else {
        document.getElementById("p-move").src = `./assets/${pInput}_red.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}_green.svg`;
        document.getElementById('pSelection').textContent = `You selected ${pInput} & computer selected ${cInput}, You Lose!`;
        cScore++;
    }
   }

   //PAPER---else if---//
   else if (pInput === 'Paper'){
    if(cInput === 'Rock'){
        document.getElementById("p-move").src = `./assets/${pInput}_green.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}_red.svg`;
        document.getElementById('pSelection').textContent = `You selected ${pInput} & computer selected ${cInput}, You Win!`;
        pScore++;
    } else {
        document.getElementById("p-move").src = `./assets/${pInput}_red.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}_green.svg`;
        document.getElementById('pSelection').textContent = `You selected ${pInput} & computer selected ${cInput}, You Lose!`;
        cScore++;
    }
   }

   //Scissors--else---//
    else {
    if(cInput === 'Paper'){
        document.getElementById("p-move").src = `./assets/${pInput}_green.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}_red.svg`;
        document.getElementById('pSelection').textContent = `You selected ${pInput} & computer selected ${cInput}, You Win!`;
        pScore++
    } else {
        document.getElementById("p-move").src = `./assets/${pInput}_red.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}_green.svg`;
        document.getElementById('pSelection').textContent = `You selected ${pInput} & computer selected ${cInput}, You Lose!`;
        cScore++;
    }
   }

}

function updateScore(){
    document.getElementById('p-score').textContent = pScore;
    document.getElementById('c-score').textContent = cScore;
}

function updateMoves(pInput, cInput){
    document.getElementById("p-move").src = `./assets/${pInput}.svg`;
    document.getElementById("c-move").src = `./assets/${cInput}.svg`;
  }

//conditional(ternary) operator
function checkWinner(){
    if(pScore === 5 || cScore === 5){
        const winner =
        pScore === 5
        ? "You win the game! Congratulations!"
        
        : "Computer wins the game! Try again next time!";
        //movesDiv.remove()
        document.getElementById('pSelection').textContent = winner
        const movesDiv = document.getElementById('movesDisplay')
        //const playDiv = document.getElementById('startBtn')
        
        return true;
        
    }
   return false;
}
const replayDiv = document.getElementById('replay')
