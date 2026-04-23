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
    const currentScene = currentEncounter.scenes[currentSceneIndex]

    nextBtn.classList.add("hidden");
    const options = currentScene.options;

    /* Loads the image and text of the next scene */
    imageVisual.src = currentScene.image || imageVisual.src; // Keep the current image if one is not provided to switch to
    speakerTag.textContent = currentScene.speaker;

    // Generate text one character at a time
    const sceneText = currentScene.text;
    const maxChars = sceneText.length;
    let index = 0;
    const iterateACharacter = () => {
        // Add a character for as long as all characters have not finished generating yet
        if (index <= maxChars) {
            const textSection = sceneText.slice(0, index);
            dialogue.textContent = textSection;
            index++

            // Recursive: Repeat the function after the given time (in ms)
            // Change the wait time for the next character if the last character was a punctuation mark
            const character = sceneText[index - 2]; // For some reason, the current index is offset by 2?
            let waitTime = 20;
            if (character === "." || character === "?" || character === "!") {
                waitTime = 500;
            }
            setTimeout(iterateACharacter, waitTime);
        } else {
            if (currentScene.autoskip) {
                // Autoskips the dialogue the moment it finishes rendering if autoskip
            }


            if (!currentScene.options) {
                nextBtn.classList.remove("hidden");
            }
        }
    }
    iterateACharacter()

    // If there are options, show the options
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