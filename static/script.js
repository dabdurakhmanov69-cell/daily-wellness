const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Load saved checkbox states
checkboxes.forEach((checkbox, index) => {
    const savedState = localStorage.getItem(`task-${index}`);

    if (savedState === "true") {
        checkbox.checked = true;
    }

    // Save whenever a checkbox changes
    checkbox.addEventListener("change", () => {
        localStorage.setItem(`task-${index}`, checkbox.checked);
    });
});
