const targetDate = new Date("March 5, 2026 19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("d").innerText = days.toString().padStart(2, '0');
    document.getElementById("h").innerText = hours.toString().padStart(2, '0');
    document.getElementById("m").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("s").innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
