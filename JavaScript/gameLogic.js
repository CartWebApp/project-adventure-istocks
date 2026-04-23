const healthbar = document.querySelector("#healthbar")
const hearts = document.querySelectorAll(".heart")

const status = {
    Health: 5,
    Inventory: {

    },
    ImportantDecisions: {

    }
}

/* Classes */
class Item {
    constructor(name, image) {
        this.name = name
        this.image = image
    }
}


// Put Data for Hearts here, must adapt based on the different probabilities throuhgout the story.
// Have a default set where it's 5 hearts in the beginning of the user journey

