const carElement = document.querySelector('.Car');
const carWheel = document.querySelector('.CarWheel');
const background = document.querySelector('.Background');
const highway = document.querySelector('.Highway');
const instruction = document.querySelector('.Instruction');
const eventIcon = document.querySelector('#EventIcon');

const pauseMenu = document.querySelector(".PauseMenu");
const resumeButton = document.getElementById("ResumeButton");
const pauseToHomeButton = document.getElementById("PauseToHomeButton");

let inertiaTimer;
let eventTimer;

let isDriving = false;
let eventActive = false;
let isPaused = false;

function startMovement(){
    if (isDriving || eventActive || isPaused) return;

    isDriving = true;

    clearTimeout(inertiaTimer);
    clearTimeout(eventTimer);

    inertiaTimer = setTimeout(function(){

        if (isPaused) return;

        carElement.classList.add('move');
        carWheel.classList.add('move');
        background.classList.add('move');
        highway.classList.add('move');

        instruction.classList.add('fade-out');
    }, 100);

    eventTimer = setTimeout(function(){
        if (!isPaused){
            triggerEvent();
        }
    }, 2500);
}

function stopMovement(){
    if (!isDriving) return;

    isDriving = false;
    
    clearTimeout(inertiaTimer);
    clearTimeout(eventTimer);

    inertiaTimer = setTimeout(function(){
        carElement.classList.remove('move');
        carWheel.classList.remove('move');
        background.classList.remove('move');
        highway.classList.remove('move');

        instruction.classList.remove('fade-out');    
    }, 400);
}

function forceStop(){
    isDriving = false;

    clearTimeout(inertiaTimer);
    clearTimeout(eventTimer);

    carElement.classList.remove('move');
    carWheel.classList.remove('move');
    background.classList.remove('move');
    highway.classList.remove('move');
}

function pauseGame(){
    if (eventActive) return;

    isPaused = true;

    forceStop();

    pauseMenu.classList.add("active");
}

function resumeGame(){
    isPaused = false;
    pauseMenu.classList.remove("active");
}

function triggerPause(){
    if(eventActive) return;

    if(isPaused){
        resumeGame();
    } else{
        pauseGame();
    }
}

function triggerEvent(){
    eventActive = true;
    forceStop();
    eventIcon.classList.add('show');
}

eventIcon.addEventListener('click', function(){
    window.location.href = 'Event.html';
});

document.addEventListener('keydown', function(event){
    if(!isPaused && (event.key == 'd' || event.key == 'D' || event.key == 'ArrowRight')){
        startMovement();
    }
});

document.addEventListener('keyup', function(event){
    if(event.key == 'd' || event.key == 'D' || event.key == 'ArrowRight'){
        stopMovement();
    }
});

document.addEventListener('keydown', function(event){
    if (event.key === "Escape"){
        triggerPause();
        return;
    }
})

resumeButton.addEventListener('click', function(){
    resumeGame();
});

pauseToHomeButton.addEventListener('click', function(){
    window.location.href = "index.html";
});