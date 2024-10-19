/*
pseudocode
1. make function that returns random number; 0,1 or 2
2. use if function so that 0=rock 1=paper 2=scissors
3. use promt to get user input/
4. user can input only rock paper or scissors else say wrong input
5. make user input case sensitive
6. write a logic for game (rock beats scissors etc.)
7. make it 5 round game, with a message after each round 
containing temporary score
8. after 5 rounds return to the beggining and start new game
*/

console.log("Hello world tonys here");   


function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

if (getComputerChoice() == 0){
    console.log("Rock");
    
} else if (getComputerChoice() == 1){
    console.log("Paper");
} else {
    console.log("Scissors");
}

