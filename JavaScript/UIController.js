import { data as storyData } from "./data/storyData.js";
import { rockPaperScissorsPuzzle, holesAndShapesPuzzle, decipherPuzzle } from "./puzzles.js";
import { status } from "./gameLogic.js";

/* Visuals */
const startingScreen = document.querySelector('#startingScreen');

const gameScreen = document.querySelector('#actualGame');
const visuals = document.querySelector('#visuals')
const imageVisual = document.querySelector('#mainVisual');

/* Interactables */
const startGameButton = document.querySelector('#startGame');

const dialogueBox = document.querySelector('#dialogueBox')
const dialogue = document.querySelector('#dialogueBox #dialogue');
const speakerTag = document.querySelector('#speakerTag');
const nextBtn = document.querySelector("#next");
const optionsRow = document.querySelector('#optionsRow');

const journalSection = document.querySelector('#journalSection');
const journalSpace = document.querySelector('#journalSpace');
const journalBtn = document.querySelector('#journalButton');

const inventorySection = document.querySelector('#inventorySection');
const inventoryBtn = document.querySelector('#inventoryButton');

const gameOverPopup = document.querySelector("#gameOverPopup");
const gameOverMessage = document.querySelector('#gameOverMessage');
const gameOverRetry = document.querySelector("#retryChoice");
const gameOverRestart = document.querySelector("#gameOverRestartBtn");

const endingScreen = document.querySelector("#endingScreen");
const restartBtn = document.querySelector("#restartGame");


/* Variables */
let currentEncounter = storyData.find(object => object.id === "Intro");
let currentSceneIndex = 0;
let lastEncounter = undefined;
let lastOptionScene = undefined;
let lastUniqueImageSRC = undefined; // For Journal

let inventoryEnabled = false;
let journalEnabled = false;

export { currentEncounter, inventoryEnabled, nextScene, nextEncounter }



/* Functions */
function beginGame(tempDisableVar) {
    startingScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    if (tempDisableVar != "3784NT") {
        initiateScene();
    }
}

function nextEncounter(encounterID) {
    lastEncounter = currentEncounter
    // Set next encounter
    currentEncounter = storyData.find(object => object.id === encounterID);
    currentSceneIndex = 0;
    nextBtn.classList.remove("hidden");

    /* Clear options */
    optionsRow.replaceChildren();

    initiateScene();
}




function initiateScene() {
    let currentScene = currentEncounter.scenes[currentSceneIndex];

    // Putting this outside of loadOptions() to deal with my cheap coding
    const options = currentScene.options;
    if (!options) {
        nextBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.add("hidden");
    }

    const loadScene = (scene) => {
        // Fire to gameLogic.js, evaluate mechanics now that dialogue has finished loading.
        window.dispatchEvent(new CustomEvent("evaluateScene", { detail: scene }));
        imageVisual.src = scene.image || imageVisual.src; // Keep the current image if one is not provided to switch to
        speakerTag.textContent = scene.speaker;
        // Append to jounral
        appendSceneToJournal(scene)
    }

    const loadOptions = () => {
        // If there are options, show the options
        // Hide next button if options are about to appear
        const options = currentScene.options;
        if (options) {
            lastOptionScene = currentScene;

            for (const option of options) {
                const newLi = document.createElement('li');
                const newP = document.createElement('p');

                newP.textContent = option.text;
                newLi.setAttribute("id", option.text)

                newLi.appendChild(newP);
                optionsRow.appendChild(newLi);

                const clickedEvent = () => {
                    // Append to journal
                    appendOptionToJournal(option)
                    // Load the next full encounter
                    nextEncounter(option.leadsTo);
                    // Fire to gameLogic.js
                    window.dispatchEvent(new CustomEvent("evaluateScene", { detail: option }));
                }

                // Evaluate if user does not have necessary item or has not made a necessary choice
                let doesNotMeetRequirement = false;
                if (option.useItem) {
                    if (!status.Inventory[option.useItem]) {
                        doesNotMeetRequirement = true;
                    }
                }
                if (option.condition) {
                    if (!status.ImportantDecisions.find(option.condition)) {
                        doesNotMeetRequirement = true;
                    }
                }

                // If does not meet requirement then do not allow them to click the button
                if (doesNotMeetRequirement) {
                    newLi.style.opacity = 0.5;
                } else {
                    newLi.addEventListener("click", clickedEvent, { once: true });
                    newLi.style.opacity = 1;
                }
            }
        }
    }

    const loadText = (scene, whenFinishFunction) => {
        // Do all of this only if there's actual text (some mechanics scenes do not have text)
        if (scene.text) {
            // Rolling text
            const sceneText = scene.text;
            const maxChars = sceneText.length;
            let index = 0;

            // Skip the rolling dialogue
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
                    // When text finishes loading, make nextBtn go to next scene again
                    // The event listener to make the next button proceed to the next scene must be in whenFinishFunction, since it's different across the various times this function is called
                    nextBtn.removeEventListener("click", skipDialogue)

                    if (scene.autoskip) {
                        // Autoskips the dialogue the moment it finishes rendering if autoskip
                        nextScene()
                    }

                    // Perform anything else that is needed
                    whenFinishFunction()
                }
            }

            iterateACharacter();
        }
    }

    // Some dialogue is conditional; it changes based on decisions users made in the past
    // We account for that here

    const getSceneArray = (condition) => {
        const conditionMetScenes = currentScene.conditionMetScenes;
        const conditionNotMetScenes = currentScene.conditionNotMetScenes;

        const scenesArray = condition ? conditionMetScenes : conditionNotMetScenes;
        return scenesArray;
    }

    // Function for loading mini scenes
    const miniSceneHandle = (scenesArray) => {
        let miniSceneIndex = 0;
        let miniScene = scenesArray[miniSceneIndex];

        const initMiniScene = () => {
            miniScene = scenesArray[miniSceneIndex]
            loadScene(miniScene);
            loadText(miniScene, () => {
                nextBtn.addEventListener("click", skipMiniScene, { once: true });
            });
        };
        // this is played on nextBtn press
        const skipMiniScene = () => {
            // If there is a leadsTo into a normal encounter then go into that right away
            if (miniScene.leadsTo) {
                nextEncounter(miniScene.leadsTo);
            } else {
                // If that was the last option in the mini-scene then goes on to next normal scene
                if (miniSceneIndex === scenesArray.length - 1) {
                    nextScene()
                } else {
                    // move to next mini scene
                    miniSceneIndex++;
                    initMiniScene()
                }
            }
        };

        // Load the first mini scene
        initMiniScene();
    }

    // Now actually check for the conditions
    if (currentScene.sceneCondition) {
        // Setting up "mini scenes", as the conditional dialogue is formatted a lil different from main dialogue
        const hasCondition = status.ImportantDecisions.includes(currentScene.sceneCondition)
        const scenesArray = getSceneArray(hasCondition)
        miniSceneHandle(scenesArray);
    } else if (currentScene.itemCondition) {
        // Basically the same thing, but checks if you have an item in your inventory instead
        const hasItem = status.Inventory[currentScene.itemCondition];
        const scenesArray = getSceneArray(hasItem);
        miniSceneHandle(scenesArray);
    } else {
        // Load the regular dialogue if not conditional
        loadScene(currentScene);
        loadText(currentScene, () => {
            nextBtn.addEventListener("click", nextScene, { once: true })
            loadOptions();
        });
    }
}

