/**
 * CRIC PULSE - MASTER SCRIPT (CLEAN & FIXED)
 */

// 1. DATA (Keep this at the very top, declared only ONCE)
const playerStats = {
    "Quinton de Kock": { runs: 312, sr: 148.5, sixes: 12, avg: 39.0, bio: "Veteran opener looking for a final trophy." },
    "Sanju Samson": { runs: 412, sr: 165.2, sixes: 22, avg: 58.8, bio: "In the form of his life. Key for India." },
    "Rachin Ravindra": { runs: 345, sr: 168.2, sixes: 15, avg: 43.1, bio: "The rising star of 2026 cricket." },
    "Jasprit Bumrah": { wickets: 12, econ: 5.4, dots: 95, avg: 14.1, bio: "The best death-over bowler on the planet." },
    "Suryakumar Yadav": { runs: 310, sr: 175.4, sixes: 19, avg: 38.7, bio: "The 360-degree magician and captain." },
    "Aiden Markram": { runs: 240, sr: 142.1, sixes: 9, avg: 34.2, bio: "Leading the Proteas with tactical brilliance." },
    "Ryan Rickelton": { runs: 185, sr: 135.2, sixes: 6, avg: 26.4, bio: "Reliable support at the top order." }
};

// 2. GLOBAL FUNCTIONS (So HTML 'onclick' can find them)

window.openStats = function(playerName) {
    const data = playerStats[playerName];
    const modal = document.getElementById("playerModal");
    const body = document.getElementById("modalBody");

    if (data && modal) {
        body.innerHTML = `
            <div style="text-align:center">
                <h2 style="color:#f59e0b; margin-bottom:5px;">${playerName}</h2>
                <p style="color:#94a3b8; font-style:italic; margin-bottom:20px; font-size:0.9rem;">${data.bio}</p>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.1);">
                        <span style="display:block; font-size:1.5rem; font-weight:800;">${data.runs || data.wickets}</span>
                        <span style="font-size:0.7rem; color:#f59e0b;">${data.runs ? 'RUNS' : 'WKTS'}</span>
                    </div>
                    <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.1);">
                        <span style="display:block; font-size:1.5rem; font-weight:800;">${data.sr || data.econ}</span>
                        <span style="font-size:0.7rem; color:#f59e0b;">${data.sr ? 'S/R' : 'ECON'}</span>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
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
    document.getElementById('newsModal').style.display = "none";
    document.getElementById('playerModal').style.display = "none";
    document.body.style.overflow = "auto";
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // --- TIMER LOGIC ---
    const finalDate = new Date("March 8, 2026 19:00:00").getTime();
    
    function updateTimers() {
        const now = new Date().getTime();
        const distFinal = finalDate - now;
        const daysEl = document.getElementById("days");
        if (daysEl && distFinal > 0) {
            daysEl.innerText = Math.floor(distFinal / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            document.getElementById("hours").innerText = Math.floor((distFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            document.getElementById("minutes").innerText = Math.floor((distFinal % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            document.getElementById("seconds").innerText = Math.floor((distFinal % (1000 * 60)) / 1000).toString().padStart(2, '0');
        }
    }

    // Modal Close button inside Player Modal
    const closePlayerModal = document.querySelector(".close-modal");
    if(closePlayerModal) closePlayerModal.onclick = window.closeNews;

    setInterval(updateTimers, 1000);
    updateTimers();
});
