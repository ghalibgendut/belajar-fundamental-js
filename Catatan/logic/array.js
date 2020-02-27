////////////
// ARRAY //
//////////

// Menyimpan data lebih dari satu dengan tipe data yang sama atau berbeda


//index mulai dari 0
var bulan = ['Januari', 'Febuari', 'Maret'];

var hari = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jum\'at',
    'Sabtu',
    'Minggu'
];

//cara akses array
// console.log(bulan[1]);
// console.log(hari[0]);






//////////////
// METHODS //
////////////


// Mengubah menjadi satu string dan dipisahkan dengan koma
// var bulanStr = bulan.toString();
// console.log( bulanStr );

// Menjadi satu string dg karakter teretntu sebagai penghubung
// console.log(
//     bulan.join(', ')
// );
// console.log(
//     bulan.join(' & ')
// );


// // Mengurutkan data pada array
// console.log(
//     hari.sort()
// );

// Membalik urutan data di array
// Bukan sorting secara descending
// console.log(
//     hari.reverse()
// );

// // Mencari index data
// console.log(
//     hari.indexOf('Sabtu')
// );






/////////////////
// PROPERTIES //
///////////////


//Mengetahui banyaknya data pada sebuah array
var warna = ['Merah', 'Hijau', 'Biru', 'Jingga'];
// var lenWarna = warna.length;

// console.log('Banyaknya data adalah : ' + lenWarna);

// for (var i = 0; i < warna.length; i++) {
//     console.log(`Warna ${warna[i]}`);   
// }


/////////////////
// PUSH & POP //
///////////////

//Push, untuk menambahkan data baru ke index terakhir
//Pop, untuk mengeluarkan data yang ada di index terakhir


// var proTeam = ['G2', 'NoraRengo', 'FaZe Clan', 'Fnatic'];
// proTeam.push('EvilGeniuses','Chaos');
// console.log(proTeam);


// proTeam.pop();
// console.log(proTeam);
// // [ 'G2', 'NoraRengo', 'FaZe Clan', 'Fnatic', 'EvilGeniuses' ]

// proTeam.pop('Dendi');
// console.log(proTeam);
// [ 'G2', 'NoraRengo', 'FaZe Clan', 'Fnatic' ]




//////////////////////
// SHIFT & UNSHIFT //
////////////////////


// shift, mengeluarkan data index pertama
// unshift, menambahkan data di index pertama

var operator = ['Ash', 'Thermite', 'Zofia'];

operator.push('Sledge');
console.log(operator);
// [ 'Ash', 'Thermite', 'Zofia', 'Sledge' ]

operator.shift()
console.log(operator)
// [ 'Thermite', 'Zofia', 'Sledge' ]

operator.unshift('Thatcher')
console.log(operator)
// [ 'Thatcher', 'Thermite', 'Zofia', 'Sledge' ]





//////////////////////
// SPLICE & DELETE //
////////////////////




// Splice, hapus data tertentu, yang lain geser
// Delete , akan menjadi undefined

var words = ['Please', 'Save', 'Me', 'Now'];

// Hapus data dari index 1 sampai terakhir
words.splice(1);
console.log(words);

// Hapus mulai dari index 1, sebanyak 2 data
words.splice(1, 2);
console.log(words);
// ['Please', 'Now']

// Hapus mulai dari index 0, sebanyak 1 data
words.splice(0, 1);
console.log(words);
// ['Now']


// Dari index 1, tidak menghapus data, dan tambahkan 3 data baru
words.splice(1, 0, 'I','Need', 'Help');
console.log(words);
// ['Please', 'I', 'Need, 'Help', 'Save', 'Me', 'Now']




// Dari index 1, hapus 3 data, tambahkan 3 data baru
words.splice(1,3, 'I', 'Need', 'Help');
console.log(words);
// ['Please', 'I', 'Need', 'Help']

delete words[1]
console.log(words)
// ['Please', undefined, 'Me', 'Now']
console.log(words[1])
// undefined









//////////// 
// SLICE //
////////// 


// Copy sebagian data tanpa mengubah dari nilai asli

// // Copy data dari index 2 sampai index terakhir (habis)
// var hariSatu = hari.slice(2);
// console.log(hari);
// console.log(hariSatu);

// // Copy dari index 2 - 4
// var hariDua = hari.slice(2, 5);
// console.log(hari);
// console.log(hariDua);


























































































































