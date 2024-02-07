let number;
let guess;
let playAgain;
let score=[];

function game(){
     number = Math.floor(Math.random() * 100) + 1;
     guess = 0;
    console.log(number);
}

        function game1(){
        while(true){
        let num1 = parseFloat(prompt("Enter a number between 1 and 100"));
        if (num1 > number) {
            alert("Too high");
        } else if (num1 < number) {
            alert("Too low");
        } else {
            alert("Correct! Congratulations!");
            alert("Number of guesses: " + (guess + 1)); 
            score.push(guess);
            

            break; 
        }
        guess++;
        
        }
    }
    function game2(){
    playAgain = prompt("Do you want to play again? Y or N");
    if (playAgain.toUpperCase() !== 'Y') {
        alert("Exiting...");
        alert("score"+score);
        
        return 0;
    
        
        
    }
    else{
        game();
        game1();
        game2();
    }
}
  
game();
    game1();
    game2();
  

