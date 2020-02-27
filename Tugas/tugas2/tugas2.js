//Soal 1 dan 2
// var x = 4;
// var y = 3;
// var z = 2;

// var w1 = x + y * z;
// var w2 = x * y;
// var w3 = w1/w2;
// var w4 = Math.pow(w3,z);
// console.log(w1);
// console.log(w2);
// console.log(w3);
// console.log("Hasil Dari w = " + w4);

// var ang1 = prompt("Masukan Angka yang akan di Pangkatkan : ");
// var res = parseInt(Math.pow(ang1,z));
// alert("Hasil Kuadrat dari : " + ang1 + " = " + res);

//cara 2
// var num = parseInt(prompt('Masukan Angka : '));
// var res = num ** 2;
//  alert(
//     `Kuadrat dari ${num} = ${res}`
//  );


//soal 3
// console.log(Math.cbrt(8));


// soal 4
// var hari = 485;
// var year = 360;
// var month = 30;
// var week = 7;

// var year1 = parseInt(hari/year);
// sisaHari = hari % year;

// var month1 = parseInt(sisaHari/month);
// sisaHari = sisaHari % month

// var weeks = parseInt(sisaHari/week);
// sisaHari = sisaHari%week;

// // console.log('Terdapat ' + year1 + ' tahun, ' + 
// //     month1 + ' bulan, ' + weeks + ' minggu, ' + sisaHari +' hari'
// // );

// // dalam penulisan console log dapat dengan cara
// console.log(
//     `Terdapat ${year1} tahun ${month1} bulan ${weeks} minggu ${sisaHari} hari`
// );


//soal 5
//cara 1
// var andi = 2;
// var budi = 5;
// var ras = andi + budi;
// var totalAndi = andi * ras;
// var totalBudi = budi * ras;
// var andiNow = totalAndi + 2;
// var budiNow = totalBudi + 2;

//cara 2
// var totalAge = 49;
// var rasAndi = 2, rasBudi = 5, totalRas= 7;

// var andiNow = totalAge * (rasAndi/totalRas)+2;
// var budiNow = totalAge * (rasBudi/totalRas)+2;

// console.log(
// 'Umur Andi sekarang adalah : ' + andiNow + '\n'
// + 'Umur Budi sekarang adalah : ' + budiNow + '\n'
// );

//soal 6
// var tanggal = new Date();
// var besok = new Date();
// var kemaren = new Date();

// // atur ulang tanggal menggunakan .setDate();
// besok.setDate(tanggal.getDate()+1);
// kemaren.setDate(tanggal.getDate()-1);
// // console.log(besok.getDate());
// // console.log(kemaren.getDate());

// //tanggal
// var tgl = tanggal.getDate();
// var bsk = besok.getDate();
// var kmrn = kemaren.getDate();

// //Bulan
// var month = 


// console.log("Tanggal hari ini adalah : " + tanggal.getDate() + " - " + 
//     (parseInt(tanggal.getMonth())+1) + " - " + tanggal.getFullYear()
// );

// console.log("Besok adalah tanggal : " + (tanggal.getDate()+1) + " - " + 
//     (parseInt(tanggal.getMonth())+1) + " - " + tanggal.getFullYear()
// );

// console.log("Kemarin adalah tanggal : " + (tanggal.getDate()-1) + " - " + 
//     (parseInt(tanggal.getMonth())+1) + " - " + tanggal.getFullYear()
// );


//soal 7
var kata = 'Halo Dunia';
// var count = kata.match(/a/g);
// console.log('Jumlah kata pada ' + kata + ' adalah : ' + count.length);

// cara 2
var cari = 'a';
var newText = kata.replace(/a/g, '');
var res = kata.length - newText.length;
console.log(
    `Ada ${res} huruf ${cari} Pada kata ${kata}`
);



//soal 8
// rumus jarak/(A+B)+start
// var jarak = 120;
// var a = 60;
// var b = 40;
// var start = 9;
// var total = Math.round(jarak/(a+b)+9); //cara 1
// var total = jarak/(a+b)+9;
// var time = Math.round(((total - (parseInt(total)))*60)); //cara 2
// console.log("Mobil A dan B bertabrakan pada jam : " + total);
// console.log("Mobil A dan B bertabrakan pada jam : " + Math.round(total) + "." + time + " menit");

// cara 3
// var totalSpd = a+b;
// var timeCrhs = jarak / totalSpd;
// var timeHrs = parseInt(timeCrhs);
// var timeMnt = (timeCrhs*60) % 60;

// console.log(`Crash Time Between Car A and B is ${timeHrs}.${timeMnt} Hour`);



//soal 9
// var rand = (Math.random()*100)+1
// console.log(parseInt(rand));








