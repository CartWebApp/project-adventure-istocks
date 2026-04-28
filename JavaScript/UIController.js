import { data as storyData } from "./data/storyData.js";
import { status } from "./gameLogic.js";

/* Visuals */
const startingScreen = document.querySelector('#startingScreen');

const gameScreen = document.querySelector('#actualGame');
const imageVisual = document.querySelector('#mainVisual');

/* Interactables */
const startGameButton = document.querySelector('#startGame');

const dialogueBox = document.querySelector('#dialogueBox')
const dialogue = document.querySelector('#dialogueBox #dialogue');
const speakerTag = document.querySelector('#speakerTag');
const nextBtn = document.querySelector("#next");
const optionsRow = document.querySelector('#optionsRow');

const inventorySection = document.querySelector('#inventorySection');

const inventoryBtn = document.querySelector('#inventoryButton')

const hearts = document.querySelectorAll(".heart");

/* Variables */
let currentEncounter = storyData.find(object => object.id = "Intro");
let currentSceneIndex = 0;
let lastEncounter = undefined;
let lastOptionScene = undefined;

let inventoryEnabled = false;

// Export to gameLogic.js
export { currentEncounter, currentSceneIndex, lastEncounter, lastOptionScene }

/* Functions */
function beginGame(tempDisableVar) {
    startingScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    if (tempDisableVar = "3784NT") {
        initiateScene();
    }
}

function nextEncounter(encounterID) {
    lastEncounter = currentEncounter
    // Set next encounter
    currentEncounter = storyData.find(object => object.id === encounterID)
    currentSceneIndex = 0
    nextBtn.classList.remove("hidden")

    /* Clear options */
    optionsRow.replaceChildren()

    initiateScene()
}

function initiateScene() {
    const currentScene = currentEncounter.scenes[currentSceneIndex]
    // Fire to gameLogic.js to begin mechanics evaluation: see gameLogic.js for that code
    window.dispatchEvent(new CustomEvent("evaluateScene", { detail: currentScene }))

    // Do all of this only if there's actual text (some mechanics scenes do not have text)
    if (currentScene.text) {
        // Hide next button if options are about to appear
        const options = currentScene.options;
        if (!options) {
            nextBtn.classList.remove("hidden")
        } else {
            nextBtn.classList.add("hidden")
        }

        /* Loads the image and text of the next scene */
        imageVisual.src = currentScene.image || imageVisual.src; // Keep the current image if one is not provided to switch to
        speakerTag.textContent = currentScene.speaker;

        const loadOptions = () => {
            // If there are options, show the options
            if (options) {
                lastOptionScene = currentScene
                nextBtn.classList.add("hidden");

                for (const option of options) {
                    const newLi = document.createElement('li');
                    const newP = document.createElement('p');

                    newP.textContent = option.text;
                    newLi.setAttribute("id", option.text)

                    newLi.appendChild(newP);
                    optionsRow.appendChild(newLi);

                    const clickedEvent = () => {
                        // Load the next full encounter
                        nextEncounter(option.leadsTo);
                        // Fire to gameLogic.js
                        window.dispatchEvent(new CustomEvent("evaluateScene", { detail: option }));
                    }

                    // If option needs an item, only allow the option to be clicked if you have the item
                    if (option.useItem) {
                        if (status.Inventory[option.useItem]) {
                            newLi.addEventListener("click", clickedEvent, { once: true });
                        } else {
                            newLi.style.opacity = 0.5;
                        }
                        // Let the option be regularly clickable otherwise
                    } else {
                        newLi.addEventListener("click", clickedEvent, { once: true });
                    }
                }
            }
        }

        // Rolling text
        const sceneText = currentScene.text;
        const maxChars = sceneText.length;
        let index = 0;

        // Skip the rolling dialogue if tap anywhere on the screen
        const skipDialogue = () => {
            if (!inventoryEnabled) {
                dialogue.textContent = sceneText;
                index = maxChars;
            }
        };
        // Make nextBtn skip dialogue instead of going to the next scene
        nextBtn.addEventListener("click", skipDialogue, { once: true });
        nextBtn.removeEventListener("click", nextScene)

        const iterateACharacter = () => {
            if (index < maxChars) {
                const textSection = sceneText.slice(0, index + 1);
                dialogue.textContent = textSection;
                index++

                // Recursive: Repeat the function after the given time (in ms)
                const character = sceneText[index - 2]; // For some reason, the current index is offset by 2?
                let waitTime = 25;
                if (character === "." || character === "?" || character === "!") {
                    waitTime = 300;
                }
                setTimeout(iterateACharacter, waitTime);
            } else {
                // When text finishes loading
                // Make nextBtn go to next scene again
                nextBtn.removeEventListener("click", skipDialogue)
                nextBtn.addEventListener("click", nextScene)

                if (currentScene.autoskip) {
                    // Autoskips the dialogue the moment it finishes rendering if autoskip
                    nextScene()
                }

                loadOptions()
            }
        }
        iterateACharacter();
    }
}

function nextScene() {
    if (!inventoryEnabled) {
        const currentScene = currentEncounter.scenes[currentSceneIndex]
        if (currentScene.leadsTo) {
            nextEncounter(currentScene.leadsTo);
        } else {
            currentSceneIndex += 1;
        }
        initiateScene();
    }
}

/* Mechanic-related Functions */
function toggleInventory() {
    if (!inventoryEnabled) {
        dialogueBox.classList.add("hidden");
        inventorySection.classList.remove("hidden");
        inventoryEnabled = true;
    } else {
        dialogueBox.classList.remove("hidden");
        inventorySection.classList.add("hidden");
        inventoryEnabled = false;
    }
}

/* Event Listeners */
nextBtn.addEventListener("click", nextScene);
startGameButton.addEventListener("click", beginGame);
inventoryBtn.addEventListener("click", toggleInventory);
// Fired from gameLogic.js
window.addEventListener("nextEncounter", (e) => {
    nextEncounter(e.detail)
})





// Temp easy scene navigate for devs // Remember to delete in html too
const navSceneInput = document.querySelector("#sceneNavigate")
const navigateSceneButton = document.querySelector("#submitSceneNavigate")
navigateSceneButton.addEventListener("click", () => {
    const sceneID = navSceneInput.value;
    let currentEncounter = storyData.find(object => object.id = "Intro");
    if (currentEncounter) {
        beginGame("3784NT");
        nextEncounter(sceneID);
    }
})