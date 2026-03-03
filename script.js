// 1. DATA - Declared ONLY ONCE
const playerStats = {
    "Quinton de Kock": { runs: 312, sr: 148.5, bio: "Veteran opener looking for a final trophy." },
    "Sanju Samson": { runs: 412, sr: 165.2, bio: "In the form of his life. Key for India." },
    "Rachin Ravindra": { runs: 345, sr: 168.2, bio: "The rising star of 2026 cricket." }
};

// 2. OPEN STATS
window.openStats = function(name) {
    console.log("Opening stats for:", name); // Check your console (F12)
    const modal = document.getElementById("playerModal");
    const body = document.getElementById("modalBody");
    const data = playerStats[name];

    if (data && modal) {
        body.innerHTML = `
            <h2 style="color:#f59e0b">${name}</h2>
            <p style="margin:15px 0; color:#cbd5e1">${data.bio}</p>
            <div style="display:flex; gap:10px; justify-content:center;">
                <div style="background:#0f172a; padding:10px; border-radius:8px; flex:1;">
                    <b style="font-size:1.2rem">${data.runs}</b><br><small>RUNS</small>
                </div>
                <div style="background:#0f172a; padding:10px; border-radius:8px; flex:1;">
                    <b style="font-size:1.2rem">${data.sr}</b><br><small>S/R</small>
                </div>
            </div>
        `;
        modal.style.display = "block";
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
window.addEventListener('click', function(event) {
    const newsModal = document.getElementById('newsModal');
    const playerModal = document.getElementById('playerModal');
    
    // If the user clicks the dark area (the modal itself), close it
    if (event.target === newsModal || event.target === playerModal) {
        window.closeNews();
    }
});
