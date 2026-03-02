/* --- DYNAMIC TICKER UPDATE --- */
function updateTicker(messages) {
    const tickerContainer = document.querySelector('.ticker');
    if (tickerContainer) {
        tickerContainer.innerHTML = ''; // Clear old news
        messages.forEach(msg => {
            const item = document.createElement('div');
            item.className = 'ticker__item';
            item.innerText = msg;
            tickerContainer.appendChild(item);
        });
    }
}

// Example: Calling it to update scores
// updateTicker(["IND 184/4 (20)", "ENG need 185 to win", "SKY hits 84*"]);
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
