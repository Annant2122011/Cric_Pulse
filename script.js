// 1. COUNTDOWN LOGIC
const targetDate = new Date("March 8, 2026 19:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    const format = (num) => num < 10 ? `0${num}` : num;

    if(document.getElementById("days")) {
        document.getElementById("days").innerText = format(d);
        document.getElementById("hours").innerText = format(h);
        document.getElementById("minutes").innerText = format(m);
        document.getElementById("seconds").innerText = format(s);
    }
}, 1000);

// 2. MODAL LOGIC
function openNews(title, desc, img) {
    const modal = document.getElementById('newsModal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-img').src = img;
    modal.style.display = "block";
}

function closeNews() {
    document.getElementById('newsModal').style.display = "none";
}

// Close if clicked outside
window.onclick = function(event) {
    if (event.target == document.getElementById('newsModal')) {
        closeNews();
    }
}
