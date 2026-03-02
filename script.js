/* =========================================
   1. NEWS MODAL LOGIC
   ========================================= */
function openNews(title, description, imgSrc) {
    const modal = document.getElementById('newsModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');

    if (modal && modalTitle && modalDesc && modalImg) {
        modalTitle.innerText = title;
        modalDesc.innerText = description;
        modalImg.src = imgSrc;
        modal.style.display = 'block';
        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    }
}

function closeNews() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close Modal if user clicks outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target == modal) {
        closeNews();
    }
}

/* =========================================
   2. COUNTDOWN TIMER (For Home Page)
   ========================================= */
function updateTimer() {
    // Target: March 8, 2026 (The Grand Finale)
    const targetDate = new Date("March 8, 2026 19:30:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap > 0) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        // Update HTML if elements exist
        if(document.getElementById('days')) document.getElementById('days').innerText = d;
        if(document.getElementById('hours')) document.getElementById('hours').innerText = h;
        if(document.getElementById('minutes')) document.getElementById('minutes').innerText = m;
        if(document.getElementById('seconds')) document.getElementById('seconds').innerText = s;
    }
}

// Run timer every second
setInterval(updateTimer, 1000);

/* =========================================
   3. WIN PROBABILITY BAR ANIMATION
   ========================================= */
function animateWinBars() {
    const bars = document.querySelectorAll('.edge-fill');
    bars.forEach(bar => {
        const percentage = bar.getAttribute('data-win'); // Needs data-win="60%" in HTML
        if(percentage) {
            bar.style.width = percentage;
        }
    });
}

/* =========================================
   4. INITIALIZE ON LOAD
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    animateWinBars();
    
    console.log("Cric Pulse JS Loaded - Ready for 2026 World Cup!");
});
