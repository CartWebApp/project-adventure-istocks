const startingScreen = document.querySelector('#startingScreen')
const gameScreen = document.querySelector('#actualGame')

const startGameButton = document.querySelector('#startGame')

/* Functions */
function beginGame() {
    startingScreen.classList.add('hidden')
    gameScreen.classList.remove('hidden')
}

/* Classes */
class Item {
    constructor(name,image) {
        this.name = name
        this.image = image
    }
}

startGameButton.addEventListener("click", beginGame)