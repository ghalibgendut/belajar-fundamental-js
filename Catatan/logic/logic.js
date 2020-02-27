// // if logic statement

// var umur = 47 ; 
// var kategori ; 

// if (umur >= 0 && umur <= 5) {
//     kategori = 'Balita';
// }
// else if(umur >= 6 && umur <= 11){
//     kategori = 'Anak-Anak';
// }
// else if(umur >= 12 && umur <= 25){
//     kategori = 'Remaja';
// }
// else if(umur >= 26 && umur <= 45){
//     kategori = 'Dewasa';
// }
// else if(umur >= 46 && umur <= 65){
//     kategori = 'Lansia';
// }
// else{
//     kategori = 'Manula';
// }
// console.log(kategori)


//Switch case statment
/*Pada Switch case akan mencari value yang sama saja*/

// var hujan = "Sedang";
// switch(hujan) {
//     case 'Deres':
//         console.log('Deres boi');
//         break;
//     case 'Sedang':
//         console.log('Ujan santai sambil ngopi');
//         break;
//     case 'Gerimis':
//         console.log('Misbar gerimis bubat');
//         break;


//     default:
//         console.log('Cerah, mentari berpijar bersama indosat');
//         break;
// }


// var alas = "Sendal";
// var warna = "Merah";
// var harga = "Murah";

// switch (true) {
//     case (alas == 'Sepatu' && warna == 'Biru' && harga == 'Murah'):
//         console.log('Aku Punya sepatu baru, dapet diskonan');
//         break;
//     case (alas == 'Sendal' && warna == 'Merah' && harga == 'Mahal'):
//         console.log('Aku Punya sendal baru, tidak dapet diskonan');
//         break;
//     case (alas == 'Sepatu' && warna == 'Biru' && harga == 'Mahal'):
//         console.log('Aku Punya sepatu baru, tidak dapet diskonan');
//         break;    
//     case (alas == 'Sendal' && warna == 'Merah' && harga == 'Murah'):
//         console.log('Aku Punya sendal baru, dapet diskonan');
//         break;
//     default:
//         console.log('Aku tidak punya sepatu atau sendal baru');
//         break;
// }



var berat = 40;
var tinggi = 1.68;
var imt = berat/(tinggi)**2;
console.log(imt);

if (imt < 18.5) {
    console.log('Berat badan anda kurang');
}
else if(imt >= 18.5 && imt <= 24.9){
    console.log('Berat badan anda ideal');
}  
else if(imt >= 25.0 && imt <= 29.9){
    console.log('Berat badan anda berlebih');
}
else if(imt >= 30.0 && imt <= 39.9){
    console.log('Berat badan anda sangat berlebih');
}
else {
    console.log('Anda obesitas');    
}











