/* =========================================
   1. NEWS MODAL SYSTEM
   ========================================= */

/**
 * Opens a modal with specific news details.
 * Prevents body scrolling to improve UX.
 */
function openNews(title, description, imgSrc) {
    const modal = document.getElementById('newsModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');

    if (modal && modalTitle && modalDesc && modalImg) {
        modalTitle.innerText = title;
        modalDesc.innerText = description;
        modalImg.src = imgSrc;
        
        // Show modal with a smooth fade
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }
}

/**
 * Closes the news modal and restores scrolling.
 */
function closeNews() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    }
}

// Global listener: Close modal if user clicks outside the content box
window.addEventListener('click', (event) => {
    const modal = document.getElementById('newsModal');
    if (event.target === modal) {
        closeNews();
    }
});


/* =========================================
   2. WORLD CUP FINAL COUNTDOWN
   ========================================= */

function updateTimer() {
    // Target: The Grand Finale in Ahmedabad - March 8, 2026
    const targetDate = new Date("March 8, 2026 19:00:00").getTime();
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

        // Update HTML elements (checks if they exist on current page)
        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');

        if (dEl) dEl.innerText = d;
        if (hEl) hEl.innerText = h;
        if (mEl) mEl.innerText = m;
        if (sEl) sEl.innerText = s;
    } else {
        // If the date has passed
        const countdownContainer = document.querySelector('.countdown-container');
        if (countdownContainer) countdownContainer.innerHTML = "<h2>The Final is LIVE!</h2>";
    }
}

// Run the timer every second
setInterval(updateTimer, 1000);


/* =========================================
   3. WIN PROBABILITY BAR (FACE-OFF PAGE)
   ========================================= */

function animateWinBars() {
    const bars = document.querySelectorAll('.edge-fill');
    bars.forEach(bar => {
        // Reads the 'data-win' attribute from your HTML
        const percentage = bar.getAttribute('data-win'); 
        if (percentage) {
            // Apply width with a delay for a smooth 'fill' effect on load
            setTimeout(() => {
                bar.style.width = percentage;
            }, 500);
        }
    });
}


/* =========================================
   4. PAGE INITIALIZATION
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize functions
    updateTimer();
    animateWinBars();
    
    // Log for debugging
    console.log("Cric Pulse v2.0 | System Online | 2026 World Cup Mode");
});
