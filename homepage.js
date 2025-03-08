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