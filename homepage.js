function updateCounter() {
    const now = new Date().getTime(); // Ottiene i millisecondi correnti
    document.getElementById("counter").textContent = now; 
}

setInterval(updateCounter, 100);

function updateCounter2() {
    const now = new Date().getTime(); // Ottiene i millisecondi correnti
    document.getElementById("counter2").textContent = now + 8674562349723; 
}

setInterval(updateCounter2, 100);

function updateCounter1() {
    const now = new Date().getTime(); // Ottiene i millisecondi correnti
    const upd = now + 1234567890123
    document.getElementById("counter1").textContent = upd; 
}

setInterval(updateCounter1, 100);