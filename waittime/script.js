var date = new Date();
document.getElementById("year").innerText = date.getFullYear();
document.getElementById("last-updated").innerText = date.toLocaleDateString("id-ID") + " " + date.toLocaleTimeString("id-ID");

function countdownTimer() {
    const difference = +new Date("2024-01-01") - +new Date();
    let remaining = "Selamat Tahun Baru 2024";

    if (difference > 0) {
        const parts = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
        };
        remaining = "Perkiraan waktu tunggu : " + Object.keys(parts).map(part => {
        return `${parts[part]} ${part}`;  
        }).join(" ");
    }

    document.getElementById("waitTime").innerHTML = remaining;
}

countdownTimer();
setInterval(countdownTimer, 1000);