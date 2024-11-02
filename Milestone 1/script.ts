// script.ts
document.addEventListener("DOMContentLoaded", () => {
    // Select the toggle button and skills list
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLElement;

    // Check if both elements are available
    if (toggleButton && skillsList) {
        // Toggle the visibility of the Skills section on button click
        toggleButton.addEventListener("click", () => {
            skillsList.classList.toggle("hidden");
            toggleButton.textContent = skillsList.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
        });
    }
});
