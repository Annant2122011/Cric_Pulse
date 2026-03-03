/**
 * CRIC PULSE - MASTER SCRIPT
 * Handles: Countdown, News Modal, and Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {
// Function to update the countdown
function startMainCountdown() {
    // Set the date we're counting down to (The Final)
    const countDownDate = new Date("March 8, 2026 19:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in elements with id="days", "hours", etc.
        // We use .padStart(2, '0') to keep the 05, 04, 03 formatting
        if (document.getElementById("days")) {
            document.getElementById("days").innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
        }

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown-boxes").innerHTML = "<h3>MATCH LIVE!</h3>";
        }
    }, 1000);
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', startMainCountdown);


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
  document.addEventListener('DOMContentLoaded', () => {
    // --- 1. POPUP CONTROLS ---
    // Function to open the Match Center Popup
function openVenuePopup() {
    const modal = document.getElementById('venuePopup');
    if (modal) {
        modal.style.display = 'flex'; // Triggers your CSS flex centering
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
    }
}

// Function to close the Match Center Popup
function closeVenuePopup() {
    const modal = document.getElementById('venuePopup');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enables scrolling
    }
}

// Close popup if user clicks the dark overlay area
window.onclick = function(event) {
    const modal = document.getElementById('venuePopup');
    if (event.target == modal) {
        closeVenuePopup();
    }
}

    // --- 2. THE MASTER TIMER ENGINE ---
    const finalDate = new Date("March 8, 2026 19:00:00").getTime();
    const sf2Date = new Date("March 5, 2026 19:00:00").getTime();
    const sf1Date = new Date("March 4, 2026 19:00:00").getTime();

    function updateAllTimers() {
        const now = new Date().getTime();

        // A. HERO SECTION COUNTDOWN (Final)
        const distFinal = finalDate - now;
        if (distFinal > 0) {
            document.getElementById("days").innerText = Math.floor(distFinal / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            document.getElementById("hours").innerText = Math.floor((distFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            document.getElementById("minutes").innerText = Math.floor((distFinal % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            document.getElementById("seconds").innerText = Math.floor((distFinal % (1000 * 60)) / 1000).toString().padStart(2, '0');
        }

        // B. MODAL INDIVIDUAL TIMERS
        const timerConfigs = [
            { id: "timerFinal", date: finalDate },
            { id: "timer2", date: sf2Date },
            { id: "timer1", date: sf1Date }
        ];

        timerConfigs.forEach(conf => {
            const el = document.getElementById(conf.id);
            if (!el) return;
            const dist = conf.date - now;
            
            if (dist < 0) {
                el.innerHTML = "LIVE NOW 🏏";
                el.style.color = "#ef4444"; // Red for live
            } else {
                const d = Math.floor(dist / (1000 * 60 * 60 * 24));
                const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((dist % (1000 * 60)) / 1000);
                el.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
            }
        });
    }

    setInterval(updateAllTimers, 1000);
    updateAllTimers();
});
</script>
