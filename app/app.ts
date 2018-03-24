function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
    console.log("Hola Edgar");
}

document.getElementById('startGame').addEventListener('click', startGame);