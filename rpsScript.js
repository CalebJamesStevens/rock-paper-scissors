const rpsArray = [0, 1, 2];
let CPUChoice = rpsArray[~~(Math.random() * rpsArray.length)];
let playerChoice;

console.log(CPUChoice);

function compareChoices() {
    if (playerChoice == CPUChoice) {
        console.log('tie');
    } else {
        console.log('not a tie');
        switch(playerChoice) {
            case "0":
                console.log("This works");
                if (CPUChoice == 1) {
                    console.log('You lost!');
                }
                if (CPUChoice == 2) {
                    console.log('You won!');
                }
                break;
            case "1":
                if (CPUChoice == 2) {
                    console.log('You lost!');
                }
                if (CPUChoice == 0) {
                    console.log('You won!');
                }
                break;
            case "2":
                if (CPUChoice == 0) {
                    console.log('You lost!');
                }
                if (CPUChoice == 1) {
                    console.log('You won!');
                }
                break;
        }
    }
}

const weapons = document.querySelectorAll(".rps-icon");



weapons.forEach(rpsicon => {
    rpsicon.addEventListener('click', () => {
        console.log(rpsicon.getAttribute('data-weapon'))
        playerChoice = rpsicon.getAttribute('data-weapon');

        compareChoices();
    });
});

//const choice = prompt("Rock, Paper, or Scissors?").toUpperCase();
