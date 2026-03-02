// 1. Modal Logic
function openNews(title, desc, img) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;
    document.getElementById("newsModal").style.display = "block";
}

function closeNews() {
    document.getElementById("newsModal").style.display = "none";
}

// 2. Countdown Logic (March 5, 2026)
const target = new Date("March 5, 2026 19:00:00").getTime();

function updateClock() {
    const now = new Date().getTime();
    const diff = target - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("d").innerText = d;
    document.getElementById("h").innerText = h;
    document.getElementById("m").innerText = m;
    document.getElementById("s").innerText = s;
}

setInterval(updateClock, 1000);
updateClock();

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById("newsModal")) {
        closeNews();
        // Open/Close News Modal
function openNews(title, desc, img) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;
    document.getElementById("newsModal").style.display = "block";
}

function closeNews() {
    document.getElementById("newsModal").style.display = "none";
}

// Close modal if user clicks outside
window.onclick = function(event) {
    let modal = document.getElementById("newsModal");
    if (event.target == modal) { modal.style.display = "none"; }
}
    }
}
