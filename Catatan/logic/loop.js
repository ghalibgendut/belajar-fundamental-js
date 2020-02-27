//WHILE LOOP
//mengulang kode selama kondisi tertentu
//while loop membaca kondisi terlebih dahulu baru di ulang
var num = 0;

//kondisi while harus true untuk running block kode 
// while (num <= 5) {
//     //block kode yang akan diruning jika condition masih bernilai true
//     console.log(`Putaran ke : ${num}`);
//     num++;
// }




//DO WHILE LOOP
// do while loop membaca kode dulu baru membaca kondisi
// minimal akan di running terlebih dahulu sekali, terlepas dari apapun kondisi yang ada pada while
// do{
//     console.log(`Putaran ke : ${num}`);
//     num++;
// }while (num <= 5);

// genap menggunakan while
// while (num <= 10) {
//     console.log(`Angka genap ${num}`);
//     num +=2;
// }

//ganjil menggunakan do while
// num = 1;
// do{
//     console.log(`Angka Ganjil ${num}`);
//     num +=2;
// }while (num <= 10 );



//FOR looping
// for (num = 0; num <= 5; num++) {
//     console.log(`Perulangan ke : ${num}`);
// }

/*
    1. Untuk perulangan for akan membaca dari kode 'kiri'

    2. Akan meraning kode 'tengah' untuk mendapatkan nilai boolean (T/F)
        2.1 Jika menghasilan True (T), maka akan ruinning kode pada block kurung kurawal { }
        2. 2 Jika  menghasilkan False (F), maka akan berhenti / keluar dari for loop.

    3. Jika sidah selsai running kode pada kurung kurawal / step 2.1 
        maka akan running kode 'kanan'
        kemudian  running kode 'tengah' / step yang ke 2
        dan akan terus mengulang hingga step 2 menghasilkan false (stop)
*/


//DRWAING

//HORIZONTAL STARS
var bintang = '';
var plus = '';
// for (var i = 0; i < 1; i++) {
//    // bintang += '  * \n';
//    // for (var j = 0; j < 2; j++) {
//     //    plus += '+ ';
//   //  }
// }

//Vertikal Star
// for (var i = 0; i < 5; i++) {
//     bintang += '  * \n';
// }
// console.log(bintang);


//kotak
// var row = 5; //contoh inputan dari user, maka 5 pada i atau j akan di ganti dengan row
// for (var i = 0; i < 5; i++) {

//     for (var j = 0; j < 5; j++) {
//         bintang += '* ';
//     }

//     bintang += '\n';
// }
// console.log(bintang);

// segitiga siku-siku
var row = 5; //contoh inputan dari user, maka 5 pada i atau j akan di ganti dengan row


// cara 1
// for (var i = 1; i < row; i++) { //untuk normal

//     for (var j = 0; j < i+1; j++) {
//         bintang += '* ';
//     }

//     bintang += '\n';
// }
// var bintang2= '';
// for (var i = 1; i <= row; i++) { //untuk terbalik

//     for (var k = i; k <= 5; k++) {
//         bintang2 += '* ';
//     }

//     bintang2 += '\n';
// }
// console.log(bintang2+bintang);



//cara 2

// for (var i = 1; i <= row; i++) { //untuk terbalik

//     for (var k = i; k <= 5; k++) {
//         bintang += '* ';
//     }

//     bintang += '\n';
// }

// for (var i = 1; i < row; i++) { //untuk normal

//     for (var j = 0; j < i+1; j++) {
//         bintang += '* ';
//     }

//     bintang += '\n';
// }

// console.log(bintang);
