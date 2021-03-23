﻿// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

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
  "Single","Undergirls","Pajama Drive","Idol No Yoake","Ramune No Nomikata"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  //No,Judul Lagu,Single,Undergirls,Pajama Drive,Idol No Yoake,Ramune No Nomikata,,Path Image
    [1,"RIVER",[1,0,0,0,0],""],
    [1,"Yuuhi wo Miteiru ka?  / Apakah Kau Melihat Mentari Senja?",[1,0,0,0,0],""],
    [1,"Koisuru Fortune Cookie  / Fortune Cookie Yang Mencinta",[1,0,0,0,0],""],
    [1,"Manatsu no Sounds Good!  / Musim Panas Sounds Good!",[1,0,0,0,0],""],
    [1,"Flying Get",[1,0,0,0,0],""],
    [1,"Gingham Check",[1,0,0,0,0],""],
    [1,"Kokoro no Placard  / Papan Penanda Isi Hati",[1,0,0,0,0],""],
    [1,"Kaze wa Fuiteiru  / Angin Sedang Berhembus",[1,0,0,0,0],""],
    [1,"Pareo wa Emerald  / Pareo Adalah Emerald",[1,0,0,0,0],""],
    [1,"Kibouteki Refrain  / Refrain Penuh Harapan",[1,0,0,0,0],""],
    [1,"Halloween Night",[1,0,0,0,0],""],
    [1,"Beginner",[1,0,0,0,0],""],
    [1,"Mae Shika Mukanee  / Hanya Lihat Kedepan",[1,0,0,0,0],""],
    [1,"LOVE TRIP",[1,0,0,0,0],""],
    [1,"Saikou Ka yo  / Luar Biasa",[1,0,0,0,0],""],
    [1,"So Long!",[1,0,0,0,0],""],
    [1,"Kimi no Hohoemi wo Yume ni Miru  / Indahnya Senyum Manismu dalam Mimpiku",[1,0,0,0,0],""],
    [1,"Kimi wa Melody  / Dirimu Melody",[1,0,0,0,0],""],
    [1,"Everyday, Kachuusha",[1,0,0,0,0],""],
    [1,"UZA",[1,0,0,0,0],""],
    [1,"High Tension",[1,0,0,0,0],""],
    [1,"Rapsodi",[1,0,0,0,0],""],
    [1,"Lantang",[1,0,0,0,0],""],
    [1,"Cinta Remaja",[1,0,0,0,0],""],
    [1,"Darashinai Aishikata / Cara Ceroboh untuk Mencinta ",[1,0,0,0,0],""],
    [1,"Hanikami Lollipop / Malu-malu Lollipop",[0,1,0,0,0],""],
    [1,"Utsukushii Inazuma / Kilat Yang Indah",[0,1,0,0,0],""],
    [1,"Kiss Datte Hidarikiki / Bahkan Ciuman Juga Kidal",[0,1,0,0,0],""],
    [1,"Bara no Kajitsu / Buah Mawar",[0,1,0,0,0],""],
    [1,"Boku Dake no value / Value Yang Hanya Milikku",[0,1,0,0,0],""],
    [1,"Kimi no Senaka / Punggung Milikmu",[0,1,0,0,0],""],
    [1,"Dakishimecha Ikenai / Tidak Boleh Pelukan",[0,1,0,0,0],""],
    [1,"Hikaeme I love you! / Sedikit Saja I Love You",[0,1,0,0,0],""],
    [1,"Tsugi no Season / Musim yang Selanjutnya",[0,1,0,0,0],""],
    [1,"Sweet & Bitter",[0,1,0,0,0],""],
    [1,"Idol No Yoake / Fajar Sang Idola ",[0,0,0,1,0],""],
    [1,"Minasan Mo Go Issho Ni / Bersama-Sama Semuanya ",[0,0,0,1,0],""],
    [1,"Haru Ichiban Ga Fuku Koro / Angin Musim Semi Pertama ",[0,0,0,1,0],""],
    [1,"Kobushi No Seigi / Kebenaran Tinju Ini ",[0,0,0,1,0],""],
    [1,"Zannen Shoujo / Gadis Yang Celaka ",[0,0,0,1,0],""],
    [1,"Kuchi Utsushi No Chocolate / Berikan Coklat Dengan Bibir ",[0,0,0,1,0],""],
    [1,"Kataomoi No Taikakusen / Garis Diagonal Cinta Searah ",[0,0,0,1,0],""],
    [1,"Tengoku Yarou / Berandalan Di Surga ",[0,0,0,1,0],""],
    [1,"Itoshiki Natasha / Natasha Yang Ku Cinta ",[0,0,0,1,0],""],
    [1,"Joshikousei Wa Yamerarenai / Tak Bisa Berhenti Jadi Gadis Sma ",[0,0,0,1,0],""],
    [1,"Suki To Ieba Yokatta / Andai Ku Dapat Ungkapkan Cinta ",[0,0,0,1,0],""],
    [1,"Sobakasu No Kiss / Freckles' Kiss ",[0,0,0,1,0],""],
    [1,"Tanpopo No Kesshin  / Keteguhan Hati Dandelion ",[0,0,0,1,0],""],
    [1,"J Stars",[0,0,0,1,0],""],
    [1,"Yokosuka Curve / Jalan Berkelok Yokosuka ",[0,0,0,1,0],""],
    [1,"Arigatou / Terima Kasih ",[0,0,0,1,0],""],
    [1,"Kizashi / Pertanda ",[0,0,0,0,1],""],
    [1,"Koutei No Koinu / Schoolyard Puppy ",[0,0,0,0,1],""],
    [1,"Disco Hokenshitsu / Disco Di UKS ",[0,0,0,0,1],""],
    [1,"Omatase Setlist / Setlist Yang Dinanti ",[0,0,0,0,1],""],
    [1,"Cross",[0,0,0,0,1],""],
    [1,"Finland Miracle",[0,0,0,0,1],""],
    [1,"Manazashi, Sayonara / Menatapmu Sayonara ",[0,0,0,0,1],""],
    [1,"Usotsuki Na Dachou / Burung Unta Si Pembohong ",[0,0,0,0,1],""],
    [1,"Nice To Meet You!",[0,0,0,0,1],""],
    [1,"Kodoku Na Ballerina / Ballerina Dalam Sepi ",[0,0,0,0,1],""],
    [1,"Ima Kimi To Irareru Koto / Sekarang Ku Bersama Denganmu ",[0,0,0,0,1],""],
    [1,"Winning Ball",[0,0,0,0,1],""],
    [1,"Akushu No Ai / Cinta Dalam Handshake ",[0,0,0,0,1],""],
    [1,"Bowling Ganbou / Harapan Bowling ",[0,0,0,0,1],""],
    [1,"16 Iro No Yume Crayon / 16 Warna Krayon Mimpi ",[0,0,0,0,1],""],
    [1,"Ramune No Nomikata / Cara Meminum Ramune ",[0,0,0,0,1],""],
    [1,"Shonichi / Hari Pertama ",[0,0,1,0,0],""],
    [1,"Hissatsu Teleport / Jurus Rahasia Teleport ",[0,0,1,0,0],""],
    [1,"Gokigen Naname Na Mermaid / Putri Duyung Yang Sedang Sedih ",[0,0,1,0,0],""],
    [1,"Futari Nori No Jitensha / Bersepeda Berdua ",[0,0,1,0,0],""],
    [1,"Tenshi No Shippo / Ekor Malaikat ",[0,0,1,0,0],""],
    [1,"Pajama Drive",[0,0,1,0,0],""],
    [1,"Junjou Shugi / Prinsip Kesucian Hati ",[0,0,1,0,0],""],
    [1,"Temodemo No Namida / Air Mata Perasaan Yang Tak Tersampaikan ",[0,0,1,0,0],""],
    [1,"Kagami No Naka No Jeanne D'Arc / Joan Of Arc Di Dalam Cermin ",[0,0,1,0,0],""],
    [1,"Two Years Later",[0,0,1,0,0],""],
    [1,"Inochi No Tsukaimichi / Cara Menggunakan Hidup ",[0,0,1,0,0],""],
    [1,"Kiss Shite Son Shichatta / Rugi Sudah Dicium ",[0,0,1,0,0],""],
    [1,"Boku No Sakura / Bunga Sakuraku ",[0,0,1,0,0],""],
    [1,"Wasshoi J!",[0,0,1,0,0],""],
    [1,"Suifu Wa Arashi Ni Yume Wo Miru / Pelaut Yang Melihat Mimpi Di Tengah Badai ",[0,0,1,0,0],""],
    [1,"Shiroi Shirts / Baju Putih ",[0,0,1,0,0],""],
];
