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
        remaining = Object.keys(parts).map(part => {
        return `${parts[part]} ${part}`;  
        }).join(" ");
    }
    document.getElementById("waitTime").innerHTML = remaining;
}
countdownTimer();

var modal = document.getElementById("myModal");
var btn = document.getElementById("change");
var kirim = document.getElementById("kirim");

btn.onclick = function () {
    pesan.style.display = 'block';
    kirim.style.display = 'block';
    btn.style.display = 'none';
}

kirim.addEventListener('click', () => {
    var pesan = document.getElementById("pesan");
    var wait = document.getElementById("waitTime");
    var newText = pesan.value;
    wait.innerText = newText;
    function countdownTimer(){};
    pesan.style.display = 'none';
    kirim.style.display = 'none';
    btn.style.display = 'block';
})