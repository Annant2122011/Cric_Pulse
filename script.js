// Consolidated & fixed script for modals and player stats

// 1. DATA - Declared ONLY ONCE (Updated with all players)
const playerStats = {
    // --- INDIA ---
    "Suryakumar Yadav": { runs: 2432, sr: 167.7, avg: 43.4, sixes: 136, high: "117", impact: "99%", bio: "World No. 1 T20 batter. Known for 360-degree strokeplay." }, // Batter
    "Abhishek Sharma": { runs: 159, sr: 172.8, avg: 22.7, sixes: 12, high: "100", impact: "92%", bio: "Aggressive young opener with a century in his 2nd T20I." }, // Batter
    "Hardik Pandya": { runs: 1523, wickets: 86, sr: 139.1, econ: 8.1, high: "71*", impact: "95%", bio: "Premier all-rounder. India's go-to man for finishing and breakthroughs." }, // All-Rounder
    "Jasprit Bumrah": { wickets: 89, econ: 6.27, dots: 1050, best: "3/11", speed: "145kmh", impact: "99%", bio: "The gold standard of T20 bowling. Lethal at the death." }, // Bowler
    "Arshdeep Singh": { wickets: 87, econ: 8.35, dots: 820, best: "4/37", speed: "140kmh", impact: "88%", bio: "Leading left-arm pacer and powerplay specialist." }, // Bowler

    // --- ENGLAND ---
    "Jos Buttler": { runs: 3140, sr: 144.6, avg: 35.6, sixes: 123, high: "101*", impact: "98%", bio: "One of the greatest white-ball keepers of all time." }, // Batter
    "Phil Salt": { runs: 885, sr: 165.1, avg: 34.0, sixes: 58, high: "119", impact: "94%", bio: "Explosive opener with back-to-back T20I centuries." }, // Batter
    "Sam Curran": { runs: 330, wickets: 52, sr: 121.3, econ: 8.0, high: "27", impact: "89%", bio: "T20 WC 2022 Player of the Tournament. Elite swing bowler." }, // All-Rounder
    "Adil Rashid": { wickets: 122, econ: 7.38, dots: 1120, best: "4/2", speed: "Spin", impact: "93%", bio: "England's most successful T20I leg-spinner." }, // Bowler
    "Jofra Archer": { wickets: 35, econ: 7.55, dots: 420, best: "3/19", speed: "152kmh", impact: "91%", bio: "Raw pace and bounce. A threat in any condition." }, // Bowler

    // --- SOUTH AFRICA ---
    "Quinton de Kock": { runs: 2584, sr: 137.3, avg: 32.7, sixes: 114, high: "100", impact: "92%", bio: "Veteran wicket-keeper batter with immense power." }, // Batter
    "Heinrich Klaasen": { runs: 912, sr: 142.7, avg: 23.4, sixes: 45, high: "81", impact: "96%", bio: "The most destructive batter against spin in middle overs." }, // Batter
    "Aiden Markram": { runs: 1150, wickets: 11, sr: 145.2, econ: 7.5, high: "70", impact: "90%", bio: "Reliable middle-order batter and handy off-spin option." }, // All-Rounder
    "Kagiso Rabada": { wickets: 71, econ: 8.52, dots: 840, best: "3/18", speed: "148kmh", impact: "93%", bio: "Spearhead of the Proteas pace attack." }, // Bowler
    "Anrich Nortje": { wickets: 51, econ: 7.15, dots: 580, best: "4/7", speed: "155kmh", impact: "94%", bio: "Express pace capable of clocking 150kmh+ consistently." }, // Bowler

    // --- NEW ZEALAND ---
    "Devon Conway": { runs: 1408, sr: 126.3, avg: 38.0, sixes: 34, high: "99*", impact: "88%", bio: "Technically sound opener who anchors the Kiwis." }, // Batter
    "Rachin Ravindra": { runs: 231, sr: 134.3, avg: 16.5, sixes: 12, high: "68", impact: "85%", bio: "Rising star with exceptional timing and strokeplay." }, // Batter
    "Mitchell Santner": { runs: 658, wickets: 115, sr: 122.3, econ: 7.02, high: "77*", impact: "92%", bio: "Economical left-arm spinner and handy lower-order hitter." }, // All-Rounder
    "Trent Boult": { wickets: 83, econ: 7.76, dots: 910, best: "4/13", speed: "142kmh", impact: "95%", bio: "Renowned for early swing and precision at the death." }, // Bowler
    "Tim Southee": { wickets: 164, econ: 8.13, dots: 1340, best: "5/18", speed: "138kmh", impact: "94%", bio: "The leading wicket-taker in T20I history." } // Bowler
};
// 2. PLAYER STATS MODAL
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
        document.body.style.overflow = "hidden";
    } else {
        console.warn('Player stats not found for:', name);
    }
};

// 3. NEWS MODAL
window.openNews = function(title, desc, img) {
    const modal = document.getElementById('newsModal');
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-desc');
    const imgEl = document.getElementById('modal-img');

    if (modal && titleEl) {
        titleEl.innerText = title || '';
        if (descEl) descEl.innerText = desc || '';
        if (imgEl) imgEl.src = img || '';
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
};

// 4. IMPROVED CLOSE ALL (With Safety Reset)
window.closeAll = function() {
    const pModal = document.getElementById("playerModal");
    const nModal = document.getElementById("newsModal");
    
    // Explicitly set display to none and remove any 'active' classes
    if (pModal) {
        pModal.style.display = "none";
        pModal.classList.remove("active"); 
    }
    if (nModal) {
        nModal.style.display = "none";
    }
    
    // CRITICAL: Re-enable scrolling on the main page
    document.body.style.overflow = "auto"; 
    document.body.classList.remove("modal-open");
    
    console.log("UI Reset: All modals closed.");
};

// 5. ENHANCED Click Handler
window.addEventListener('click', function(event) {
    // If the user clicks the dark background (the modal itself), close it
    if (event.target.id === 'playerModal' || event.target.id === 'newsModal') {
        window.closeAll();
    }
});

(function () {
  const cards = document.querySelectorAll('.player-card, .clickable-player');

  cards.forEach(card => {
    // add tabindex if not present
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');

    // add role button for screen readers if not present
    if (!card.hasAttribute('role')) card.setAttribute('role', 'button');

    // forward keyboard (Enter / Space) to click() or existing onclick
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // prefer calling onclick if inline exists, else dispatch click
        if (typeof card.onclick === 'function') {
          card.onclick();
        } else {
          card.click();
        }
      }
    });

    // safety: if player-card contains interactive controls, allow normal tabbing
    // (no change; this just avoids double-handling)
  });
})();
window.openNews = function(title, description, imageUrl) {
    // 1. Find the blank elements inside your news modal
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalImg = document.getElementById("modal-img");
    const newsModal = document.getElementById("newsModal");

    // 2. Inject the data passed from the HTML click
    if (modalTitle) modalTitle.innerText = title;
    if (modalDesc) modalDesc.innerText = description;
    
    // 3. Handle the image
    if (modalImg) {
        modalImg.src = imageUrl;
        // Optional safety: hide the image tag if no URL is passed
        modalImg.style.display = imageUrl ? "block" : "none"; 
    }

    // 4. Open the modal
    if (newsModal) {
        newsModal.style.display = "block"; // or "flex", depending on your CSS
    }
    
    // 5. Lock background scrolling
    document.body.style.overflow = "hidden";
};
// 6. SCROLL REVEAL ANIMATION
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the card is visible
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
