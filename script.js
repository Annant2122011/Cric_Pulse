/* --- SCROLL REVEAL LOGIC --- */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

/* Run once on load to show items already in view */
document.addEventListener('DOMContentLoaded', () => {
    reveal();
    console.log("Visual Engine Optimized.");
});

/* --- MODAL POLISH --- */
function openNews(title, desc, img) {
    const modal = document.getElementById('newsModal');
    // ... existing logic ...
    modal.style.display = 'flex'; // Centered flex for better UI
    modal.classList.add('fade-in');
}
