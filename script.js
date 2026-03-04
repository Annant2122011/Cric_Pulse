// 1. DATA - Declared ONLY ONCE
// 1. DATA - Declared ONLY ONCE (Updated with all players)
const playerStats = {
    // South Africa
    "Quinton de Kock": { runs: 312, sr: 148.5, bio: "Veteran opener looking for a final trophy." },
    "Ryan Rickelton": { runs: 185, sr: 135.2, bio: "Aggressive young talent at the top." },
    "Aiden Markram": { runs: 240, sr: 142.1, bio: "The tactical captain of the Proteas." },
    "Heinrich Klaasen": { runs: 288, sr: 188.4, bio: "The most dangerous spin-hitter in the world." },
    "David Miller": { runs: 195, sr: 155.0, bio: "The 'Killer' finisher for South Africa." },

    // New Zealand
    "Devon Conway": { runs: 290, sr: 132.5, bio: "The technical anchor for the BlackCaps." },
    "Rachin Ravindra": { runs: 345, sr: 168.2, bio: "The rising superstar of world cricket." },
    "Mark Chapman": { runs: 160, sr: 140.0, bio: "Middle-over specialist against pace." },
    "Glenn Phillips": { runs: 210, sr: 162.3, bio: "High-energy fielder and power hitter." },
    "Trent Boult": { wickets: 14, econ: 6.8, bio: "The king of the swinging new ball." },

    // India
    "Abhishek Sharma": { runs: 245, sr: 193.5, bio: "India's most explosive powerplay weapon." },
    "Sanju Samson": { runs: 412, sr: 165.2, bio: "In the form of his life. Key for India." },
    "Suryakumar Yadav": { runs: 310, sr: 175.4, bio: "The 360-degree magician and captain." },
    "Hardik Pandya": { runs: 188, sr: 158.2, bio: "The engine that balances the Indian team." },
    "Jasprit Bumrah": { wickets: 12, econ: 5.4, bio: "The world's best death-over bowler." },

    // England
    "Phil Salt": { runs: 280, sr: 185.0, bio: "Fearless opener who strikes from ball one." },
    "Jos Buttler": { runs: 342, sr: 158.0, bio: "World-class leader and match-winner." },
    "Harry Brook": { runs: 225, sr: 160.4, bio: "Technically gifted middle-order engine." },
    "Jofra Archer": { wickets: 11, econ: 7.1, bio: "Raw pace capable of breaking any game." },
    "Mark Wood": { wickets: 9, econ: 7.8, bio: "Pure high-velocity bowling from the North." }
};

window.openStats = function(name) {
    const modal = document.getElementById("playerModal");
    const body = document.getElementById("modalBody");
    const data = playerStats[name];

    if (data) {
        body.innerHTML = `
            <div style="text-align:center">
                <span style="color:var(--gold); font-weight:800; font-size:0.8rem;">OFFICIAL PLAYER CARD</span>
                <h2 style="font-size:2rem; margin:10px 0;">${name}</h2>
                <p style="color:#94a3b8; font-style:italic; margin-bottom:20px;">"${data.bio}"</p>
                
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                    <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:15px; border:1px solid rgba(255,255,255,0.1);">
                        <div style="font-size:2.2rem; font-weight:900; color:white;">${data.runs || data.wickets}</div>
                        <div style="font-size:0.7rem; color:var(--gold); letter-spacing:1px;">${data.runs ? 'TOTAL RUNS' : 'WICKETS'}</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:15px; border:1px solid rgba(255,255,255,0.1);">
                        <div style="font-size:2.2rem; font-weight:900; color:white;">${data.sr || data.econ}</div>
                        <div style="font-size:0.7rem; color:var(--gold); letter-spacing:1px;">${data.sr ? 'STRIKE RATE' : 'ECONOMY'}</div>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = "block";
    }
};
// 3. MASTER CLOSE (Renamed to match your HTML)
window.closeNews = function() {
    const pModal = document.getElementById("playerModal");
    const nModal = document.getElementById("newsModal");
    if (pModal) pModal.style.display = "none";
    if (nModal) nModal.style.display = "none";
    document.body.style.overflow = "auto";
};

// 4. NEWS FUNCTION (Added safety check)
window.openNews = function(title, desc, img) {
    const modal = document.getElementById('newsModal');
    const titleEl = document.getElementById('modal-title');
    if (modal && titleEl) {
        titleEl.innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
};

// Background click to close
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        window.closeNews();
    }
};
