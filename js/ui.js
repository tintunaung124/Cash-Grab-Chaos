const typingSpeed = 20;

async function typeWriter(text, elementId) {

    const element =
    document.getElementById(elementId);

    element.textContent = "";

    for (let i = 0; i < text.length; i++) {

        element.textContent += text[i];

        await new Promise(function(resolve){

            setTimeout(resolve, typingSpeed);

        });
    }
}



function updateStats() {

    if (document.getElementById("FuelValue"))
        document.getElementById("FuelValue").textContent =
        car.fuel;

    if (document.getElementById("StaminaValue"))
        document.getElementById("StaminaValue").textContent =
        player.stamina;

    if (document.getElementById("MoraleValue"))
        document.getElementById("MoraleValue").textContent =
        player.morale;

    if (document.getElementById("MoneyValue"))
        document.getElementById("MoneyValue").textContent =
        "$" + player.money;

    if (document.getElementById("TensionValue"))
        document.getElementById("TensionValue").textContent =
        player.tension;

    if (document.getElementById("DayValue"))
        document.getElementById("DayValue").textContent =
        player.day;

    updateDestination();

    checkGameOver();

}

function updateDestination() {

    const totalDistance = 700;
    const distanceTravelled = totalDistance - car.distanceRemaining;

    let progressPercent = (distanceTravelled / totalDistance) * 100;

    progressPercent = Math.max(0, Math.min(100, progressPercent));

    if (document.getElementById("DestinationProgress")) {
        document.getElementById("DestinationProgress").value = progressPercent;
    }

    if (document.getElementById("DestinationValue")) {
        document.getElementById("DestinationValue").textContent =
        progressPercent.toFixed(1) + "%";
    }

}

function updateBackground(imagePath) {

    if (!imagePath) {
        return;
    }

    document.body.style.backgroundImage =
    `url("${imagePath}")`;
}

function clearEventUI() {

    document.getElementById("event-title").textContent = "";

    document.getElementById("event-description").textContent = "";

    document.getElementById("choices").innerHTML = "";

}

function createChoiceButtons(event) {

    let html = "";

    for (let i = 0; i < event.choices.length; i++) {

        html += `

            <button onclick="handleChoice(${i})">

                ${event.choices[i].text}

            </button>

        `;

    }

    document.getElementById("choices").innerHTML =
    html;

}

function handleChoice(choiceIndex) {

    let choice =
    currentEvent.choices[choiceIndex];

    applyEffect(choice.effect);

    const gameOverAfterChoice = checkGameOver();

    if (gameOverAfterChoice) {
        return;
    }

    completeEventProgress();

    const gameOverAfterBaseDrain = checkGameOver();

    if (gameOverAfterBaseDrain) {
        return;
    }
    
    const won = checkWin();

    if (won) {
        return;
    }

    currentEvent = null;

    clearEventUI();

    savePlayerData();

    window.location.href = "Game.html";

}

async function showEvent(event) {

    if (!event) {

        return;

    }

    currentEvent = event;

    updateBackground(event.background);

    document.getElementById("event-title").textContent =
    event.title;

    await typeWriter(
        event.description,
        "event-description"
    );

    createChoiceButtons(event);

}