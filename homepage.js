document.addEventListener("DOMContentLoaded", function() {
    const bottone = document.getElementById("projects");
    if (bottone) {
        bottone.addEventListener("click", function() {
            window.location.href = "projects.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const bottone = document.getElementById("homepage");
    if (bottone) {
        bottone.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function (){
    document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }})


document.addEventListener("DOMContentLoaded", function (){
    const cursor = document.querySelector(".invertedcursor");
    const hoverTargets = document.querySelectorAll(".marquee-container");
    hoverTargets.forEach(target => {
    // Quando il mouse entra, ingrandisce il cursore
    target.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-large");
    });

    // Quando il mouse esce, torna normale
    target.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-large");
    });
});})