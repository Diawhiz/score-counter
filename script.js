let count1 = 0;
let count2 = 0;
let timer;
let secondsElapsed = 0;

// Get the player elements
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

// Get the <p> elements inside the player elements
const player1P = player1.querySelector('p');
const player2P = player2.querySelector('p');

const startTimer = document.getElementById('start');
const resetTimer = document.getElementById('reset');
const resetAll = document.getElementById('reset-all');

// Function to handle click events on player elements
function handlePlayerClick(event, countElement, count) {
    // Increment the count and update the text content
    count++;
    countElement.textContent = count;
}

// Add click event listener to the first player
player1.addEventListener('click', function(event) {
    handlePlayerClick(event, document.getElementById('count1'), count1);
    count1++;
});

// Add click event listener to the second player
player2.addEventListener('click', function() {
    handlePlayerClick(event, document.getElementById('count2'), count2);
    count2++;
});

// Add click event listener to the <p> elements to stop propagation
player1P.addEventListener('click', function(event) {
    event.stopPropagation();
});

player2P.addEventListener('click', function(event) {
    event.stopPropagation();
});

//event listener set the timer to action when the play button is clicked
startTimer.addEventListener('click', function(){
    secondsElapsed++

    if (timer) {
        clearInterval(timer);
    }

     // Start the timer
    timer = setInterval(() => {
        secondsElapsed++;
        updateTimerDisplay(secondsElapsed);
    }, 1000); // Update every second (1000 milliseconds)

});

resetTimer.addEventListener('click', function() {
    clearInterval(timer);
    secondsElapsed = 0;
    updateTimerDisplay(secondsElapsed);
});

//The function updates timer a
function updateTimerDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById('timer').innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

resetAll.addEventListener('click', function() {
    clearInterval(timer);
    secondsElapsed = 0;
    updateTimerDisplay(secondsElapsed);

    count1 = 0;
    count2 = 0;
});