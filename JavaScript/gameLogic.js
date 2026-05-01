const inventory = document.querySelector('#inventory');
let hearts = document.querySelectorAll(".heart img");

const status = {
    Health: 5,
    MaxHealth: 5,
    Inventory: {},
    ImportantDecisions: [],
};

export { status }

/* Classes */

class Item {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
};


/* Functions */
function updateVisualHealth() {
     // Reset health bar
     for (const heartImg of hearts) {
        heartImg.src = "images/Mechanics/unfilledHeart.svg";
    }

    // Fill in each heart you have left
    for (let i = 0; i < status.Health; i++) {
        const heartImg = hearts[i];
        heartImg.src = "images/Mechanics/filledHeart.svg";
    }

    if (status.Health <= 0) {
        window.dispatchEvent(new CustomEvent("earlyGameOver", { detail: "You lost all your health..." }))
    }
}
function modifyHealth(change) {
    status.Health += change;
    updateVisualHealth()
}
function modifyMaxHealth(change) {
    status.MaxHealth += change;
    status.Health += change;

    // make a new heart object per max health added
    if (status.MaxHealth > hearts.length) {
        const healthbar = document.querySelector('#healthbar')
        for (let i=hearts.length; i<status.MaxHealth; i++) {
            const li = document.createElement('li');
            li.classList.add("heart")
        
            const img = document.createElement('img');
            img.alt = "heart"
        
            li.appendChild(img)
            healthbar.appendChild(li)
            // To update the amount of hearts the player has for DOM
            hearts = document.querySelectorAll(".heart img");
        }
    }

    updateVisualHealth()
}

function addToInventory(itemName) {
    let imageUrl = `images/Mechanics/ItemImages/${itemName}.svg`;
    status.Inventory[itemName] = new Item(itemName, imageUrl);

    const li = document.createElement('li');
    const img = document.createElement('img');
    const text = document.createElement('p');

    li.classList.add(itemName)
    img.src = imageUrl;
    text.textContent = itemName;

    li.appendChild(img);
    li.appendChild(text);
    inventory.appendChild(li);
}
function deleteFromInventory(itemName) {
    delete status.Inventory[itemName]

    const foundItem = inventory.querySelector(`.${itemName}`)
    foundItem.remove()
}


// Evaluate mechanics per scene, have they exist at least
window.addEventListener("evaluateScene", (e) => {
    const evaluateMechanics = (sceneObject) => {
        // Checks for mechanics - fallback on nothings if there aren't
        const damage = sceneObject.damage || 0;
        const heal = sceneObject.heal || 0;
        const maxHealthChange = sceneObject.maxHealthChange || 0;
        const getItem = sceneObject.getItem;
        const useItem = sceneObject.useItem;
        const giveCondition = sceneObject.giveCondition;
        const puzzle = sceneObject.puzzle;
        const gameOver = sceneObject.gameOver;
        const endGame = sceneObject.endGame;

        modifyHealth(-damage);
        modifyMaxHealth(maxHealthChange)
        if (status.Health < status.MaxHealth) { modifyHealth(heal); }



        if (getItem) { addToInventory(getItem); }
        if (useItem) { deleteFromInventory(useItem); }

        if (maxHealthChange) {  }

        if (giveCondition) {
            status.ImportantDecisions.push(giveCondition)
        }

        if (gameOver) { 
            window.dispatchEvent(new CustomEvent("earlyGameOver", { detail: gameOver }))
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

        if (puzzle) {
            window.dispatchEvent(new CustomEvent("showPuzzle", { detail: puzzle }));
        }
    }

    // See if the current scene/option has any mechanics
    const currentScene = e.detail;
    evaluateMechanics(currentScene)
});

