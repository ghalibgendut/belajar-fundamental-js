//1. Memunculkan Text di terminal
// console.log("Hello World! this is my first code on VSC");


// 2.variable

// 3. Data Type
// var month = "January"; // String
// var date = 28; //integer (Bilangan Bulat)
// var pi = 3.14; // float (Bilangan desimal)
// var single = true; // Boolean (true,false)

// 4. Function typeof untuk mengetahui tipe data dari suatu variable
// var res = typeof(month);
// console.log(res);


// 5. cara menghitung banyak karakter pada suatu variable
// var panjang = "Coba Hitung Jumlah Karakter ini";
// var cobaHit = 23;

// console.log(panjang.length); // length hanya berfungsi untuk menghitung jumlah string


//SHORTCUT
// Membuka dan menutup terminal : CTRL + J
// Membersihkan terminal : CTRL + L
// Membuat Komentar : CTRL + /
// Merefresh halaman : CTRL + R 
// Gunakan "\" untuk mengubah value menjadi string kembali, karakter di depan "\" akan dianggap string biasa


// Gunakan "History" pada terminal untuk melihat perintah apa saja yang pernah di lakukan



// alert("Coba Warning"); // menampilkan text saja
// prompt("Isi Apapun Disini"); // Menampilkan form isian
// var nama = prompt('Silakan ini Nama Anda : ');
// alert ('Halo : '+ nama);
// console.log('Halo, My name is ' + nama + ' nice to meet you! ');

// console.log(
//     'Ini adalah Baris Pertama' + '\n' + 'Ini adalah Baris Kedua'
// )

//Aritmatika
var ang1 = prompt("Masukan Jumlah Apel : ");
var ang2 = prompt("Masukan Jumlah Jeruk : ");
var ang3 = prompt("Masukan Jumlah Anggur : ");

var res = parseInt(ang1) * 10000;
var res2 = parseInt(ang2) * 15000;
var res3 = parseInt(ang3) * 20000;
var total = res+res2+res3;
// console.log("Jumlah Apel : "+ ang1 + " X " + " 10000 " + " = " + res);
// console.log("Jumlah Jeruk : "+ ang2 + " X " + " 15000 " + " = " + res2);
// console.log("Jumlah Anggur : "+ ang3 + " X " + " 20000 " + " = " + res3);
// console.log("Total : "+total );
alert(
    "Anda Membeli Apel " + ang1 + " x " + "10000 " + " = " + res.toLocaleString() + "\n"
    + "Anda Membeli Jeruk "+ ang2  + " x " + "15000 " + " = " + res2.toLocaleString() + "\n"
    + "Anda Membeli Anggur " + ang3 + " x " + "20000 " + " = " + res3.toLocaleString() + "\n"
    + "Total Belanjaan Anda Adalah : " + total.toLocaleString()
    );
