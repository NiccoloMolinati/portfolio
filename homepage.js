function updateCounter() {
    const now = new Date().getTime(); // Ottiene i millisecondi correnti
    document.getElementById("counter").textContent = now; 
}

setInterval(updateCounter, 1);