console.log("Site loaded");

// example button interaction
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });
});
