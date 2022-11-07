


///// RUMUS LUAS DAN KELILING PERSEGI PANJANG (RECTANGLE) \\\\\
let panjang = 5;
let lebar = 10;
let luas = 2;
let areaRec= panjang * lebar; // L = P * L
let perimeterRec= 2 * (panjang + lebar); // K = 2 * (P + L)

console.log(areaRec, perimeterRec); // area rectangle


///// RUMUS DIAMETER, KELILING DAN LUAS LINGKARAN (CIRCLE) \\\\\
let radius = 15;
let diaCircle = 2 * radius ; // D = 2 * r
let kelCircle = (2 * Math.PI * radius); // K = 2 * PI * r
let areaCircle = Math.PI * Math.pow (15, 2); // L = K * r * r

console.log(diaCircle, kelCircle, areaCircle);


///// RUMUS MENCARI SUDUT SEGITIGA (TRIANGELS)\\\\\
let sisiTriangels = 180;
let sisiA = 60;
let sisiB = 45;
let triangels = sisiTriangels - (sisiA + sisiB); // MENCARI SELISIH ANGKA DARI PENJUMLAHAN SUDUT YANG DIKETAHUI

console.log(triangels);



///// MENGUBAH JUMLAH HARI MENJADI SAMA DENGAN BERAPA TAHUN, BULAN, MINGGU DAN SISA HARI \\\\\
let days = 500

// 500 / 360 = 1 tahun (360 hari) sisa 140 hari
let years = Math.floor (days / 360)
let daysLeft = days % 360

// 140 / 30 = 4 bulan (120 hari) sisa 20 hari
let months = Math.floor (daysLeft / 30)
daysLeft = daysLeft % 30

//  20 / 7 = 2 minggu (14 hari) sisa 6 hari
let weeks = Math.floor (daysLeft / 7)
daysLeft = daysLeft % 7

console.log(`${days} hari = ${years} tahun ${months} bulan ${weeks} minggu ${daysLeft} hari`);