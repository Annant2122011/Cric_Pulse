// Countdown Logic for India vs England (March 5, 2026)
const countdown = () => {
    const countDate = new Date("March 5, 2026 19:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);

    document.getElementById("days").innerText = textDay;
    document.getElementById("hours").innerText = textHour;
    document.getElementById("mins").innerText = textMinute;
};

// Update every second
setInterval(countdown, 1000);

// Simple Poll Function
function vote(team) {
    document.getElementById('poll').style.opacity = '0.5';
    document.getElementById('poll').style.pointerEvents = 'none';
    document.getElementById('vote-thanks').style.display = 'block';
    document.getElementById('vote-thanks').innerText = "Voted for " + team + "! Current trend: India 64%";
}
