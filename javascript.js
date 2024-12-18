console.log("Hello World")

function getComputerChoice() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        return "rock"
    } else if (choice == 2){
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())