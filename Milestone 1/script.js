// script.ts
document.addEventListener("DOMContentLoaded", function () {
    // Select the toggle button and skills list
    var toggleButton = document.getElementById("toggle-skills");
    var skillsList = document.getElementById("skills-list");
    // Check if both elements are available
    if (toggleButton && skillsList) {
        // Toggle the visibility of the Skills section on button click
        toggleButton.addEventListener("click", function () {
            skillsList.classList.toggle("hidden");
            toggleButton.textContent = skillsList.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
        });
    }
});
