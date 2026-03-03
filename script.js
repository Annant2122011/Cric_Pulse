// Target: T20 World Cup Final - March 8, 2026, 19:00:00 IST
const targetDate = new Date("March 8, 2026 19:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Function to add leading zero (e.g., 05 instead of 5)
    const format = (num) => num < 10 ? `0${num}` : num;

    // Update the UI
    document.getElementById("days").innerText = format(d);
    document.getElementById("hours").innerText = format(h);
    document.getElementById("minutes").innerText = format(m);
    document.getElementById("seconds").innerText = format(s);

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown-boxes").innerHTML = "<h2 style='color:var(--gold);'>FINAL IS LIVE!</h2>";
    }
}, 1000);
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
/**
 * Opens the News Modal with specific content
 * @param {string} title - Headline of the news
 * @param {string} desc - Full description text
 * @param {string} img - URL of the image
 */
function openNews(title, desc, img) {
    const modal = document.getElementById('newsModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');

    if (modal && modalTitle && modalDesc && modalImg) {
        modalTitle.innerText = title;
        modalDesc.innerText = desc;
        modalImg.src = img;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable background scroll
    }
}

/**
 * Closes the News Modal
 */
function closeNews() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scroll
    }
}

// Close modal if user clicks anywhere outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target == modal) {
        closeNews();
    }
}

// Close modal on 'Escape' key press
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeNews();
    }
});