function nextScene() {
    // Only run if inventory isn't open
    if (!inventoryEnabled) {
        const currentScene = currentEncounter.scenes[currentSceneIndex]
        if (currentScene.leadsTo) {
            nextEncounter(currentScene.leadsTo);
        } else {
            currentSceneIndex++;
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

/*
function removeDialogue() {
    if (optionsRow.display !== 'hidden') {
        dialogueBox.classList.add("hidden");
    }
}
*/

// Journal related things
function toggleJournal() {
    if (!journalEnabled) {
        visuals.classList.add("hidden");
        journalSection.classList.remove("hidden");
        journalEnabled = true;
    } else {
        visuals.classList.remove("hidden");
        journalSection.classList.add("hidden");
        journalEnabled = false;
    }
}

function appendSceneToJournal(scene) {
    const div = document.createElement("div");

    if (scene.image && lastUniqueImageSRC != scene.image) {
        const img = document.createElement('img');
        img.src = scene.image; // If there is a new image then append that to the journal

        lastUniqueImageSRC = scene.image;

        div.appendChild(img);
    }

    if (scene.text) {
        const p = document.createElement("p");
        p.textContent = `${scene.speaker}: ${scene.text}`;
        div.appendChild(p);
    }

    journalSpace.appendChild(div);
}

function appendOptionToJournal(chosenOption) {
    const p = document.createElement("p");
    p.textContent = chosenOption.text;
    p.classList.add("journalOption");
    journalSpace.appendChild(p);
}

function appendRetryToJournal() {
    const p = document.createElement("p");
    p.textContent = "User retried this encounter";
    p.classList.add("journalRetryText");
    journalSpace.appendChild(p);
}

function refreshJournal() {
    journalSpace.replaceChildren();
}




// Restart Game
function restartGame() {
    window.dispatchEvent(new Event("ResetStatus"));
    gameOverPopup.close();
    gameOverPopup.classList.add("hidden");
    endingScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    currentEncounter = storyData.find(object => object.id === "Intro");
    currentSceneIndex = 0;

    refreshJournal();
    startingScreen.classList.remove("hidden");
}


// Game Over
function showGameOver(e) {
    gameOverPopup.showModal();
    gameOverPopup.classList.remove("hidden");
    gameOverMessage.textContent = e.detail;

    // gameOver == message to display
    // Make a black screen that shows the gameOver text, and a retry button
    gameOverRetry.addEventListener("click", () => {
        gameOverPopup.close();
        gameOverPopup.classList.add("hidden");

        appendRetryToJournal();
        nextEncounter(lastEncounter.id);
    }, { once: true });

    gameOverRestart.addEventListener("click", restartGame, { once: true });
}

/* Event Listeners */
nextBtn.addEventListener("click", nextScene);
startGameButton.addEventListener("click", beginGame);
inventoryBtn.addEventListener("click", toggleInventory);
restartBtn.addEventListener("click", restartGame);
journalBtn.addEventListener("click", toggleJournal);

// Fired from gameLogic.js
window.addEventListener("nextEncounter", (e) => {
    nextEncounter(e.detail);
})
window.addEventListener("earlyGameOver", showGameOver);

// End Game
window.addEventListener("endGame", () => {
    gameScreen.classList.add("hidden");
    endingScreen.classList.remove("hidden");
})



// Temp easy scene navigate for devs // Remember to delete in html too
const navSceneInput = document.querySelector("#sceneNavigate")
const navigateSceneButton = document.querySelector("#submitSceneNavigate")
navigateSceneButton.addEventListener("click", () => {
    const sceneID = navSceneInput.value;
    currentEncounter = storyData.find(object => object.id == sceneID);
    if (currentEncounter) {
        beginGame("3784NT");
        nextEncounter(sceneID);
    }
})


// Custom Cursor (can alter styling with a different image or CSS styling, do not need to adjust JavaScript logic).

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    animateCircles();
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.15;
        y += (nextCircle.y - y) * 0.15;
    });
}