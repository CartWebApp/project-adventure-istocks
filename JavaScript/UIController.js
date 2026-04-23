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

const hearts = document.querySelectorAll(".heart")

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
    speakerTag.textContent = currentScene.speaker;

    // Generate text one character at a time
    const sceneText = currentScene.text;
    const maxChars = sceneText.length
    const index = 0
    const iterateACharacter = () => {
        if (index < maxChars) {
            const textSection = sceneText.slice(0, i);
            dialogue.textContent = textSection;
            // Recursive: Repeat the function after the given time (in ms)
            setTimeout(iterateACharacter, 2000);
        }
    }


    for (let i=0; i<sceneText.length; i++) {
        const textSection = sceneText.slice(0, i);
        dialogue.textContent = textSection;
    }

    // Comes into play once we make text gradually generating
    // Autoskips the dialogue the moment it finishes rendering if autoskip
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
    const currentScene = currentEncounter.scenes[currentSceneIndex]
    if (currentScene.leadsTo) {
        nextEncounter(currentScene.leadsTo);
    } else {
        currentSceneIndex += 1;
    }
    initiateScene();
}

/* Event Listeners */
nextBtn.addEventListener("click", nextScene);
startGameButton.addEventListener("click", beginGame);



// Temp easy scene navigate for devs
const navSceneInput = document.querySelector("#sceneNavigate")
const navigateSceneButton = document.querySelector("#submitSceneNavigate")
navigateSceneButton.addEventListener("click", () => {
    const sceneID = navSceneInput.value;
    let currentEncounter = storyData.find(object => object.id = "Intro");
    if (currentEncounter) {
        beginGame();
        nextEncounter(sceneID);
    }
})

/* Auto Typing Dialogue Effect */

/* Auto Typing Effect code will be placed here */