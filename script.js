document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn, .btn-back");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const targetId = e.target.getAttribute("data-target");
            showSection(targetId);
        });
    });
});

function showSection(id) {
    document.querySelectorAll(".container, .hidden-section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
