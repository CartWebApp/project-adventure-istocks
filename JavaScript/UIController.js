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

// Export to gameLogic.js
export { currentEncounter, currentSceneIndex }

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

    // Fire to gameLogic.js to begin mechanics evaluation: see gameLogic.js for that code
    window.dispatchEvent(new Event("evaluateScene"))

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
            nextBtn.classList.add("hidden");

            for (const option of options) {
                const newLi = document.createElement('li');
                const newP = document.createElement('p');

                newP.textContent = option.text;

                // Load the next encounter the option leads to
                newLi.addEventListener("click", () => {
                    nextEncounter(option.leadsTo);
                }, { once: true });

                newLi.appendChild(newP);
                optionsRow.appendChild(newLi);
            }
        }
    }

    // Rolling text
    const sceneText = currentScene.text;
    const maxChars = sceneText.length;
    let index = 0;

    const iterateACharacter = () => {
        if (index <= maxChars) {
            const textSection = sceneText.slice(0, index);
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

    // Skip the rolling dialogue if tap anywhere on the screen
    const skipDialogue = () => {
        dialogue.textContent = sceneText;
        index = maxChars;
    };
    // Make nextBtn skip dialogue instead of going to the next scene
    nextBtn.addEventListener("click", skipDialogue, { once: true });
    nextBtn.removeEventListener("click", nextScene)
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