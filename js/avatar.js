const characters = [
    {
        id: 0,
        name: "Captain Compass",
        image: "images/Captain Compass.png"
        
    },
    {
        id: 1,
        name: "Professor Mustachio",
        image: "images/Professor Mustachio.png"
    },
    {
        id: 2,
        name: "Broccoli Milo",
        image: "images/Broccoli Milo.png"
    }
];

let currentCharacter = 0;

function updateCharacter() {
    document.getElementById("character-image").src =
        characters[currentCharacter];
}

function nextCharacter() {
    currentCharacter++;

    if (currentCharacter >= characters.length) {
        currentCharacter = 0;
    }

    updateCharacter();
}

function previousCharacter() {
    currentCharacter--;

    if (currentCharacter < 0) {
        currentCharacter = characters.length - 1;
    }

    updateCharacter();
}


function selectCharacter() {

    document.getElementById("text-container").style.display = "flex";

    document.getElementById("selected-character").textContent =
        "You have selected character: " +
        characters[currentCharacter].name;

    localStorage.setItem(
        "selectedCharacterID",
        characters[currentCharacter].id
    );

    localStorage.setItem(
        "selectedCharacterName",
        characters[currentCharacter].name
    );
}

function updateCharacter() {
    document.getElementById("character-image").src =
        characters[currentCharacter].image;
}