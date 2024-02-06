do {
    let number = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    console.log(number);

    do {
        let num1 = parseFloat(prompt("Enter a number between 1 and 100"));
        if (num1 > number) {
            alert("Too high");
        } else if (num1 < number) {
            alert("Too low");
        } else {
            alert("Correct! Congratulations!");
            alert("Number of guesses: " + (guess + 1)); // +1 to include the correct guess
            break; // Exit the inner loop when correct guess is made
        }
        guess++;
    } while (true);

    let playAgain = prompt("Do you want to play again? Y or N");
    if (playAgain.toUpperCase() !== 'Y') {
        alert("Exiting...");
        break;
    }

} while (true);
