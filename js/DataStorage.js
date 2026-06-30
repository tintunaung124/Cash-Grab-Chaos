const gameEvents = [

    {
    title: "The Gas Station Talent Show",

    description:"You stop at a roadside gas station and discover a town hosting a 'Highway Talent Show' with free fuel and snacks as prizes. An organizer invites your group to participate while friends scramble to create a performance. Joining could earn rewards but cost valuable time.",

    background: "images/TalentShow.png",

    choices: [

        {
            text: `

            Join the talent show for prizes and laughs.

            <br>

            <span class="fuel"> -12</span>

            <span class="money"> +30</span>

            <span class="morale"> +15</span>

            `,

            effect: {
                fuel: -12,
                money: 30,
                morale: 15
            }
        },

        {
            text: `

            Skip the show and continue your journey.

            <br>

            <span class="fuel"> +15</span>

            <span class="morale"> -12</span>

            <span class="tension"> -6</span>

            `,

            effect: {
                fuel: 15,
                morale: -12,
                tension: -6
            }
        }

    ]
},

    {
    title: "It's Raining Money....!",
    
    description:"While driving along a highway, you realize dollar bills are drifting through the air after an armored truck lost cash on the road. Drivers abandon their cars to grab the money, throwing traffic into chaos as your friends stare in disbelief.",
    background: "images/RainMoney.png",

    choices: [

        {
            text: `

            Pull over and help yourself to the flying money.

            <br>

            <span class="stamina"> -12</span>

            <span class="fuel"> +12</span>

            <span class="money"> +60</span>
            `,

            effect: {
                stamina: -12,
                fuel: 12,
                money: 60
            }
        },

        {
            text: `Slow driving lets someone grab roadside cash.<br>

            <span class="fuel"> -12</span>

            <span class="money"> +30</span>

            <span class="morale"> +15</span>

            `,

            effect: {
                fuel: -12,
                money: 30,
                morale: 15
            }
        }

    ]
},

    {
    title: "The Suspicious Lottery Vendor",

    description:"At a dusty roadside market, a cheerful vendor offers the last 'Ultra Fortune Road Trip Tickets,' claiming one holds an unbelievable prize. The situation seems suspicious, yet the vendor’s confidence and sparkling tickets quickly capture everyone’s attention and curiosity.",

    background: "images/Vendor.png",

    choices: [

        {
            text: `

            Buy one ticket and test your luck.

            <br>

            <span class="money"> +100</span>

            `,

            effect: {
                money: 100
            }
        },

        {
            text: `

            Buy extra tickets just in case.

            <br>

            <span class="fuel"> -12</span>

            <span class="money"> +30</span>

            <span class="morale"> +15</span>

            `,

            effect: {
                fuel: -12,
                money: 30,
                morale: 15
            }
        }

    ]
},

{
    title: "The Witch Market",

    description:"While traveling through a foggy forest, your group discovers a hidden night market selling glowing herbs, bottled lightning, and other strange goods. The bizarre atmosphere leaves everyone wondering whether the vendors are harmless eccentrics or something much more supernatural.",

    background: "images/The Witch Market.png",

    choices: [

        {
            text: `

            Buy the mysterious cursed spoon.

            <br>

            <span class="fuel"> +15</span>

            <span class="money"> -30</span>

            <span class="tension"> -3</span>

            `,

            effect: {
                fuel: 15,
                money: -30,
                tension: -3
            }
        },

        {
            text: `

            Buy glowing frog chocolates.

            <br>

            <span class="stamina"> +12</span>

            <span class="money"> -30</span>

            <span class="morale"> +15</span>

            `,

            effect: {
                stamina: 12,
                money: -30,
                morale: 15
            }
        }

    ]
},

{
    title: "The Suspicious Free Buffet",

    description:"At a roadside rest stop, your group discovers a huge buffet loaded with food beneath a sign reading 'FREE FOR TRAVELERS.' There are no cooks, staff, or explanations. The food smells incredible, but everyone questions whether accepting it is wise.",
    background: "images/Buffet.png",

    choices: [

        {
            text: `

            Eat the mysterious free buffet.

            <br>

            <span class="stamina"> +12</span>

            <span class="money"> -30</span>

            <span class="morale"> -15</span>

            `,

            effect: {
                stamina: 12,
                money: -30,
                morale: -15
            }
        },

        {
            text: `

            Ignore it and keep driving.

            <br>

            <span class="stamina"> -15</span>

            <span class="fuel"> +12</span>

            <span class="morale"> -12</span>

            `,

            effect: {
                stamina: -15,
                fuel: 12,
                morale: -12
            }
        }

    ]
},

{
    title: "The Car Alarm Symphony",

    description:"While stopping for supplies, nearby car alarms suddenly begin sounding one after another. Within moments the parking lot becomes a chaotic orchestra of horns and flashing lights. Drivers stare suspiciously at your group as everyone debates whether to investigate or leave.",

    background: "images/CarAlarm.png",

    choices: [

        {
            text: `

            Stay and investigate the alarms.

            <br>

            <span class="stamina"> -15</span>

            <span class="morale"> +12</span>

            `,

            effect: {
                stamina: -15,
                morale: 12
            }
        },

        {
            text: `

            Leave before things get worse.

            <br>

            <span class="stamina"> +12</span>

            <span class="fuel"> -15</span>

            `,

            effect: {
                stamina: 12,
                fuel: -15
            }
        }

    ]
},

{
    title: "The Mysterious Engine Noise",

    description:"While driving down the highway, the car begins making strange clunking noises from beneath the hood. The vehicle still works normally, but concern spreads through the group. Everyone debates stopping to inspect the problem or continuing toward the next town.",

    background: "images/EngineNoise.png",

    choices: [

        {
            text: `

            Stop and inspect the engine.

            <br>

            <span class="fuel"> +12</span>

            <span class="money"> -30</span>

            <span class="tension"> +6</span>

            `,

            effect: {
                fuel: 12,
                money: -30,
                tension: 6
            }
        },

        {
            text: `

            Ignore it and keep driving.

            <br>

            <span class="stamina"> +12</span>

            <span class="fuel"> -12</span>

            <span class="money"> -60</span>

            `,

            effect: {
                stamina: 12,
                fuel: -12,
                money: -60
            }
        }

    ]
},

{
    title: "The Portal in the Cornfield",

    description:"Passing endless farmland, your group discovers a glowing portal hidden within a cornfield. Strange energy pulses from the floating circle as distant echoes drift through it. Curiosity grows while everyone argues whether entering could be incredible or extremely dangerous.",

    background: "images/Portal.png",
    
    choices: [

        {
            text: `

            Drive straight into the portal.

            <br>

            <span class="fuel"> +15</span>

            <span class="tension"> +6</span>

            `,

            effect: {
                fuel: 15,
                tension: 6
            }
        },

        {
            text: `

            Leave and forget it existed.

            <br>

            <span class="stamina"> +12</span>

            <span class="morale"> -12</span>

            `,

            effect: {
                stamina: 12,
                morale: -12
            }
        }

    ]
},

{
    title: "The Traffic Light",

    description:"Your group reaches an empty intersection where a traffic light remains red for an unusually long time. No other cars appear nearby. As patience wears thin, the pedestrian button suddenly presses itself, making the already strange situation feel even stranger.",

    background: "images/TrafficLights.png",

    choices: [

        {
            text: `

            Wait for the light to change.

            <br>

            <span class="tension"> +12</span>

            `,

            effect: {
                tension: 12
            }
        },

        {
            text: `

            Run the light and move on.

            <br>

            <span class="fuel"> -15</span>

            <span class="money"> -30</span>

            <span class="morale"> +12</span>

            `,

            effect: {
                fuel: -15,
                money: -30,
                morale: 12}
        }

    ]
}

];

