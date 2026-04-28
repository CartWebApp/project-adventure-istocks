import { data as storyData } from "./data/storyData.js";
import { currentEncounter, currentSceneIndex, lastEncounter, lastOptionScene } from './UIController.js'

const optionsRow = document.querySelector('#optionsRow');

const inventory = document.querySelector('#inventory');
const healthbar = document.querySelector("#healthbar");
const hearts = document.querySelectorAll(".heart img");

const gameOverPopup = document.querySelector("#gameOverPopup");
const gameOverMessage = document.querySelector('#gameOverMessage');
const gameOverRetry = document.querySelector("#retryChoice");
const gameOverRestart = document.querySelector("#restartGame");

const status = {
    Health: 5,
    MaxHealth: 5,
    Inventory: {},
    ImportantDecisions: [],
};

export { status }

/* Classes */
class Item {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
};


/* Functions */
function modifyHealth(change) {
    status.Health += change;

    // Reset health bar
    for (const heartImg of hearts) {
        heartImg.src = "images/Mechanics/unfilledHeart.svg";
    }

    // Fill in each heart you have left
    for (let i = 0; i < status.Health; i++) {
        const heartImg = hearts[i];
        heartImg.src = "images/Mechanics/filledHeart.svg";
    }

    if (status.Health <= 0) {
        showGameOver("You lost all your health...")
    }
}

function addToInventory(itemName) {
    let imageUrl = `images/Mechanics/ItemImages/${itemName}.svg`;
    status.Inventory[itemName] = new Item(itemName, imageUrl);

    const li = document.createElement('li');
    const img = document.createElement('img');
    const text = document.createElement('p');

    li.classList.add(itemName)
    img.src = imageUrl;
    text.textContent = itemName;

    li.appendChild(img);
    li.appendChild(text);
    inventory.appendChild(li);
}
function deleteFromInventory(itemName) {
    delete status.Inventory[itemName]

    const foundItem = inventory.querySelector(`.${itemName}`)
    foundItem.remove()
}

function showGameOver(message) {
    gameOverPopup.showModal();
    gameOverMessage.textContent = message;

    // gameOver == message to display
    // Make a black screen that shows the gameOver text, and a retry button
    gameOverRetry.addEventListener("click", () => {
        gameOverPopup.close();

        window.dispatchEvent(new CustomEvent("nextEncounter", { detail: lastEncounter.id }));
    }, { once: true });

    gameOverRestart.addEventListener("click", () => {
        gameOverPopup.close();

        window.dispatchEvent(new CustomEvent("nextEncounter", { detail: "Intro" }));
    }, { once: true });
}

// Evaluate mechanics per scene, have they exist at least
window.addEventListener("evaluateScene", (e) => {
    const evaluateMechanics = (sceneObject) => {
        // Checks for mechanics - fallback on nothings if there aren't
        const damage = sceneObject.damage || 0;
        const heal = sceneObject.heal || 0;
        const getItem = sceneObject.getItem;
        const useItem = sceneObject.useItem;
        const giveCondition = sceneObject.giveCondition;
        const puzzle = sceneObject.puzzle;
        const gameOver = sceneObject.gameOver;
        const endGame = sceneObject.endGame;

        console.log(status)
        modifyHealth(-damage);
        if (status.Health < status.MaxHealth) { modifyHealth(heal); }

        if (getItem) { addToInventory(getItem); }
        if (useItem) { deleteFromInventory(useItem); }

        if (giveCondition) {
            status.ImportantDecisions.push(giveCondition)
        }

        if (gameOver) {
           showGameOver(gameOver)
        }

        switch (endGame) {
            // Put end screens here, details information about your playthrough
            case "Ending1":

                break;
            case "Ending2":

                break;
            case "Ending3":

                break;
            default:
                // If there isn't an endGame
                break;
        }

        switch (puzzle) {
            case "decipher":

                break;
            case "rockPaperScissors":

                break;
            case "holesAndShapes":
                
                break;
            default:

                break;
        }
    }

    // See if the current scene/option has any mechanics
    const currentScene = e.detail;
    evaluateMechanics(currentScene)
});

