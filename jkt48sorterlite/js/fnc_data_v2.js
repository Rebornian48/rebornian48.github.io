﻿// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Seri!';
str_CenterB = 'Ulangi Pilihan Terakhir!';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Defend",
  "Graduates",
  "Generasi 1",
  "Generasi 2 (N/A)",
  "Generasi 3",
  "Generasi 4",
  "Generasi 5",
  "Generasi 6",
  "Generasi 7",
  "Generasi 8",
  "Generasi 9",
  "Generasi 10 (N/A)"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  //Team J
  //[1,"Nama",                                       [D,G,1,2,3,4,5,6,7,8,9,10], "path foto"]
  [1, "Adriani Elisabeth",                           [0,1,0,0,0,1,0,0,0,0,0,0], "G/adriani_elizabeth.jpg"],
  [1, "Amaninah Afiqah",                             [0,1,0,0,0,0,0,0,0,1,0,0], "G/amanina_afiqah.jpg"],
  [1, "Ariella Callista Ichwan",                     [1,0,0,0,0,0,0,1,0,0,0,0], "D/ariel.jpg"],
  [1, "Azizi Asadel",                                [1,0,0,0,0,0,0,0,1,0,0,0], "D/azizi_asadel.jpg"],
  [1, "Cindy Hapsari Maharani Pujiantoro Putri",     [1,0,0,0,0,1,0,0,0,0,0,0], "D/cindy_hapsari.jpg"],
  [1, "Diani Amalia",                                [0,1,0,0,0,0,1,0,0,0,0,0], "G/diani.jpg"],
  [1, "Eve Antoinette Ichwan",                       [1,0,0,0,0,0,1,0,0,0,0,0], "D/eve_antoinette.jpg"], 
  [1, "Feni Fitriyanti",                             [1,0,0,0,1,0,0,0,0,0,0,0], "D/feni_fitriyanti.jpg"],
  [1, "Fransiska Saraswati Puspa Dewi",              [1,0,0,0,1,0,0,0,0,0,0,0], "D/fransisca_saraswati_puspa_dewi.jpg"], 
  [1, "Gabriel Angelina",                            [0,1,0,0,0,0,0,0,1,0,0,0], "G/gabriel_angelina.jpg"],
  [1, "Gabriella Margareth W.",                      [1,0,1,0,0,0,0,0,0,0,0,0], "D/gabriella.jpg"], 
  [1, "Nabila Fitriana",                             [0,1,0,0,0,0,0,0,1,0,0,0], "G/nabila_fitriana.jpg"], 
  [1, "Riska Amelia Putri",                          [0,1,0,0,0,0,0,1,0,0,0,0], "G/riska_amelia_putri.jpg"],
  [1, "Sania Julia Montolalu",                       [0,1,0,0,0,0,1,0,0,0,0,0], "G/sania_julia.jpg"],
  
  //Team KIII
  //[1,"Nama",                                       [D,G,1,2,3,4,5,6,7,8,9,10], "path foto"]
  [1, "Anastasya Narwastu Tety Handuran",            [0,1,0,0,0,0,0,1,0,0,0,0], "G/anastasya_narwastu_tety_handuran.jpg"],  
  [1, "Angelina Christy",                            [1,0,0,0,0,0,0,0,1,0,0,0], "D/angelina_christy.jpg"],  
  [1, "Anindita Rahma Cahyadi",                      [1,0,0,0,1,0,0,0,0,0,0,0], "D/aninditha_rahma_cahyadi.jpg"],  
  [1, "Fidly Imanda Azzahra",                        [0,1,0,0,0,1,0,0,0,0,0,0], "G/fidly_immanda_azzahra.jpg"],
  [1, "Gita Sekar Andarini",                         [1,0,0,0,0,0,0,1,0,0,0,0], "D/gita_sekar_andarini.jpg"],
  [1, "Helisma Mauludzunia Putri",                   [1,0,0,0,0,0,0,0,1,0,0,0], "D/helisma_putri.jpg"],
  [1, "Jinan Safa Safira",                           [1,0,0,0,0,1,0,0,0,0,0,0], "D/jinan_safa_safira.jpg"],
  [1, "Kandiya Rafa Maulidita",                      [0,1,0,0,0,0,0,1,0,0,0,0], "G/kandiya_rafa_maulidita.jpg"],
  [1, "Mutiara Azzahra",                             [1,0,0,0,0,0,0,0,1,0,0,0], "D/mutiara_azzahra.jpg"],
  [1, "Nurhayati",                                   [0,1,0,0,0,0,1,0,0,0,0,0], "G/nurhayati.jpg"],
  [1, "Rinanda Syahputri",                           [0,1,0,0,0,0,0,1,0,0,0,0], "G/rinanda.jpg"],
  [1, "Shani Indira Natio",                          [1,0,0,0,1,0,0,0,0,0,0,0], "D/shani_indira_natio.jpg"],
  [1, "Shania Gracia",                               [1,0,0,0,1,0,0,0,0,0,0,0], "D/shania_gracia.jpg"],
  [1, "Yessica Tamara",                              [1,0,0,0,0,0,0,0,1,0,0,0], "D/yessica_tamara.jpg"],
  [1, "Zahra Nur",                                   [1,0,0,0,0,0,0,0,0,1,0,0], "D/zahra_nur.jpg"],
  
  //Team T
  //[1,"Nama",                                       [D,G,1,2,3,4,5,6,7,8,9,10], "path foto"]
  [1, "Amira Fatin",                                 [1,0,0,0,0,0,0,0,0,1,0,0], "D/amirah_fatin.jpg"],
  [1, "Aurel Mayori",                                [0,1,0,0,0,0,0,0,1,0,0,0], "G/aurel_mayori.jpg"],
  [1, "Cornelia Vanisa",                             [1,0,0,0,0,0,0,0,0,1,0,0], "D/cornelia_vanisa.jpg"],
  [1, "Dhea Angelia",                                [1,0,0,0,0,0,0,0,1,0,0,0], "D/dhea_angelia.jpg"],
  [1, "Febriola Sinambela",                          [1,0,0,0,0,0,0,0,1,0,0,0], "D/febriola_sinambela.jpg"],
  [1, "Fiony Alveria Tantri",                        [1,0,0,0,0,0,0,0,0,1,0,0], "D/fiony_alveria.jpg"],
  [1, "Flora Shafiq",                                [1,0,0,0,0,0,0,0,0,1,0,0], "D/flora_shafiq.jpg"],
  [1, "Freyana Shifa Jayawardhana",                  [1,0,0,0,0,0,0,0,1,0,0,0], "D/freya_jayawardana.jpg"],
  [1, "Jessica Chandra",                             [1,0,0,0,0,0,0,0,1,0,0,0], "D/jessica_chandra.jpg"],
  [1, "Jesslyn Callista",                            [1,0,0,0,0,0,0,0,1,0,0,0], "D/jesslyn_callista.jpg"],
  [1, "Lulu Salsabila",                              [1,0,0,0,0,0,0,0,0,1,0,0], "D/lulu_salsabila.jpg"],
  [1, "Reva Fidela",                                 [1,0,0,0,0,0,0,0,0,1,0,0], "D/reva_fidela.jpg"],
  [1, "Tan Zhi Hui Celine",                          [1,0,0,0,0,1,0,0,0,0,0,0], "D/tan_zhi_hui_celine.jpg"],
  [1, "Umega Maulana Sinambela",                     [0,1,0,0,0,0,0,0,0,1,0,0], "G/umega_maulana.jpg"],
  [1, "Viona Fadrin",                                [0,1,0,0,0,0,0,0,1,0,0,0], "G/viona_fadrin.jpg"],
  
  //Academy class A
  //[1,"Nama",                                       [D,G,1,2,3,4,5,6,7,8,9,10], "path foto"]
  [1, "Cindy Nugroho",                               [0,1,0,0,0,0,0,0,0,1,0,0], "G/cindy_nugroho.jpg"],
  [1, "Febi Komaril",                                [0,1,0,0,0,0,0,0,1,0,0,0], "G/Febi.jpg"],
  [1, "Febrina Diponegoro",                          [0,1,0,0,0,0,0,0,1,0,0,0], "G/febrina.jpg"],
  [1, "Gabriella Stevany H.",                        [0,1,0,0,0,0,0,0,0,1,0,0], "G/gabriella_vany.jpg"],
  [1, "Keisya Ramadhani",                            [0,1,0,0,0,0,0,0,0,1,0,0], "G/keisya.jpg"],
  [1, "Adzana Shaliha",                              [1,0,0,0,0,0,0,0,0,0,1,0], "D/Adzana_Shaliha.jpg"],
  [1, "Chaitlyn Gwyneth",                            [0,1,0,0,0,0,0,0,0,0,1,0], "G/Chaitlyn_Gwyneth.jpg"],
  [1, "Chalista Ellysia",                            [0,1,0,0,0,0,0,0,0,0,1,0], "G/Chalista_Ellysia.jpg"],
  [1, "Christabel Jocelyn",                          [0,1,0,0,0,0,0,0,0,0,1,0], "G/Christabel_Jocelyn.jpg"],
  [1, "Indah Cahya",                                 [1,0,0,0,0,0,0,0,0,0,1,0], "D/indah_cahya.jpg"],
  [1, "Kathrina Irene",                              [1,0,0,0,0,0,0,0,0,0,1,0], "D/kathrina_irene.jpg"],
  [1, "Marsha Lenathea",                             [1,0,0,0,0,0,0,0,0,0,1,0], "D/marsha_lenathea.jpg"],
  [1, "Nabila Gusmarila",                            [0,1,0,0,0,0,0,0,0,0,1,0], "G/nabila_gusmarila.jpg"],
  [1, "Putri Elzahra",                               [0,1,0,0,0,0,0,0,0,0,1,0], "G/putri_elzahra.jpg"],
  [1, "Shinta Devi",                                 [0,1,0,0,0,0,0,0,0,0,1,0], "G/shinta_devi.jpg"]
];
