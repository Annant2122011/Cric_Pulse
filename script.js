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

// 2. OPEN STATS
// 2. OPEN STATS
window.openStats = function(name) {
    console.log("Attempting to open stats for:", name);
    const modal = document.getElementById("playerModal");
    const body = document.getElementById("modalBody");
    const data = playerStats[name];

    if (!data) {
        console.error("No data found for: " + name);
        // Alert will help you find typos in player names
        alert("Stats for " + name + " are coming soon!"); 
        return;
    }

    if (modal && body) {
        body.innerHTML = `
            <h2 style="color:#f59e0b; margin-bottom:10px; font-size:2rem;">${name}</h2>
            <p style="margin-bottom:20px; color:#cbd5e1; font-style:italic;">"${data.bio}"</p>
            <div style="display:flex; gap:15px; justify-content:center;">
                <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; flex:1; border:1px solid rgba(255,255,255,0.1);">
                    <b style="font-size:1.6rem; display:block; color:white;">${data.runs || data.wickets}</b>
                    <small style="color:#f59e0b; font-weight:bold; letter-spacing:1px;">${data.runs ? 'RUNS' : 'WKTS'}</small>
                </div>
                <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; flex:1; border:1px solid rgba(255,255,255,0.1);">
                    <b style="font-size:1.6rem; display:block; color:white;">${data.sr || data.econ}</b>
                    <small style="color:#f59e0b; font-weight:bold; letter-spacing:1px;">${data.sr ? 'S/R' : 'ECON'}</small>
                </div>
            </div>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Stop background scroll
    }
};

// 3. CLOSE MODALS
// 3. MASTER CLOSE FUNCTION (Fixed Naming)
window.closeNews = function() {
    console.log("Close trigger activated"); // Check F12 to see this
    
    const newsModal = document.getElementById("newsModal");
    const playerModal = document.getElementById("playerModal");

    if (newsModal) newsModal.style.display = "none";
    if (playerModal) playerModal.style.display = "none";
    
    // Re-enable scrolling
    document.body.style.overflow = "auto";
};
// 4. NEWS FUNCTION (Restored)
window.openNews = function(title, desc, img) {
    const modal = document.getElementById('newsModal');
    if (modal) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        modal.style.display = "block";
    }
};

// Initialize
window.onclick = function(event) {
    const newsModal = document.getElementById('newsModal');
    const playerModal = document.getElementById('playerModal');
    
    if (event.target == newsModal || event.target == playerModal) {
        // Change this to match your close function name
        window.closeNews(); 
    }
};
