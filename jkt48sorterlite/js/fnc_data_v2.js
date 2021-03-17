﻿// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo Last Chance!';

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
  "Bertahan",
  "Lulus",
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
  [1, "Adriani Elisabeth",                           [0,1,0,0,0,1,0,0,0,0,0,0], "G2/adriani_elizabeth.jpg"],
  [1, "Amaninah Afiqah",                             [0,1,0,0,0,0,0,0,0,1,0,0], "G2/amanina_afiqah.jpg"],
  [1, "Ariella Callista Ichwan",                     [1,0,0,0,0,0,0,1,0,0,0,0], "D/Eril.jpg"],
  [1, "Azizi Asadel",                                [1,0,0,0,0,0,0,0,1,0,0,0], "D/Zee.jpg"],
  [1, "Cindy Hapsari Maharani Pujiantoro Putri",     [1,0,0,0,0,1,0,0,0,0,0,0], "D/Cindy.jpg"],
  [1, "Diani Amalia",                                [0,1,0,0,0,0,1,0,0,0,0,0], "G2/diani.jpg"],
  [1, "Eve Antoinette Ichwan",                       [1,0,0,0,0,0,1,0,0,0,0,0], "D/Eve.jpg"], 
  [1, "Feni Fitriyanti",                             [1,0,0,0,1,0,0,0,0,0,0,0], "D/Feni.jpg"],
  [1, "Fransiska Saraswati Puspa Dewi",              [1,0,0,0,1,0,0,0,0,0,0,0], "D/Sisca.jpg"], 
  [1, "Gabriel Angelina",                            [0,1,0,0,0,0,0,0,1,0,0,0], "G2/gabriel_angelina.jpg"],
  [1, "Gabriella Margareth W.",                      [1,0,1,0,0,0,0,0,0,0,0,0], "D/Gaby.jpg"], 
  [1, "Nabila Fitriana",                             [0,1,0,0,0,0,0,0,1,0,0,0], "G2/nabila_fitriana.jpg"], 
  [1, "Riska Amelia Putri",                          [0,1,0,0,0,0,0,1,0,0,0,0], "G2/riska_amelia_putri.jpg"],
  [1, "Sania Julia Montolalu",                       [0,1,0,0,0,0,1,0,0,0,0,0], "G2/sania_julia.jpg"],
  
  //Team KIII
  //[1,"Nama",                                       [D,G,1,2,3,4,5,6,7,8,9,10], "path foto"]
  [1, "Anastasya Narwastu Tety Handuran",            [0,1,0,0,0,0,0,1,0,0,0,0], "G2/anastasya_narwastu_tety_handuran.jpg"],  
  [1, "Angelina Christy",                            [1,0,0,0,0,0,0,0,1,0,0,0], "D/Christy.jpg"],  
  [1, "Anindita Rahma Cahyadi",                      [1,0,0,0,1,0,0,0,0,0,0,0], "D/Anin.jpg"],  
  [1, "Fidly Imanda Azzahra",                        [0,1,0,0,0,1,0,0,0,0,0,0], "G2/fidly_immanda_azzahra.jpg"],
  [1, "Gita Sekar Andarini",                         [1,0,0,0,0,0,0,1,0,0,0,0], "D/Gita.jpg"],
  [1, "Helisma Mauludzunia Putri",                   [1,0,0,0,0,0,0,0,1,0,0,0], "D/Eli.jpg"],
  [1, "Jinan Safa Safira",                           [1,0,0,0,0,1,0,0,0,0,0,0], "D/Jinan.jpg"],
  [1, "Kandiya Rafa Maulidita",                      [0,1,0,0,0,0,0,1,0,0,0,0], "G2/kandiya_rafa_maulidita.jpg"],
  [1, "Mutiara Azzahra",                             [1,0,0,0,0,0,0,0,1,0,0,0], "D/Muthe.jpg"],
  [1, "Nurhayati",                                   [0,1,0,0,0,0,1,0,0,0,0,0], "G2/nurhayati.jpg"],
  [1, "Rinanda Syahputri",                           [0,1,0,0,0,0,0,1,0,0,0,0], "G2/rinanda.jpg"],
  [1, "Shani Indira Natio",                          [1,0,0,0,1,0,0,0,0,0,0,0], "D/Shani.jpg"],
  [1, "Shania Gracia",                               [1,0,0,0,1,0,0,0,0,0,0,0], "D/Gracia.jpg"],
  [1, "Yessica Tamara",                              [1,0,0,0,0,0,0,0,1,0,0,0], "D/Chika.jpg"],
  [1, "Zahra Nur",                                   [1,0,0,0,0,0,0,0,0,1,0,0], "D/Ara.jpg"],
  
  //Team T
  //[1,"Nama",                                       [D,G,1,2,3,4,5,6,7,8,9,10], "path foto"]
  [1, "Amira Fatin",                                 [1,0,0,0,0,0,0,0,0,1,0,0], "D/Mira.jpg"],
  [1, "Aurel Mayori",                                [0,1,0,0,0,0,0,0,1,0,0,0], "G2/aurel_mayori.jpg"],
  [1, "Cornelia Vanisa",                             [1,0,0,0,0,0,0,0,0,1,0,0], "D/Oniel.jpg"],
  [1, "Dhea Angelia",                                [1,0,0,0,0,0,0,0,1,0,0,0], "D/Dey.jpg"],
  [1, "Febriola Sinambela",                          [1,0,0,0,0,0,0,0,1,0,0,0], "D/Olla.jpg"],
  [1, "Fiony Alveria Tantri",                        [1,0,0,0,0,0,0,0,0,1,0,0], "D/Fiony.jpg"],
  [1, "Flora Shafiq",                                [1,0,0,0,0,0,0,0,0,1,0,0], "D/Flora.jpg"],
  [1, "Freyana Shifa Jayawardhana",                  [1,0,0,0,0,0,0,0,1,0,0,0], "D/Freya.jpg"],
  [1, "Jessica Chandra",                             [1,0,0,0,0,0,0,0,1,0,0,0], "D/Jessi.jpg"],
  [1, "Jesslyn Callista",                            [1,0,0,0,0,0,0,0,1,0,0,0], "D/Jesslyn.jpg"],
  [1, "Lulu Salsabila",                              [1,0,0,0,0,0,0,0,0,1,0,0], "D/Lulu.jpg"],
  [1, "Reva Fidela",                                 [1,0,0,0,0,0,0,0,0,1,0,0], "D/Adel.jpg"],
  [1, "Tan Zhi Hui Celine",                          [1,0,0,0,0,1,0,0,0,0,0,0], "D/Celine.jpg"],
  [1, "Umega Maulana Sinambela",                     [0,1,0,0,0,0,0,0,0,1,0,0], "G2/umega_maulana.jpg"],
  [1, "Viona Fadrin",                                [0,1,0,0,0,0,0,0,1,0,0,0], "G2/viona_fadrin.jpg"],
  
  //Academy class A
  //[1,"Nama",                                       [D,G,1,2,3,4,5,6,7,8,9,10], "path foto"]
  [1, "Cindy Nugroho",                               [0,1,0,0,0,0,0,0,0,1,0,0], "G2/cindy_nugroho.jpg"],
  [1, "Febi Komaril",                                [0,1,0,0,0,0,0,0,1,0,0,0], "G2/Febi.jpg"],
  [1, "Febrina Diponegoro",                          [0,1,0,0,0,0,0,0,1,0,0,0], "G2/febrina.jpg"],
  [1, "Gabriella Stevany H.",                        [0,1,0,0,0,0,0,0,0,1,0,0], "G2/gabriella_vany.jpg"],
  [1, "Keisya Ramadhani",                            [0,1,0,0,0,0,0,0,0,1,0,0], "G2/keisya.jpg"],
  [1, "Adzana Shaliha",                              [1,0,0,0,0,0,0,0,0,0,1,0], "D/Ashel.jpg"],
  [1, "Chaitlyn Gwyneth",                            [0,1,0,0,0,0,0,0,0,0,1,0], "G2/Chaitlyn_Gwyneth.jpg"],
  [1, "Chalista Ellysia",                            [0,1,0,0,0,0,0,0,0,0,1,0], "G2/Chalista_Ellysia.jpg"],
  [1, "Christabel Jocelyn",                          [0,1,0,0,0,0,0,0,0,0,1,0], "G2/Christabel_Jocelyn.jpg"],
  [1, "Indah Cahya",                                 [1,0,0,0,0,0,0,0,0,0,1,0], "D/Indah.jpg"],
  [1, "Kathrina Irene",                              [1,0,0,0,0,0,0,0,0,0,1,0], "D/Kathrina.jpg"],
  [1, "Marsha Lenathea",                             [1,0,0,0,0,0,0,0,0,0,1,0], "D/Marsha.jpg"],
  [1, "Nabila Gusmarila",                            [0,1,0,0,0,0,0,0,0,0,1,0], "G2/nabila_gusmarila.jpg"],
  [1, "Putri Elzahra",                               [0,1,0,0,0,0,0,0,0,0,1,0], "G2/putri_elzahra.jpg"],
  [1, "Shinta Devi",                                 [0,1,0,0,0,0,0,0,0,0,1,0], "G2/shinta_devi.jpg"]
];
