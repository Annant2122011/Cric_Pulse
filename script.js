/**
 * CRIC PULSE - MASTER SCRIPT (FINAL FIXED VERSION)
 */

// 1. GLOBAL FUNCTIONS (Visible to HTML onclick)
window.openVenuePopup = function() {
    const modal = document.getElementById('venuePopup');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
};

window.closeVenuePopup = function() {
    const modal = document.getElementById('venuePopup');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

window.openNews = function(title, desc, img) {
    const modal = document.getElementById('newsModal');
    if (modal) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
};

window.closeNews = function() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// 2. MAIN INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    
    // --- TIMER CONFIGURATION ---
    const finalDate = new Date("March 8, 2026 19:00:00").getTime();
    const sf2Date = new Date("March 5, 2026 19:00:00").getTime();
    const sf1Date = new Date("March 4, 2026 19:00:00").getTime();

    function updateAllTimers() {
        const now = new Date().getTime();

        // A. HERO SECTION (Front Page)
        const distFinal = finalDate - now;
        const daysEl = document.getElementById("days");
        
        if (daysEl && distFinal > 0) {
            daysEl.innerText = Math.floor(distFinal / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            document.getElementById("hours").innerText = Math.floor((distFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            document.getElementById("minutes").innerText = Math.floor((distFinal % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            document.getElementById("seconds").innerText = Math.floor((distFinal % (1000 * 60)) / 1000).toString().padStart(2, '0');
        } else if (distFinal <= 0 && daysEl) {
             document.querySelector(".countdown-boxes").innerHTML = "<h3>MATCH LIVE!</h3>";
        }

        // B. MODAL INDIVIDUAL TIMERS (Match Center)
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

    // --- REVEAL ANIMATIONS ---
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

    // Close on Outside Click
    window.onclick = function(event) {
        if (event.target.classList.contains('modal-overlay') || event.target.id === 'newsModal') {
            closeVenuePopup();
            closeNews();
        }
    };

    // Close on Escape Key
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
// Keep this OUTSIDE any other functions so openStats can see it
const playerStats = {
    "Quinton de Kock": { runs: 312, sr: 148.5, sixes: 12, avg: 39.0, bio: "Veteran opener looking for a final trophy." },
    "Rachin Ravindra": { runs: 345, sr: 168.2, sixes: 15, avg: 43.1, bio: "The rising star of 2026 cricket." },
    "Abhishek Sharma": { runs: 245, sr: 193.5, sixes: 18, avg: 30.6, bio: "The most explosive opener in the squad." },
    "Sanju Samson": { runs: 412, sr: 165.2, sixes: 22, avg: 58.8, bio: "In the form of his life. Key for India." },
    "Suryakumar Yadav": { runs: 310, sr: 175.4, sixes: 19, avg: 38.7, bio: "The 360-degree magician and captain." },
    "Jasprit Bumrah": { wickets: 12, econ: 5.4, dots: 95, avg: 14.1, bio: "The best death-over bowler on the planet." },
    // Add the rest of your players here following the same format...
};

// Global function so HTML onclick can find it
window.openStats = function(playerName) {
    const data = playerStats[playerName];
    const modal = document.getElementById("playerModal");
    const body = document.getElementById("modalBody");

    if (data) {
        // Use logic to show Runs/SR for Batters or Wickets/Econ for Bowlers
        const primaryStat = data.runs ? 
            `<div class="stat-item"><span class="stat-value">${data.runs}</span><span class="stat-label">Runs</span></div>
             <div class="stat-item"><span class="stat-value">${data.sr}</span><span class="stat-label">SR</span></div>` :
            `<div class="stat-item"><span class="stat-value">${data.wickets}</span><span class="stat-label">Wickets</span></div>
             <div class="stat-item"><span class="stat-value">${data.econ}</span><span class="stat-label">Econ</span></div>`;

        body.innerHTML = `
            <h2 style="color:var(--gold); margin-bottom:5px;">${playerName}</h2>
            <p style="color:#94a3b8; font-style:italic; margin-bottom:20px; font-size:0.9rem;">${data.bio}</p>
            <div class="stat-grid" style="display:grid; grid-template-columns:repeat(2, 1fr); gap:15px;">
                ${primaryStat}
                <div class="stat-item"><span class="stat-value">${data.avg}</span><span class="stat-label">Average</span></div>
                <div class="stat-item"><span class="stat-value">${data.sixes || data.dots}</span><span class="stat-label">${data.sixes ? 'Sixes' : 'Dots'}</span></div>
            </div>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
};
