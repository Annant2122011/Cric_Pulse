/**
 * CRIC PULSE - MASTER SCRIPT
 * Combined: Countdown, Modal Controls, and Reveal Animations
 */

// 1. GLOBAL FUNCTIONS (So HTML onclick can find them)
function openVenuePopup() {
    const modal = document.getElementById('venuePopup');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeVenuePopup() {
    const modal = document.getElementById('venuePopup');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openNews(title, desc, img) {
    const modal = document.getElementById('newsModal');
    if (modal) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeNews() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// 2. SINGLE WINDOW CLICK HANDLER (Prevents conflicts)
window.onclick = function(event) {
    const venueModal = document.getElementById('venuePopup');
    const newsModal = document.getElementById('newsModal');
    if (event.target == venueModal) closeVenuePopup();
    if (event.target == newsModal) closeNews();
};

// 3. INITIALIZATION ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    
    // --- TIMER CONFIGURATION ---
    const finalDate = new Date("March 8, 2026 19:00:00").getTime();
    const sf2Date = new Date("March 5, 2026 19:00:00").getTime();
    const sf1Date = new Date("March 4, 2026 19:00:00").getTime();

    function updateAllTimers() {
        const now = new Date().getTime();

        // A. HERO SECTION COUNTDOWN
        const distFinal = finalDate - now;
        const daysEl = document.getElementById("days");
        
        if (daysEl && distFinal > 0) {
            document.getElementById("days").innerText = Math.floor(distFinal / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            document.getElementById("hours").innerText = Math.floor((distFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            document.getElementById("minutes").innerText = Math.floor((distFinal % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            document.getElementById("seconds").innerText = Math.floor((distFinal % (1000 * 60)) / 1000).toString().padStart(2, '0');
        } else if (distFinal <= 0 && daysEl) {
             document.querySelector(".countdown-boxes").innerHTML = "<h3>MATCH LIVE!</h3>";
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
                el.style.color = "#ef4444";
            } else {
                const d = Math.floor(dist / (1000 * 60 * 60 * 24));
                const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((dist % (1000 * 60)) / 1000);
                el.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
            }
        });
    }

    // --- REVEAL ANIMATION ---
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            closeNews();
            closeVenuePopup();
        }
    });

    // Start Loops
    setInterval(updateAllTimers, 1000);
    updateAllTimers();
    window.addEventListener("scroll", reveal);
    reveal();
});
