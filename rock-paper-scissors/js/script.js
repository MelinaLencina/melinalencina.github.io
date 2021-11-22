function getUserChoice() {
        const userInput = document.form.choice.value;
        if (userInput === 'piedra' || userInput === 'papel' || userInput === 'tijeras' || userInput === 'tijera') {
            return userInput;
        } else {
            alert(`Error! ${userInput} no es una opción válida.`);
        }
    }

function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0: return 'piedra';
            case 1: return 'papel';
            case 2: return 'tijeras';
        }
    }


    let userChoice = getUserChoice();
    const computerChoice = getComputerChoice();


    function determineWinner() {
        let resultado = [];
        if (userChoice === computerChoice) {
            resultado.push('Empate!');
        }
        if (userChoice === 'piedra') {
            if (computerChoice === 'papel') {
                resultado.push('Oh no! Perdiste!');
            } else {
                resultado.push('Yay! Ganaste!');
            }
        }
        if (userChoice === 'papel') {
            if (computerChoice === 'tijeras' || computerChoice === 'piedra') {
                resultado.push('Oh no! Perdiste!');
            } else {
                resultado.push('Yay! Ganaste!');
            }
        }
        if (userChoice === 'tijeras' || userChoice === 'tijera') {
            if (computerChoice === 'piedra' || computerChoice === 'papel') {
                resultado.push('Oh no! Perdiste!');
            } else {
                resultado.push('Yay! Ganaste!');
            }
        }

        alert(`Vos: ${userChoice}.`);
        alert(`PC: ${computerChoice}.`);
        alert(resultado);
}
    
