import { data as storyData } from "./data/storyData.js";
import { currentEncounter, inventoryEnabled, nextScene, nextEncounter } from "./UIController.js"
// ^ imports { variable, variable, function, function }

/* Variables */

const inventoryBtn = document.querySelector('#inventoryButton')

const HSPuzzleScreen = document.querySelector('#holesAndShapesPuzzle');
const RPSPuzzleScreen = document.querySelector('#rockPaperScissorsPuzzle');
const decipherPuzzleScreen = document.querySelector('#decipherPuzzle');

const HSSceneId = "L1-1C2B"

// Show puzzle in UI when called for
window.addEventListener("showPuzzle", (e) => {
    switch (e.detail) {
        case "holesAndShapes":
            holesAndShapesPuzzle();
            break;
        case "decipher":
            decipherPuzzle();
            break;

        case "rockPaperScissors":
            rockPaperScissorsPuzzle();
            break;
        default:
            console.log("Invalid puzzle");
            break;
    }
})

export { rockPaperScissorsPuzzle, holesAndShapesPuzzle, decipherPuzzle }



function decipherPuzzle() {
    class message {
        constructor(encrypted, translated) {
            // In case some computers can't see the images, I'm actually gonna take pictures of the potential message instead
            // I'm not sure if line readers can read standard galactic alphabet anyways so???
            this.encryptedSrc = encrypted;
            this.translatedMessage = translated;
        }
    }

    const puzzleSection = document.querySelector("#decipherPuzzle");
    const messageImg = puzzleSection.querySelector('#encryptedImg');
    const inputDecryption = puzzleSection.querySelector('#inputDecryption');
    const submitDecryption = puzzleSection.querySelector('#submitDecryption');

    visuals.classList.add("hidden");
    puzzleSection.classList.remove("hidden")

    const potentialMessages = [
        new message(
            "images/Mechanics/Puzzles/decipher/message1.png",
            "hello how is your day?"
        ),
        new message(
            'images/Mechanics/Puzzles/decipher/message2.png',
            "hello its me crewmate"
        ),
        new message(
            'images/Mechanics/Puzzles/decipher/message3.png',
            "i am the good guy in the layer 1"
        ),
        new message(
            'images/Mechanics/Puzzles/decipher/message4.png',
            "you look interesting what are you"
        ),
        new message(
            'images/Mechanics/Puzzles/decipher/message4.png',
            "nice pants how did you get those"
        )
    ]

    const randomIndex = Math.floor(Math.random() * potentialMessages.length); // Math.floor to always get a number from 0 to (.length - 1)
    const chosenMessage = potentialMessages[randomIndex];

    messageImg.src = chosenMessage.encryptedSrc;


    /* Needs input logic here */
    
    submitDecryption.addEventListener ("click", (event) => {
        if (inputDecryption.value === chosenMessage.translatedMessage) {
            decipherPuzzleScreen.classList.add('hidden');
            visuals.classList.remove("hidden");
            nextEncounter("1C2B3C4A5B");
            console.log(inputDecryption.value);
        }
    });
}

function rockPaperScissorsPuzzle() {
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const enemyDisplay = document.getElementById("enemyDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const playerScoreDisplay = document.getElementById("playerScoreDisplay");
    const enemyScoreDisplay = document.getElementById("enemyScoreDisplay");
    let playerScore = 0;
    let enemyScore = 0;

    document.getElementById("retryChoice").onclick = function () {
        playerScore = 0;
        enemyScore = 0;

        playerScoreDisplay.textContent = playerScore;
        enemyScoreDisplay.textContent = enemyScore;

        playerDisplay.textContent = "John:";
        enemyDisplay.textContent = "James:";

        resultDisplay.textContent = "Let's See What You got!"
        resultDisplay.classList.remove("greenText", "redText", "blackText");
        resultDisplay.classList.add("blackText");
    }

    RPSPuzzleScreen.classList.remove('hidden')
    visuals.classList.add('hidden')

    // Images that are used to show the duel between John and James Stock

    const handImages = {
        rock: "images/Other/john-rock-removebg-preview.png",
        paper: "images/Other/john-paper-removebg-preview.png",
        scissors: "images/Other/john-scissors-removebg-preview.png"
    };

    const playerHand = document.getElementById("playerHand");
    const enemyHand = document.getElementById("enemyHand");



    // Rock, Paper, Scissors Logic below

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

        // Shows the game to the DOM alongside pre-done text

        playerDisplay.textContent = `Stock de John picked ${playerChoice}!`;
        enemyDisplay.textContent = `Stock de James picked ${enemyChoice}!`;
        resultDisplay.textContent = result;

        // Changes color based on who wins

        resultDisplay.classList.remove("greenText", "redText", "blackText");

        switch (result) {
            case "TIE BREAKER! Duel Again!":
                resultDisplay.classList.add("blackText");
                break;
            case "John, aka YOU win!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;

            case "John, aka YOU lost!":
                resultDisplay.classList.add("redText");
                enemyScore++;
                enemyScoreDisplay.textContent = enemyScore;
                break;
        }

        if (playerScore === 3) {
            RPSPuzzleScreen.classList.add("hidden");
            visuals.classList.remove("hidden");
            nextEncounter("1B2A3A-Win");
        } else if (enemyScore === 3) {
            RPSPuzzleScreen.classList.add("hidden");
            visuals.classList.remove("hidden");
            nextScene("1B2A3A-Lose");
        }

        playerHand.src = handImages[playerChoice];
        enemyHand.src = handImages[enemyChoice];


        playerHand.alt = `John picked ${playerChoice}`;
        enemyHand.alt = `James picked ${enemyChoice}`;
        console.log(enemyChoice);
    };
}


function holesAndShapesPuzzle() {
    // Find the mini scenes list of the scene triggering the holes and shapes puzzle
    const puzzleScenes = storyData.find(obj => obj.id == HSSceneId).scenes.find(s => s.puzzle != undefined).scenes

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

    // A list of shapes to choose from. The story calls which shape it wants to call
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

    // Functions to change dragged shape's size whether it's over a hole or not
    const normalSize = (item) => {
        draggableShapeContainer.appendChild(item)
        item.classList.remove("fitting")
    }
    const fitToHole = (item, hole) => {
        hole.appendChild(item)
        item.classList.add("fitting")
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
            // If dropped into the desired hole
            if (holeDraggingOver.getAttribute('id') == draggableShape.getAttribute('data-desiredHole')) {
                draggableShape.remove()
                toNextEncounter(draggableShape.getAttribute('data-nextEncounter'));
            } else {
                // Unique encounter if you drag the heart shape over an unfilled heart
                if (draggableShape.alt == "Heart" && holeDraggingOver.classList.contains('heart')) {
                    draggableShape.remove()
                    toNextEncounter("heartToHeart");
                } else {
                    // Fail the interaction
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