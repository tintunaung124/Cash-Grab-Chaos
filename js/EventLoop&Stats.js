const min_Stat = 0;

const max_Stat = 100;

let previousEvent = null;

function fixStats() {

    player.stamina =
    Math.max(min_Stat, Math.min(max_Stat, player.stamina));

    player.morale =
    Math.max(min_Stat, Math.min(max_Stat, player.morale));

    player.tension =
    Math.max(min_Stat,Math.min(max_Stat, player.tension));

    car.fuel =
    Math.max(min_Stat,Math.min(max_Stat, car.fuel));

    car.distanceRemaining =
    Math.max(min_Stat,car.distanceRemaining);
}

const baseDrain = {
    stamina: -10,
    morale: -10,
    money: -10,
    fuel: -10,
    tension: 10
};

function applyBaseDrain() {

    player.stamina += baseDrain.stamina;
    player.morale += baseDrain.morale;
    player.money += baseDrain.money;
    player.tension += baseDrain.tension;

    car.fuel += baseDrain.fuel;

}

function checkGameOver() {

    console.log("checkGameOver running");


    if (car.fuel <= 0) {

        window.location.href =
        "./GameOverPages/GameOverFuel.html";

        return true;

    }

    if (player.money <= 0) {

        window.location.href =
        "./GameOverPages/GameOverMoney.html";

        return true;

    }

    if (player.stamina <= 0) {

        window.location.href =
        "./GameOverPages/GameOverStamina.html";

        return true;

    }

    if (player.morale <= 0) {

        window.location.href =
        "./GameOverPages/GameOverMorale.html";

        return true;

    }

    if (player.tension >= 100) {

        window.location.href =
        "./GameOverPages/GameOverTension.html";

        return true;

    }

    return false;
}

function checkWin() {

    if (car.distanceRemaining <= 0) {

        car.distanceRemaining = 0;

        savePlayerData();

        window.location.href = "Win.html";

        return true;

    }

    return false;

}

function applyEffect(effect) {

    for (const statName in effect) {

        const statValue =
        effect[statName];

        if (statName in player) {

            player[statName] +=
            statValue;

        }

        else if (statName in car) {

            car[statName] +=
            statValue;

        }

    }

    fixStats();

    updateStats();

}

async function nextEvent() {

    document.body.classList.add(
        "fade-out"
    );

    await new Promise(resolve =>

        setTimeout(resolve, 400)

    );

    let randomEvent;

    do {

        const randomIndex =

        Math.floor(
            Math.random() * gameEvents.length
        );

        randomEvent =
        gameEvents[randomIndex];

    }

    while (
        randomEvent === previousEvent
    );

    previousEvent =
    randomEvent;

    await showEvent(randomEvent);

    document.body.classList.remove(
        "fade-out"
    );

}

function completeEventProgress() {

    car.distanceRemaining -= 100;

    player.day += 1;

    applyBaseDrain();

    fixStats();

    updateStats();

    savePlayerData();

    checkWin();

}