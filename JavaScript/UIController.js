import { data as storyData } from "./data/storyData.js";
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
let currentEncounter = storyData.find(object => object.id === "Intro");
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

    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const enemyDisplay = document.getElementById("enemyDisplay");
    const resultDisplay = document.getElementById("resultDisplay");

    // Images that are used to show the duel between John Stock and James Stock!

    const handImages = {
        rock: "images/Other/john-rock-removebg-preview.png",
        paper: "images/Other/john-paper-removebg-preview.png",
        scissors: "images/Other/john-scissors-removebg-preview.png"
    };

    const playerHand = document.getElementById("playerHand");
    const enemyHand = document.getElementById("enemyHand");

    resultDisplay.classList.remove("greenText", "redText");

    window.playGame = function (playerChoice) {
        const enemyChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === enemyChoice) {
            result = "TIE BREAKER! Duel Again!";
        }
        else {
            switch (playerChoice) {
                case "rock":
                    result = (enemyChoice === "scissors") ? "John, aka YOU win!" : "John, aka YOU lost!";
                    break;

                case "paper":
                    result = (enemyChoice === "rock") ? "John, aka YOU win!" : "John, aka YOU lost!";
                    break;

                case "scissors":
                    result = (enemyChoice === "paper") ? "John, aka YOU win!" : "John, aka YOU lost!";
                    break;
            }
        }

        playerDisplay.textContent = `Stock de John picked ${playerChoice}!`;
        enemyDisplay.textContent = `Stock de James picked ${enemyChoice}!`;
        resultDisplay.textContent = result;

        playerHand.src = handImages[playerChoice];
        enemyHand.src = handImages[enemyChoice];


        playerHand.alt = `John picked ${playerChoice}`;
        enemyHand.alt = `James picked ${enemyChoice}`;
        console.log(enemyChoice);
    };
}

