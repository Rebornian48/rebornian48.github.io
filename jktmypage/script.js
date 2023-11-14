var rp = document.getElementById('rp');

rp.onclick = function(){
    document.getElementById('arrival_count').innerHTML = Math.floor(Math.random() * 1000) + ' kali';
    document.getElementById('points_1').innerHTML = Math.floor(Math.random() * 10000000) + ' P';
    document.getElementById('points_2').innerHTML = Math.floor(Math.random() * 10000000) + ' P';
    document.getElementById('bp_1').innerHTML = Math.floor(Math.random() * 10000000) + ' P';
    document.getElementById('bp_2').innerHTML = Math.floor(Math.random() * 10000000) + ' P';
}