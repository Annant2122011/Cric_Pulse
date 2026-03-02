// News Modal Logic
function openNews(title, desc, img) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-img').src = img;
    document.getElementById('newsModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeNews() {
    document.getElementById('newsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Countdown Logic
function updateTimer() {
    const target = new Date("March 8, 2026 19:00:00").getTime();
    const now = new Date().getTime();
    const gap = target - now;
    if (gap > 0) {
        const d = Math.floor(gap / (1000 * 60 * 60 * 24));
        if (document.getElementById('days')) document.getElementById('days').innerText = d;
    }
}

setInterval(updateTimer, 1000);
window.onclick = (e) => { if (e.target.id === 'newsModal') closeNews(); }