function holesAndShapesPuzzle() {
    // Find the mini scenes list of the scene triggering the holes and shapes puzzle
    const puzzleScenes = storyData.find(obj => obj.id == "L1-1C2B").scenes.find(s => s.puzzle != undefined).scenes

    const draggableShapeContainer = document.querySelector('#draggableShapeContainer');
    const triangleHole = document.querySelector('#triangleHole');
    const circleHole = document.querySelector('#circleHole');
    const squareHole = document.querySelector('#squareHole');
    const starHole = document.querySelector('#starHole');

    let currentMiniEncounter = "Intro";
    let miniSceneIndex = 0;

    let draggableShape = null;

    HSPuzzleScreen.classList.remove("hidden");
    visuals.classList.add("hidden");

    class Shape {
        constructor(name, shapeImg, desiredHoleElement, nextEncounter) {
            this.name = name
            this.img = shapeImg,
                this.desiredHole = desiredHoleElement
            this.nextEncounter = nextEncounter
        }

        shapeInDOM() {
            const newShapeElement = document.createElement("img");
            newShapeElement.src = this.img;
            newShapeElement.alt = this.name;
            newShapeElement.setAttribute('draggable', true);
            newShapeElement.setAttribute('data-desiredHole', this.desiredHole.id);
            newShapeElement.setAttribute('data-nextEncounter', this.nextEncounter)
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
    const shapes = {
        triangle: new Shape("Triangle", "images/Mechanics/Puzzles/holesAndShapes/triangleShape.svg", triangleHole, "triangleScene"),
        circle: new Shape("Circle", "images/Mechanics/Puzzles/holesAndShapes/circleShape.svg", circleHole, "circleScene"),
        star: new Shape("Star", "images/Mechanics/Puzzles/holesAndShapes/starShape.svg", starHole, "starScene"),
        heart: new Shape("Heart", "images/Mechanics/Puzzles/holesAndShapes/heartShape.svg", squareHole, "heartScene"),
        key: new Shape("Key", "images/Mechanics/Puzzles/holesAndShapes/layer2Key.svg", inventoryBtn, "keyScene"),
    }

    const getHoleDraggingOver = (draggingX, draggingY) => {
        const closest = { element: null, offsetX: Number.NEGATIVE_INFINITY, offsetY: Number.NEGATIVE_INFINITY };
        const holes = document.querySelectorAll('.imgContainer, .interactableWithPH');
        for (const hole of holes) {
            const holeSize = hole.getBoundingClientRect();
            const offsetX = draggingX - holeSize.left - holeSize.width / 2;
            const offsetY = draggingY - holeSize.top - holeSize.height / 2

            // If this item is dragged over the hole and is the closest in distance, accept it
            if (Math.abs(offsetX) < holeSize.width && Math.abs(offsetY) < holeSize.height) {
                if (offsetX > closest.offsetX && offsetY > closest.offsetY)
                    closest.element = hole;
                closest.offsetX = offsetX;
                closest.offsetY = offsetY;
            }
        }
        // ** This can return as null if nothing was below where we were dragging
        return closest.element;
    }
    const normalSize = (item) => {
        draggableShapeContainer.appendChild(item)
        item.style.position = "relative"
        item.style.width = '150px';
        item.style.height = '150px';
    }
    const fitToHole = (item, hole) => {
        hole.appendChild(item)
        // Key shape will always be bigger than the holes it hovers over
        if (item.getAttribute('alt') != "Key") {
            item.style.position = 'absolute';
            item.style.inset = '0';
            item.style.width = '100%';
            item.style.height = '100%';
        } else {
            item.style.position = "absolute";
            item.style.inset = '0';
            item.style.width = '200px';
            item.style.height = '200px';
        }
    }

    // Show a shadow of the dragged shape over the hole
    window.addEventListener('dragover', function (event) {
        event.preventDefault();

        const holeDraggingOver = getHoleDraggingOver(event.clientX, event.clientY);
        if (holeDraggingOver === null) {
            draggableShapeContainer.appendChild(draggableShape)
            // Return to original size
            normalSize(draggableShape)
        } else {
            fitToHole(draggableShape, holeDraggingOver)
        }
    });

    window.addEventListener('drop', function (event) {
        event.preventDefault();

        // Find element of the item we were dragging over
        const holeDraggingOver = getHoleDraggingOver(event.clientX, event.clientY)
        if (holeDraggingOver) {
            console.log(holeDraggingOver.getAttribute('id'), draggableShape.getAttribute('data-desiredHole'))
            if (holeDraggingOver.getAttribute('id') == draggableShape.getAttribute('data-desiredHole')) {
                draggableShape.remove()
                toNextEncounter(draggableShape.getAttribute('data-nextEncounter'));
            } else {
                console.log(draggableShape.alt)
                console.log(status.Health, status.MaxHealth)
                // Unique encounter if you drag the heart shape over an unfilled heart
                if (draggableShape.alt == "Heart" && holeDraggingOver.classList.contains('heart') && status.Health < status.MaxHealth) {
                    draggableShape.remove()
                    toNextEncounter("heartToHeart");
                } else {
                    // fail
                    normalSize(draggableShape)
                    toNextEncounter("wrong");
                }
            }
        }
    });

    // Seperate listener for the inventory button which is not included 



    // Puzzle-exclusive scenes 
    // "Encounters & scenes" inside the puzzle element
    const toNextEncounter = (nextEncounterName) => {
        currentMiniEncounter = puzzleScenes[nextEncounterName]
        miniSceneIndex = 0;
        toNextMiniScene();
    }
    const toNextMiniScene = () => {
        initiateMiniScene();
        miniSceneIndex++;
    }
    const initiateMiniScene = () => {
        const currentMiniScene = currentMiniEncounter[miniSceneIndex];
        const miniNext = document.querySelector('#skipGL2dialogue');

        const GL2dialogue = document.querySelector("#GL2dialogue");
        GL2dialogue.textContent = currentMiniScene.text;

        const sceneText = currentMiniScene.text;
        const maxChars = sceneText.length;
        let index = 0;

        // Fire to gameLogic.js
        window.dispatchEvent(new CustomEvent("evaluateScene", { detail: currentMiniScene }));

        // Skip the rolling dialogue
        const skipDialogue = () => {
            if (!inventoryEnabled) {
                GL2dialogue.textContent = sceneText;
                index = maxChars;
            }
        };
        // Make nextBtn skip dialogue instead of going to the next scene
        miniNext.addEventListener("click", skipDialogue, { once: true });
        miniNext.removeEventListener("click", nextScene);

        const iterateACharacter = () => {
            if (index < maxChars) {
                const textSection = sceneText.slice(0, index + 1);
                GL2dialogue.textContent = textSection;
                index++;

                const character = sceneText[index - 2]; // For some reason, the current index is offset by 2?
                let waitTime = 25;
                if (character === "." || character === "?" || character === "!") {
                    waitTime = 300;
                }
                setTimeout(iterateACharacter, waitTime);
            } else {
                miniNext.removeEventListener("click", skipDialogue);
                if (!currentMiniScene.endPuzzle) {
                    // Do not allow proceeding to next scene
                    if (miniSceneIndex < currentMiniEncounter.length) {
                        miniNext.addEventListener("click", toNextMiniScene, { once: true });
                    }

                    if (currentMiniScene.shape) {
                        shapes[currentMiniScene.shape].shapeInDOM();
                    }
                } else {
                    // End scene on clicking next
                    miniNext.addEventListener("click", () => {
                        HSPuzzleScreen.classList.add("hidden");
                        visuals.classList.remove("hidden");
                        nextEncounter("L1-1C2B-AfterPuzzle");
                    }, { once: true });
                }
            }
        }
        iterateACharacter();
    }

    toNextEncounter("Intro")
}













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
rockPaperScissorsPuzzle()