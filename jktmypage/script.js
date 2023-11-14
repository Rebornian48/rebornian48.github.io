var rp = document.getElementById('rp');
var ro = document.getElementById('ro');

rp.onclick = function(){
    document.getElementById('arrival_count').innerHTML = Math.floor(Math.random() * 1000).toLocaleString('id') + ' kali';
    document.getElementById('points_1').innerHTML = Math.floor(Math.random() * 10000000).toLocaleString('id') + ' P';
    document.getElementById('points_2').innerHTML = Math.floor(Math.random() * 10000000).toLocaleString('id') + ' P';
    document.getElementById('bp_1').innerHTML = Math.floor(Math.random() * 10000000).toLocaleString('id') + ' P';
    document.getElementById('bp_2').innerHTML = Math.floor(Math.random() * 10000000).toLocaleString('id') + ' P';
}

ro.onclick = function(){
    var oshimen = ["Tidak punya Oshimen", "Adzana Shaliha", "Alya Amanda", "Amanda Sukma", "Angelina Christy", "Anindya Ramadhani", "Aurellia", "Azizi Asadel", "Callista Alifia", "Cathleen Nixie", "Celline Thefani", "Chelsea Davina", "Cornelia Vanisa", "Cynthia Yaputera", "Dena Natalia", "Desy Natalia", "Febriola Sinambela", "Feni Fitriyanti", "Fiony Alveria", "Flora Shafiq", "Freya Jayawardana", "Gabriela Abigail", "Gendis Mayrannisa", "Gita Sekar Andarini", "Grace Octaviani", "Greesella Adhalia", "Helisma Putri", "Indah Cahya", "Indira Seruni", "Jeane Victoria", "Jessica Chandra", "Jesslyn Elly", "Kathrina Irene", "Lulu Salsabila", "Marsha Lenathea", "Michelle Alexandra", "Mutiara Azzahra", "Raisha Syifa", "Reva Fidela", "Shania Gracia", "Shani Indira Natio", "Yessica Tamara"];
    var foto = ["../assets/img/jkt48_logo.svg", "./member/adzana_shaliha.jpg", "./member/alya_amanda.jpg", "./member/amanda_sukma.jpg", "./member/angelina_christy.jpg", "./member/anindya_ramadhani.jpg", "./member/aurellia.jpg", "./member/azizi_asadel.jpg", "./member/callista_alifia.jpg", "./member/cathleen_nixie.jpg", "./member/celline_thefani.jpg", "./member/chelsea_davina.jpg", "./member/cornelia_vanisa.jpg", "./member/cynthia_yaputera.jpg", "./member/dena_natalia.jpg", "./member/desy_natalia.jpg", "./member/febriola_sinambela.jpg", "./member/feni_fitriyanti.jpg", "./member/fiony_alveria.jpg", "./member/flora_shafiq.jpg", "./member/freya_jayawardana.jpg", "./member/gabriela_abigail.jpg", "./member/gendis_mayrannisa.jpg", "./member/gita_sekar_andarini.jpg", "./member/grace_octaviani.jpg", "./member/greesella_adhalia.jpg", "./member/helisma_putri.jpg", "./member/indah_cahya.jpg", "./member/indira_seruni.jpg", "./member/jeane_victoria.jpg", "./member/jessica_chandra.jpg", "./member/jesslyn_elly.jpg", "./member/kathrina_irene.jpg", "./member/lulu_salsabila.jpg", "./member/marsha_lenathea.jpg", "./member/michelle_alexandra.jpg", "./member/mutiara_azzahra.jpg", "./member/raisha_syifa.jpg", "./member/reva_fidela.jpg", "./member/shania_gracia.jpg", "./member/shani_indira_natio.jpg", "./member/yessica_tamara.jpg"];
    var i = Math.floor(Math.random() * oshimen.length);
    document.getElementById('pho').innerHTML = '<img src="'+ foto[i] +'" alt="' + oshimen[i] + '">';
    document.getElementById('namaoshi').innerHTML = oshimen[i];
}