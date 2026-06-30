const infoTitle = document.getElementById("InfoTitle");
const infoContent = document.getElementById("InfoContent");
const buttons = document.querySelectorAll(".info-btn");

const infoData = {
    controls: {
        title: "Controls",
        content: `
            <p>
                Hold <b>D</b> or the <b>Right Arrow</b> key to drive forward.
                Release the key to stop driving.
            </p>
            <p>
                <b>Click</b> the event icon when it appears to open a random event.
            </p>
            <p>
                Use your mouse to choose options during events.
            </p>
            <p>
                Press <b>ESC</b> key to pause the game.
            </p>
        `
    },

    events: {
        title: "Events",
        content: `
            <p>
                While driving, random events will appear. When an event is ready,
                an exclamation mark icon will pop up on the road.
            </p>
            <p>
                Click the icon to open the event page. Each event gives you a short
                story and two choices.
            </p>
            <p>
                Your choices affect your stats and can help or hurt your road trip.
            </p>
        `
    },

    stats: {
        title: "Stats",
        content: `
            <p>
                    At the end of each travel day, the main stats are affected by a base daily drain. 
                    <br> Fuel, stamina, morale, and money <b>decrease</b> by <b>10</b>, while tension <b>increases</b> by <b>10</b>.
            </p>
            
            <ul>
                <li><b>Fuel:</b> The car's fuel. If it reaches 0, the trip ends.</li>
                <li><b>Stamina:</b> The driver's energy. If it reaches 0, you lose.</li>
                <li><b>Money:</b> Used for supplies, repairs, and costs. If it reaches 0, you lose.</li>
                <li><b>Morale:</b> The group's mood. If it reaches 0, the group gives up.</li>
                <li><b>Tension:</b> Conflict inside the car. If it reaches 100, you lose.</li>
                <li><b>Destination:</b> Shows your progress toward the beach.</li>
            </ul>
        `
    },

    conditions: {
        title: "Win / Lose Conditions",
        content: `
            <p>
                To win, reach <b>100% destination progress</b> and arrive at the beach.
            </p>
            <p>
                You lose if any important survival stat reaches a dangerous limit.
            </p>
            <ul>
                <li>Fuel reaches 0.</li>
                <li>Stamina reaches 0.</li>
                <li>Money reaches 0.</li>
                <li>Morale reaches 0.</li>
                <li>Tension reaches 100.</li>
            </ul>
        `
    }
};

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedInfo = button.dataset.info;

        infoTitle.textContent = infoData[selectedInfo].title;
        infoContent.innerHTML = infoData[selectedInfo].content;

        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});