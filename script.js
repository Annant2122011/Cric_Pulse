// 1. Define Data at the TOP (Global Scope)
const playerStats = {
    // SF1: South Africa
    "Quinton de Kock": { runs: 312, sr: 148.5, sixes: 12, avg: 39.0, bio: "Veteran opener looking for a final trophy." },
    "Ryan Rickelton": { runs: 185, sr: 135.2, sixes: 6, avg: 26.4, bio: "Reliable support at the top order." },
    "Aiden Markram": { runs: 240, sr: 142.1, sixes: 9, avg: 34.2, bio: "Leading the Proteas with tactical brilliance." },
    "Heinrich Klaasen": { runs: 288, sr: 188.4, sixes: 21, avg: 41.1, bio: "The world's most feared spin-hitter." },
    "David Miller": { runs: 195, sr: 155.0, sixes: 11, avg: 48.7, bio: "Proven finisher under extreme pressure." },

    // SF1: New Zealand
    "Devon Conway": { runs: 290, sr: 132.5, sixes: 5, avg: 41.4, bio: "The technical anchor for the BlackCaps." },
    "Rachin Ravindra": { runs: 345, sr: 168.2, sixes: 15, avg: 43.1, bio: "The rising star of 2026 cricket." },
    "Mark Chapman": { runs: 160, sr: 140.0, sixes: 7, avg: 22.8, bio: "Middle-over specialist against pace." },
    "Glenn Phillips": { runs: 210, sr: 162.3, sixes: 14, avg: 30.0, bio: "High-energy fielder and power hitter." },
    "Trent Boult": { wickets: 14, econ: 6.8, dots: 88, avg: 18.2, bio: "The king of the first-over wicket." },

    // SF2: India
    "Abhishek Sharma": { runs: 245, sr: 193.5, sixes: 18, avg: 30.6, bio: "The most explosive opener in the squad." },
    "Sanju Samson": { runs: 412, sr: 165.2, sixes: 22, avg: 58.8, bio: "In the form of his life. Key for India." },
    "Suryakumar Yadav": { runs: 310, sr: 175.4, sixes: 19, avg: 38.7, bio: "The 360-degree magician and captain." },
    "Hardik Pandya": { runs: 188, sr: 158.2, wickets: 8, avg: 26.8, bio: "The engine that keeps India running." },
    "Jasprit Bumrah": { wickets: 12, econ: 5.4, dots: 95, avg: 14.1, bio: "The best death-over bowler on the planet." },

    // SF2: England
    "Phil Salt": { runs: 280, sr: 185.0, sixes: 16, avg: 31.1, bio: "Aggressive opener who targets the powerplay." },
    "Jos Buttler": { runs: 342, sr: 158.0, sixes: 14, avg: 42.7, bio: "World-class leader and match-winner." },
    "Harry Brook": { runs: 225, sr: 160.4, sixes: 10, avg: 37.5, bio: "Technically sound and fast scorer." },
    "Jofra Archer": { wickets: 11, econ: 7.1, speed: "152kph", avg: 20.4, bio: "Raw pace that can dismantle any lineup." },
    "Mark Wood": { wickets: 9, econ: 7.8, speed: "155kph", avg: 24.1, bio: "Pure velocity from the North East." }

};

// 2. Define the function as a Window property
window.openStats = function(playerName) {
    const data = playerStats[playerName];
    const modal = document.getElementById("playerModal");
    const body = document.getElementById("modalBody");

    if (data && modal) {
        body.innerHTML = `
            <div style="text-align:center;">
                <h2 style="color:#facc15; font-size:1.8rem;">${playerName}</h2>
                <p style="color:#94a3b8; font-style:italic; margin-bottom:20px;">${data.bio}</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <div class="stat-box"><strong>${data.runs || data.wickets}</strong><br>${data.runs ? 'Runs' : 'Wickets'}</div>
                    <div class="stat-box"><strong>${data.sr || data.econ}</strong><br>${data.sr ? 'S/R' : 'Econ'}</div>
                </div>
            </div>
        `;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
};/**
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
