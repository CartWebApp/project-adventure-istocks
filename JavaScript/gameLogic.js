const inventory = document.querySelector('#inventory');
let hearts = document.querySelectorAll(".heart img");

/* Classes */

class Player {
    constructor(health, maxHealth) {
        this.Health = health;
        this.MaxHealth = maxHealth;
        this.Inventory = {};
        this.ImportantDecisions = [];
    }
}

class Item {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
};

const status = new Player(5,5)
export { status }


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



// Restart Stats when restarting game
window.addEventListener("ResetStats", () => {
    status = new Player(5,5)
})


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

        if (giveCondition) {
            status.ImportantDecisions.push(giveCondition)
        }

        if (gameOver) { 
            window.dispatchEvent(new CustomEvent("earlyGameOver", { detail: gameOver }))
        }

        switch (endGame) {
            // Put end screens here, details information about your playthrough
            case "Ending1":
                window.dispatchEvent(new CustomEvent("endGame", { detail: 1}))
                break;
            case "Ending2":
                window.dispatchEvent(new CustomEvent("endGame", { detail: 2}))
                break;
            case "Ending3":
                window.dispatchEvent(new CustomEvent("endGame", { detail: 3}))
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

