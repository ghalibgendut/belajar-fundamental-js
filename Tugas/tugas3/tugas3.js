var row = 5; //contoh inputan dari user, maka 5 pada i atau j akan di ganti dengan row

var bintang='';
// // cara 1
for (var i = 1; i < row; i++) { //untuk normal

    for (var j = 0; j < i+1; j++) {
        bintang += '* ';
    }

    bintang += '\n';
}
var bintang2= '';
for (var i = 1; i <= row; i++) { //untuk terbalik

    for (var k = i; k <= row; k++) {
        bintang2 += '* ';
    }

    bintang2 += '\n';
}
console.log(bintang2+bintang);



//cara 2

// for (var i = 1; i <= row; i++) { //untuk terbalik

//     for (var k = i; k <= row; k++) {
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
