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
    
    // Safety check to ensure the modal exists in HTML
    if (modal) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Lock background scroll
    }
}

function closeNews() {
    document.getElementById('newsModal').style.display = "none";
    document.body.style.overflow = "auto"; // Unlock background scroll
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
function showVenuePopup() {
    document.getElementById('venuePopup').style.display = 'block';
}

function closeVenuePopup() {
    document.getElementById('venuePopup').style.display = 'none';
}

// Close popup if user clicks outside of it
window.onclick = function(event) {
    let modal = document.getElementById('venuePopup');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// Target dates in IST
// Target dates
const sf1Date = new Date("March 4, 2026 19:00:00").getTime();
const sf2Date = new Date("March 5, 2026 19:00:00").getTime();
const finalDate = new Date("March 8, 2026 19:00:00").getTime();

function updateTimers() {
    const now = new Date().getTime();

    function formatTime(target, elementId) {
        const distance = target - now;
        const element = document.getElementById(elementId);
        
        if (!element) return;

        if (distance < 0) {
            element.innerHTML = "LIVE / COMPLETED";
            return;
        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        element.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }

    formatTime(sf1Date, "timer1");
    formatTime(sf2Date, "timer2");
    formatTime(finalDate, "timerFinal");
}

setInterval(updateTimers, 1000);
function showVenuePopup() {
    console.log("Opening Popup..."); // This helps you check if the click is working
    document.getElementById('venuePopup').style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}
<script>
    // OPEN THE POPUP
    function openVenuePopup() {
        const modal = document.getElementById('venuePopup');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Stop background scroll
        } else {
            console.error("Error: Could not find an element with id='venuePopup'");
        }
    }

    // CLOSE THE POPUP
    function closeVenuePopup() {
        const modal = document.getElementById('venuePopup');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore background scroll
        }
    }

    // CLOSE IF USER CLICKS OUTSIDE THE BOX
    window.onclick = function(event) {
        const modal = document.getElementById('venuePopup');
        if (event.target == modal) {
            closeVenuePopup();
        }
    }
</script>
