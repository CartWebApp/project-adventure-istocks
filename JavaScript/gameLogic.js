import { data as storyData } from "./data/storyData.js";
import { currentEncounter, currentSceneIndex } from "./UIController.js";

const healthbar = document.querySelector("#healthbar");
const hearts = document.querySelectorAll(".heart");

const status = {
    Health: 5,
    MaxHealth: 5,
    Inventory: {

    },
    ImportantDecisions: {

    }
};

/* Classes */
class Item {
    constructor(name, image) {
        this.name = name
        this.image = image
    }
};

// Evaluate mechanics per scene, have they exist at least
window.addEventListener("evaluateScene", () => {
    const evaluateMechanics = (sceneObject) => {
        // Checks for mechanics - fallback on nothings if there aren't
        const damage = sceneObject.damage || 0;
        const heal = sceneObject.heal || 0;
        const getItem = sceneObject.getItem;
        const useItem = sceneObject.useItem;
        const puzzle = sceneObject.puzzle;
        const gameOver = sceneObject.gameOver;
        const endGame = sceneObject.endGame;

        status.Health -= damage
        if (status.Health < status.MaxHealth) { status.Health += heal }
        console.log(status)

        if (gameOver) {
            // gameOver == message to display
            // Make a black screen that shows the gameOver text, and a retry button
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
    }

    // See if the current scene has any mechanics
    const currentScene = currentEncounter.scenes[currentSceneIndex];
    evaluateMechanics(currentScene)

    // See if the options activate any mechanics
    if (currentScene.options) {
        for (const option of currentScene.options) {
            evaluateMechanics(option)
        }
    }
});



// Put Data for Hearts here, must adapt based on the different probabilities throuhgout the story.
// Have a default set where it's 5 hearts in the beginning of the user journey

