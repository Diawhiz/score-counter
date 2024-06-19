let count1 = 0;
let count2 = 0;

// Get the player elements
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

// Get the <p> elements inside the player elements
const player1P = player1.querySelector('p');
const player2P = player2.querySelector('p');

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
