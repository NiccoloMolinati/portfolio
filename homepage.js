document.addEventListener("DOMContentLoaded", function() {
    const bottone = document.getElementById("projects");
    if (bottone) {
        bottone.addEventListener("click", function() {
            window.location.href = "projects.html";
        });
    }
});