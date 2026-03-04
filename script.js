// 1. DATA - Declared ONLY ONCE
// 1. DATA - Declared ONLY ONCE (Updated with all players)
const playerStats = {
    // BATTERS
    "Quinton de Kock": { runs: 312, sr: 148.5, avg: 39.0, sixes: 18, high: "81*", impact: "92%", bio: "Aggressive opener who targets the powerplay." },
    "Devon Conway": { runs: 290, sr: 132.5, avg: 48.3, sixes: 9, high: "74", impact: "85%", bio: "Technical master who anchors the innings." },
    "Heinrich Klaasen": { runs: 288, sr: 188.4, avg: 41.1, sixes: 22, high: "67*", impact: "98%", bio: "The world's most dangerous spin destroyer." },
    "Rachin Ravindra": { runs: 345, sr: 168.2, avg: 43.1, sixes: 15, high: "101*", impact: "95%", bio: "Young phenom with all-round dominance." },
    
    // BOWLERS
    "Kagiso Rabada": { wickets: 13, econ: 7.2, dots: 88, best: "3/18", speed: "148kmh", impact: "89%", bio: "South Africa's premier pace weapon." },
    "Trent Boult": { wickets: 14, econ: 6.8, dots: 94, best: "4/22", speed: "142kmh", impact: "91%", bio: "King of swing and early breakthroughs." },
    "Keshav Maharaj": { wickets: 9, econ: 6.1, dots: 102, best: "2/15", speed: "Spin", impact: "84%", bio: "Unmatched control in the middle overs." },
    "Mitchell Santner": { wickets: 10, econ: 6.3, dots: 98, best: "3/20", speed: "Spin", impact: "87%", bio: "New Zealand's tactical left-arm genius." }

    // INDIA
    "Abhishek Sharma": { runs: 245, sr: 193.5, avg: 35.0, sixes: 24, high: "66", impact: "94%", bio: "India's most explosive powerplay weapon." },
    "Suryakumar Yadav": { runs: 310, sr: 175.4, avg: 44.2, sixes: 19, high: "82*", impact: "97%", bio: "The 360-degree magician and Indian captain." },
    "Jasprit Bumrah": { wickets: 12, econ: 5.4, dots: 110, best: "3/11", speed: "145kmh", impact: "99%", bio: "The world's undisputed king of death bowling." },
    "Mohammed Siraj": { wickets: 8, econ: 7.8, dots: 82, best: "2/24", speed: "142kmh", impact: "82%", bio: "The Miya-Magic pace spearhead for the powerplay." },

    // ENGLAND
    "Phil Salt": { runs: 280, sr: 185.0, avg: 31.1, sixes: 21, high: "78", impact: "91%", bio: "Fearless opener who strikes from ball one." },
    "Jos Buttler": { runs: 342, sr: 158.0, avg: 52.6, sixes: 14, high: "94*", impact: "96%", bio: "World-class leader and clinical match-winner." },
    "Jofra Archer": { wickets: 11, econ: 7.1, dots: 95, best: "3/19", speed: "151kmh", impact: "93%", bio: "Raw pace capable of breaking any batting lineup." },
    "Mark Wood": { wickets: 9, econ: 7.8, dots: 76, best: "2/30", speed: "155kmh", impact: "88%", bio: "Pure high-velocity bowling and intimidation." }
};

window.openStats = function(name) {
    const modal = document.getElementById("playerModal");
    const body = document.getElementById("modalBody");
    const d = playerStats[name];

    if (d && modal && body) {
        const isBowler = d.wickets !== undefined;
        
        body.innerHTML = `
            <div class="premium-stat-card">
                <span class="role-tag">${isBowler ? 'BOWLER' : 'BATTER'}</span>
                <h2 class="modal-p-name">${name}</h2>
                <div class="impact-bar-container">
                    <span>IMPACT RATING</span>
                    <div class="impact-bar"><div style="width:${d.impact}"></div></div>
                    <span class="impact-val">${d.impact}</span>
                </div>

                <div class="stats-grid-main">
                    <div class="s-box"><b>${isBowler ? d.wickets : d.runs}</b><p>${isBowler ? 'WICKETS' : 'RUNS'}</p></div>
                    <div class="s-box"><b>${isBowler ? d.econ : d.sr}</b><p>${isBowler ? 'ECONOMY' : 'STR. RATE'}</p></div>
                    <div class="s-box"><b>${isBowler ? d.dots : d.sixes}</b><p>${isBowler ? 'DOTS' : 'SIXES'}</p></div>
                    <div class="s-box"><b>${isBowler ? d.best : d.high}</b><p>${isBowler ? 'BEST' : 'HIGHEST'}</p></div>
                </div>

                <div class="modal-bio">
                    <h3>SCOUTING REPORT</h3>
                    <p>${d.bio}</p>
                </div>
            </div>
        `;
        modal.style.display = "flex";
    }
};
// 3. MASTER CLOSE (Renamed to match your HTML)
window.closeNews = function() {
    const pModal = document.getElementById("playerModal");
    if (pModal) {
        pModal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scroll
    }
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
