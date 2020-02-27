///////////////
// FUNCTION //
/////////////

// Block kode yang memiliki nama dan digunakan secara berulang
// Sebuah function dapat memiliki input, output atau input dan input sekaligus


/*no input, no output consol.log dalam function ini bukan merupakan output, 
merupakan sebuah proses dari function hi()*/
// function hi() {
//     console.log(`Hello World from a Function...`);
// }

// // hi();


// // 3 input tanpa output
// function sapaan(nama,umur,pekerjaan) {
//     console.log(`Hi I am, ${nama},\n`+
//     `My age is, ${umur},\n` + 
//     `My job is, ${pekerjaan}`);
// }

// // sapaan(`Jhon`,45,`Programmer`);



// //no input, with 1 output
// function gravitasi() {
//     console.log(`Sebelum reutrn`);
//     return 9.8;
//     console.log(`Setelah return`);
// }
// var res = gravitasi();
// console.log(`Satuan Gravitasi adalah : ${res}`);



// 2 input, dan 1 output, baiknya apabila ada function yang memiliki output disimpan dalam variabel
// function tambah(x, y) {
//     return x + y;
// }

// // var tambahRes = tambah(2,5); //dengan variable
// // console.log(`4 + 5 = ${tambahRes}`);

// // console.log(tambah(7, 5)); //tanpa variable



// //function memanggil function lain

// function funSatu() {
//     console.log(`Function yang dipanggil`);
// }
// function funDua(fn) {
//     fn();
// }
// // funDua(funSatu);




// function coba(fn) {
//     var a = 5;
//     var b = 2;

//     var res = fn(a,b);
//     console.log(res);
// }

// function pangkat(x,y) {
//     var result = Math.pow(x,y);
//     return result;
// }

// coba(pangkat);







///////////////////// 
// SORT : ADVANCE //
///////////////////

/*
------------------------------ 
THIS PART IS CONECTED TO ARRAY
------------------------------ 
*/



/* Sort menerima function dengan dua parameter
   function tersebut mengembalikan (return) salah satu dari 3 kemungkinan :
        1. Nilai negatif -> posisi 'a' ada didepan 'b'

        2. Nilai nol -> tidak bertukar posisi

        3. Nilai Positif -> posisi 'b' ada didepan 'a'
*/

// nomArr = [10, 40, 23, 100, 2, 23, 1, 4, 3];

// //ascending, kecil ke besar
// function asc(a, b) {
//     return a - b; 
// }

// //descending, besar ke kecil
// function dsc(a, b) {
//     return b - a;
// }

// nomArr.sort(asc);

// console.log(nomArr);




// Latihan
/*
Urutkan berdasarkan nama
Urutkan berdasarkan Umur
Urutkan berdasarkan pekerjaan

Petunjuk : 
Untuk nama dan pekerjaan menggunakan perbandingan bias (> / < / ==)
Untuk umur pakai asc
*/




var orang = [
    ['Jhony',30,'Employee'],
    ['Tony',40,'IronMan'],
    ['Baby',25,'Driver'],
    ['CJ',27,'Gangster'],
    ['Arno',27,'Assassin'],
    ['Ujang',20,'Aristocrat']
    
];


//urutkan berdasarkan pekerjaan
//apabila ingin asecding tanda'<' tinggal di balik dengan '>'
function job(a,b) {
    if (a[2] < b [2]) {
        return -1;
    }
    else if (a[2] > b[2] ) {
        return 1;
    }
    else {
        return 0;
    }
}

//urutkan berdasarkan nama
function nama(a,b) {
    if (a[0] < b[0]) {
        return -1;
    }
    else if (a[0] > b [0]) {
        return 1;
    }
    else {
        return 0;
    }
}

function umur(a,b) {
    return a[1] - b[1];
}

// console.log(umur(6,5));

orang.sort(job);
console.log(orang);








































// Tugas


// function calTambah(x, y) {
//     var res = x + y;
//     console.log(`Hasil tambah dari ${x} + ${y} = ${res}`);
//     return res;

// }


// function calKali(x, y) {
//     var hasil = x * y;
//     console.log(`Hasil kali dari ${x} x ${y} = ${hasil}`);
//     return hasil;
// }


// function hitung(fn, x, y) {
//     // console.log(`Hasil tambah dari ${x} + ${y} = ${res}`);
//     // console.log(`Hasil kali dari ${x} x ${y} = ${hasil}`);
//     return fn(x, y);
// }

// var result = hitung(calTambah, 2, 3);
// var total = hitung(calKali, 4, 6);









