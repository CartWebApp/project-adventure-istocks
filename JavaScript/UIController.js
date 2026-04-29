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

const gameOverPopup = document.querySelector("#gameOverPopup");
const gameOverMessage = document.querySelector('#gameOverMessage');
const gameOverRetry = document.querySelector("#retryChoice");
const gameOverRestart = document.querySelector("#restartGame");

const HSPuzzleScreen = document.querySelector('#holesAndShapesPuzzle');
const RPSPuzzleScreen = document.querySelector('#rockPaperScissorsPuzzle');
const decipherPuzzleScreen = document.querySelector('#decipherPuzzle');

/* Variables */
let currentEncounter = storyData.find(object => object.id = "Intro");
let currentSceneIndex = 0;
let lastEncounter = undefined;
let lastOptionScene = undefined;

let inventoryEnabled = false;



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
    currentEncounter = storyData.find(object => object.id === encounterID);
    currentSceneIndex = 0;
    nextBtn.classList.remove("hidden");

    /* Clear options */
    optionsRow.replaceChildren();

    initiateScene();
}

function initiateScene() {
    let currentScene = currentEncounter.scenes[currentSceneIndex];
    // Fire to gameLogic.js
    window.dispatchEvent(new CustomEvent("evaluateScene", { detail: currentScene }));

    // Putting this outside of loadOptions() to deal with my cheap coding
    const options = currentScene.options;
    if (!options) {
        nextBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.add("hidden");
    }

    const loadScene = () => {
        imageVisual.src = currentScene.image || imageVisual.src; // Keep the current image if one is not provided to switch to
        speakerTag.textContent = currentScene.speaker;
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
                // This one's unique cause they don't meet requirement if they DO have the condition
                if (option.hideCondition) {
                    if (status.ImportantDecisions.find(option.condition)) {
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

    const loadText = () => {
        // Do all of this only if there's actual text (some mechanics scenes do not have text)
        if (currentScene.text) {
            // Rolling text
            const sceneText = currentScene.text;
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

    /* I gotta do something about conditional dialogue
    if (currentScene.sceneCondition) {
        if (status.ImportantDecisions[currentScene.sceneCondition]) {
            currentScene = currentEncounter.conditionMetScenes[currentSceneIndex];
        } else {
            currentScene = currentEncounter.conditionNotMetScenes[currentSceneIndex];
        }
    }; */

    loadScene();
    loadText();
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

        nextEncounter(lastEncounter.id)
    }, { once: true });

    gameOverRestart.addEventListener("click", () => {
        gameOverPopup.close();
        gameOverPopup.classList.add("hidden");

        nextEncounter("Intro")
    }, { once: true });
}

/* Event Listeners */
nextBtn.addEventListener("click", nextScene);
startGameButton.addEventListener("click", beginGame);
inventoryBtn.addEventListener("click", toggleInventory);
// Fired from gameLogic.js
window.addEventListener("nextEncounter", (e) => {
    nextEncounter(e.detail)
})
window.addEventListener("earlyGameOver", showGameOver)




/* *Sigh* alright. time for the puzzles... */
window.addEventListener("showPuzzle", (e) => {
    switch (e.detail) {
        case "holesAndShapes":
            holesAndShapesPuzzle()
            break;
        case "decipher":

            break;
        case "rockPaperScissors":

            break;
        default:
            console.log("Invalid puzzle")
            break;
    }
})



function decipherPuzzle() {

}

function rockPaperScissorsPuzzle() {

}

function holesAndShapesPuzzle() {
    const draggableShapeContainer = document.querySelector('#draggableShapeContainer');
    const boxOfHoles = document.querySelector('#boxOfHoles');
    const triangleHole = document.querySelector('#triangleHole');
    const circleHole = document.querySelector('#circleHole');
    const squareHole = document.querySelector('#squareHole');
    const starHole = document.querySelector('#starHole');

    let draggableShape = null;

    HSPuzzleScreen.classList.remove("hidden");

    class Shape {
        constructor(name, shapeImg, desiredHoleElement) {
            this.name = name
            this.img = shapeImg,
            this.desiredHole = desiredHoleElement
        }

        shapeInDOM() {
            const newShapeElement = document.createElement("img");
            newShapeElement.src = this.img;
            newShapeElement.alt = this.name;
            newShapeElement.setAttribute('draggable', true);
            newShapeElement.setAttribute('data-desiredHole', this.desiredHole)
            draggableShapeContainer.appendChild(newShapeElement);

            draggableShape = newShapeElement;

            // These event listeners currently don't do anything at the moment
            newShapeElement.addEventListener("dragstart", (event) => {
                draggableShape.classList.add("dragging");
            });
            newShapeElement.addEventListener('dragend', (event) => {
                draggableShape.classList.remove("dragging");
            });
        }
    }

    // Makin an example shape right now...
    const shapes = [
        new Shape("Triangle", "images/Mechanics/Puzzles/holesAndShapes/triangleShape.svg", triangleHole).desiredHole,
        new Shape("Circle", "images/Mechanics/Puzzles/holesAndShapes/triangleShape.svg", circleHole).desiredHole,
        new Shape("Star", "images/Mechanics/Puzzles/holesAndShapes/triangleShape.svg", starHole).desiredHole,
        new Shape("Heart", "images/Mechanics/Puzzles/holesAndShapes/triangleShape.svg", triangleHole).desiredHole,
        new Shape("Key", "images/Mechanics/Puzzles/holesAndShapes/triangleShape.svg", triangleHole).desiredHole,
        new Shape("GuyFromLayer1", "images/Mechanics/Puzzles/holesAndShapes/triangleShape.svg", triangleHole).desiredHole,
    ]
    const shapeIndex = 0;
    const triangle = shapes[shapeIndex]
    triangle.shapeInDOM()

    const getHoleDraggingOver = (container, draggingX) => {
        const closest = { element: null, offset: Number.NEGATIVE_INFINITY };
        const holes = container.querySelectorAll('.imgContainer');
        for (const hole of holes) {
            const holeSize = hole.getBoundingClientRect();
            const offset = draggingX - holeSize.left - holeSize.width / 2;

            // If this item is dragged over the hole and is the closest in distance, accept it
            if (Math.abs(offset) < holeSize.width && offset > closest.offset) {
                closest.element = hole;
                closest.offset = offset;
            }
        }
        // ** This can return as null if nothing was below where we were dragging
        return closest.element;
    }

    // Show a shadow of the dragged shape over the hole
    boxOfHoles.addEventListener('dragover', function (event) {
        event.preventDefault();

        const holeDraggingOver = getHoleDraggingOver(boxOfHoles, event.clientX);
        if (holeDraggingOver === null) {
            draggableShapeContainer.appendChild(draggableShape)
            // Return to original size
            draggableShape.style.position = "relative"
            draggableShape.style.width = '150px';
            draggableShape.style.height = '150px';
        } else {
            holeDraggingOver.appendChild(draggableShape)
            draggableShape.style.position = 'absolute'
            draggableShape.style.inset = '0'
            draggableShape.style.width = '100%';
            draggableShape.style.height = '100%';
            // Otherwise, do logic for whichever hole you tried to drop the object into
        }
    });

    boxOfHoles.addEventListener('drop', function (event) {
        event.preventDefault();

        // Find element of the item we were dragging over
        const holeDraggingOver = getHoleDraggingOver(boxOfHoles, event.clientX)
        if (holeDraggingOver) {
            if (holeDraggingOver.getAttribute('id') == draggableShape.getAttribute('data-desiredHole')) {
                // Initiate the next scene, and make the next shape
                // Will that logic be in here, or in the class? That's up to me to decide later

                // Also, there's a gag you can drop everything into the square hole.
            } else if (holeDraggingOver.getAttribute('id') == squareHole.getAttribute('id')) {
                // Gag dialogue
            } else {
                // fail
            }
        }
    });
}

holesAndShapesPuzzle()













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