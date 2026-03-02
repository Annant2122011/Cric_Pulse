function updateTimer() {
    const target = new Date("March 5, 2026 19:00:00").getTime();
    const now = new Date().getTime();
    const gap = target - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    document.getElementById("d").innerText = Math.floor(gap / day);
    document.getElementById("h").innerText = Math.floor((gap % day) / hour);
    document.getElementById("m").innerText = Math.floor((gap % hour) / minute);
    document.getElementById("s").innerText = Math.floor((gap % minute) / second);
}
setInterval(updateTimer, 1000);