function savePlayerData() {

    localStorage.setItem(
        "playerStamina",
        player.stamina
    );

    localStorage.setItem(
        "playerMoney",
        player.money
    );

    localStorage.setItem(
        "playerMorale",
        player.morale
    );

    localStorage.setItem(
        "playerTension",
        player.tension
    );

    localStorage.setItem(
        "carFuel",
        car.fuel
    );

    localStorage.setItem(
        "carDistanceRemaining",
        car.distanceRemaining
    );

    localStorage.setItem(
        "playerDay",
        player.day
    );

}

function loadPlayerData() {

    const savedStamina =
    localStorage.getItem("playerStamina");

    const savedMoney =
    localStorage.getItem("playerMoney");

    const savedMorale =
    localStorage.getItem("playerMorale");

    const savedTension =
    localStorage.getItem("playerTension");

    const savedFuel =
    localStorage.getItem("carFuel");

    const savedDistance =
    localStorage.getItem(
        "carDistanceRemaining"
    );

    const savedDay =
    localStorage.getItem("playerDay");

    if (savedStamina !== null) {
        player.stamina =
        parseInt(savedStamina);
    }

    if (savedMoney !== null) {
        player.money =
        parseInt(savedMoney);
    }

    if (savedMorale !== null) {
        player.morale =
        parseInt(savedMorale);
    }

    if (savedTension !== null) {
        player.tension =
        parseInt(savedTension);
    }

    if (savedFuel !== null) {
        car.fuel =
        parseInt(savedFuel);
    }

    if (savedDistance !== null) {
        car.distanceRemaining =
        parseInt(savedDistance);
    }

    if (savedDay !== null) {
        player.day = 
        parseInt(savedDay);
    }

}