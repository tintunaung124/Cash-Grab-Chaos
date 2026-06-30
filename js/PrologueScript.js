const speaker = document.querySelector(".Speaker");
const text = document.querySelector(".Text");
const nextButton = document.querySelector(".NextButton");

let currentLine = 0;

const prologueLines = [
    {
        speaker: "Narrator",
        text: "Summer break has arrived. Unfortunately, the city feels like an oven, and your friends are melting from boredom."
    },
    {
        speaker: "Narrator",
        text: "Amidst the heatwave, someone suggests escaping to the coast for cooler air and beach fun. Everyone loves the idea...."
    },
    {
        speaker: "Narrator",
        text: "...but there's a problem. You are the ONLY one who can drive."
    },
    {
        speaker: "Narrator",
        text: "And so, with no better volunteer available, you accepted the ultimate burden: becoming the designated driver for the entire trip."
    },
    {
        speaker: "Narrator",
        text: "Soon, the car is packed and the road awaits."
    },
    {
        speaker: "Narrator",
        text: "As you embark on this journey, you can't help but wonder: will the beach be worth the drive? Only time will tell......"
    }
]

function displayLine() {
    speaker.textContent = prologueLines[currentLine].speaker;
    text.textContent = prologueLines[currentLine].text;
}

nextButton.addEventListener("click", () => {
    currentLine++;

    if (currentLine < prologueLines.length){
        displayLine();
    }else{
        window.location.href = "Game.html";
    }
});

displayLine();