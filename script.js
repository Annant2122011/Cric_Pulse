/**
 * CRIC PULSE - MASTER SCRIPT
 * Handles: Countdown, News Modal, and Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. COUNTDOWN LOGIC (Target: March 8, 2026 - T20 WC Final)
    const targetDate = new Date("March 8, 2026 19:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // If the date has passed
        if (distance < 0) {
            const boxes = document.querySelector(".countdown-boxes");
            if (boxes) boxes.innerHTML = "<h2 style='color:#f59e0b;'>FINAL IS LIVE!</h2>";
            return;
        }

        // Time calculations
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // Leading zero helper
        const format = (num) => num < 10 ? `0${num}` : num;

        // Update HTML only if elements exist
        if (document.getElementById("days")) {
            document.getElementById("days").innerText = format(d);
            document.getElementById("hours").innerText = format(h);
            document.getElementById("minutes").innerText = format(m);
            document.getElementById("seconds").innerText = format(s);
        }
    };

    // Run countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call


    // 2. REVEAL ANIMATION (For cards and sections)
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check
});

// 3. NEWS MODAL FUNCTIONS (Global scope for onclick)
function openNews(title, desc, img) {
    const modal = document.getElementById('newsModal');
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-desc');
    const mImg = document.getElementById('modal-img');

    if (modal && mTitle && mDesc && mImg) {
        mTitle.innerText = title;
        mDesc.innerText = desc;
        mImg.src = img;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Stop scrolling
    }
}

function closeNews() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Resume scrolling
    }
}

// Close modal if user clicks outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target == modal) {
        closeNews();
    }
};

// Close modal on 'Escape' key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeNews();
});
