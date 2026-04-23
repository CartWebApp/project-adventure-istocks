import { data as storyData } from "./data/storyData.js";

/* Visuals */
const startingScreen = document.querySelector('#startingScreen');

const gameScreen = document.querySelector('#actualGame');
const imageVisual = document.querySelector('#mainVisual');

/* Interactables */
const startGameButton = document.querySelector('#startGame');

const dialogue = document.querySelector('#dialogueBox #dialogue');
const speakerTag = document.querySelector('#speakerTag');
const nextBtn = document.querySelector("#next");
const optionsRow = document.querySelector('#optionsRow');

/* Variables */
let currentEncounter = storyData.find(object => object.id = "Intro");
let currentSceneIndex = 0;

/* Functions */
function beginGame() {
    startingScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    initiateScene();
}

function nextEncounter(encounterID) {
    currentEncounter = storyData.find(object => object.id === encounterID)
    currentSceneIndex = 0
    nextBtn.classList.remove("hidden")

    /* Clear options */
    optionsRow.replaceChildren()

    initiateScene()
}

function initiateScene() {
    /* Loads the image and text of the next scene */
    const currentScene = currentEncounter.scenes[currentSceneIndex]
    imageVisual.src = currentScene.image || imageVisual.src; // Keep the current image if one is not provided to switch to
    dialogue.textContent = currentScene.text;
    speakerTag.textContent = currentScene.speaker

    // Comes into play once we make text gradually generating
    // Autoskips the dialogue if autoskip
    if (currentScene.autoskip) {
        // Code here
    }

    // If there are options, show the options
    const options = currentScene.options;
    if (options) {
        nextBtn.classList.add("hidden");

        for (const option of options) {
            const newLi = document.createElement('li');
            const newP = document.createElement('p');

            newP.textContent = option.text;

            // Load the next encounter the option leads to
            newLi.addEventListener("click", () => {
                nextEncounter(option.leadsTo);
            }, {once: true});

            newLi.appendChild(newP);
            optionsRow.appendChild(newLi);
        }
    }
}

function nextScene() {
    if (currentScene.leadsTo) {
        nextEncounter(currentScene.leadsTo);
    }
    currentSceneIndex += 1;
    initiateScene();
}

/* Event Listeners */
nextBtn.addEventListener("click", nextScene);
startGameButton.addEventListener("click", beginGame);

/* Auto Typing Dialogue Effect */

/* Auto Typing Effect code will be placed here */