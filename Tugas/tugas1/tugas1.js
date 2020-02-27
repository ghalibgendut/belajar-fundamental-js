// var stockApel = 50;
// var stockJeruk = 40;
// var stockAnggur = 30;

// var ang1 = prompt("Masukan Jumlah Apel : ");
// var ang2 = prompt("Masukan Jumlah Jeruk : ");
// var ang3 = prompt("Masukan Jumlah Anggur : ");

// var har1 = 10000;
// var har2 = 15000;
// var har3 = 20000;

// if (parseInt(ang1) > stockApel) {
//   alert("Kesalahan input stock buah apel adalah " + stockApel);
//   stockApel = 0;
//   do {
//     ang1 = prompt("Masukan Jumlah Apel : ");
//     stockApel = 50;
//     if (parseInt(ang1) > stockApel) {
//       alert("Kesalahan input stock buah apel adalah " + stockApel);
//       stockApel = 0;
//     }
//   } while (stockApel <= 0);
// }

// else if (parseInt(ang2) > stockJeruk) {
//   alert("Kesalahan input stock buah jeruk adalah " + stockJeruk);
//   stockJeruk = 0;
//   do {
//     ang2 = prompt("Masukan Jumlah Jeruk : ");
//     stockJeruk = 40;
//     if (parseInt(ang2) > stockJeruk) {
//       alert("Kesalahan input stock buah jeruk adalah " + stockJeruk);
//       stockJeruk = 0;
//     }
//   } while (stockJeruk <= 0);
// }

// else if (parseInt(ang3) > stockAnggur) {
//   alert("Kesalahan input stock buah anggur adalah " + stockAnggur);
//   stockAnggur = 0;
//   do {
//     ang3 = prompt("Masukan Jumlah Anggur : ");
//     if (parseInt(ang3) > stockAnggur) {
//       alert("Kesalahan input stock buah anggur adalah " + stockAnggur);
//       stockAnggur = 0;
//     }
//   } while (stockAnggur <= 0);
// }

// // console.log(ang1,ang2,ang3);

// var res = parseInt(ang1) * har1;
// var res2 = parseInt(ang2) * har2;
// var res3 = parseInt(ang3) * har3;
// var total = res + res2 + res3;
// alert(
//   "Anda Membeli Apel " + ang1 + " x " + har1.toLocaleString('in') + " = " + res.toLocaleString('in') + "\n"
//   + "Anda Membeli Jeruk " + ang2 + " x " + har2.toLocaleString('in') + " = " + res2.toLocaleString('in') + "\n"
//   + "Anda Membeli Anggur " + ang3 + " x " + har3.toLocaleString('in') + " = " + res3.toLocaleString('in') + "\n"
//   + "Total Belanjaan Anda Adalah : " + total.toLocaleString('in')
// );


// var bay1 = prompt('Masukan Uang : ');

// var kembalian = parseInt(bay1) - total

// if (bay1 < total) {
//   alert('Transaksi dibatalkan jumlah uang yang anda masukan kurang ' + kembalian.toLocaleString('in'));
//   do {
//     bay1 = prompt('Maaf uang anda kurang : ' + kembalian.toLocaleString('in') + ' Silakan masukan kembali : ');
//   } while (bay1 < total);
// }

// else if (bay1 > total) {
//   alert(
//     "Anda Membeli Apel " + ang1 + " x " + har1.toLocaleString('in') + " = " + res.toLocaleString('in') + "\n"
//     + "Anda Membeli Jeruk " + ang2 + " x " + har2.toLocaleString('in') + " = " + res2.toLocaleString('in') + "\n"
//     + "Anda Membeli Anggur " + ang3 + " x " + har3.toLocaleString('in') + " = " + res3.toLocaleString('in') + "\n"
//     + "Total Belanjaan Anda Adalah : " + total.toLocaleString('in') + "\n"
//     + "Kembalian anda adalah : " + kembalian.toLocaleString('in')
//   );
// }

// else {
//   alert(
//     "Anda Membeli Apel " + ang1 + " x " + har1.toLocaleString('in') + " = " + res.toLocaleString('in') + "\n"
//     + "Anda Membeli Jeruk " + ang2 + " x " + har2.toLocaleString('in') + " = " + res2.toLocaleString('in') + "\n"
//     + "Anda Membeli Anggur " + ang3 + " x " + har3.toLocaleString('in') + " = " + res3.toLocaleString('in') + "\n"
//     + "Total Belanjaan Anda Adalah : " + total.toLocaleString('in') + "\n" + "Terimakasih"
//   );
// }








// cara 2
// do {
//   var qtyApel = prompt('Masukan jumlah apel ; ');
//   if (parseInt(qtyApel) > stockApel) {
//     alert(`Kesalahan dalam input, stock apel : ${stockApel}`);
//   }
// } while (stockApel<qtyApel);
// // console.log(qtyApel);

// do {
//   var qtyJeruk = prompt('Masukan jumlah jeruk ; ');
//   if (parseInt(qtyJeruk) > stockJeruk) {
//     alert(`Kesalahan dalam input, stock jeruk : ${stockJeruk}`);
//   }
// } while (stockJeruk<qtyJeruk);


// do {
//   var qtyAnggur = prompt('Masukan jumlah anggur ; ');
//   if (parseInt(qtyAnggur) > stockAnggur) {
//     alert(`Kesalahan dalam input, stock anggur : ${stockAnggur}`);
//   }
// } while (stockAnggur<qtyAnggur);



// var res = parseInt(qtyApel) * har1;
// var res2 = parseInt(qtyJeruk) * har2;
// var res3 = parseInt(qtyAnggur) * har3;
// var total = res + res2 + res3;
// alert(
//   "Anda Membeli Apel " + stockApel + " x " + har1.toLocaleString('in') + " = " + res.toLocaleString('in') + "\n"
//   + "Anda Membeli Jeruk " + stockJeruk + " x " + har2.toLocaleString('in') + " = " + res2.toLocaleString('in') + "\n"
//   + "Anda Membeli Anggur " + stockAnggur + " x " + har3.toLocaleString('in') + " = " + res3.toLocaleString('in') + "\n"
//   + "Total Belanjaan Anda Adalah : " + total.toLocaleString('in')
// );

// // var bay1 = prompt('Masukan Uang : ');

// var moneyCondition;

// do {
//   var bay1 = prompt('Masukan Uang : ');
//   var kembalian = parseInt(bay1) - total
//   if (parseInt(bay1) < total) {
//     alert(`Transaksi Dibatalkan, uang anda kurang : ${kembalian.toLocaleString()}`);
//     moneyCondition = true;
//   }
//   else if(parseInt(bay1) > total){
//     alert(`Kembaian anda : ${kembalian.toLocaleString()}`);
//     moneyCondition = false;
//   }
//   else{
//     alert(`Terimakasih!`);
//     moneyCondition = false;
//   }
// } while (moneyCondition);  






// array version
var buah = ['Apel', 'Jeruk', 'Anggur'];
var stock = [50, 40, 30];
var harga = [10000, 15000, 20000];
var qty = [0, 0, 0];
var total = [0, 0, 0];
var totalHarga = 0;
var kembali = true;

//buah[0].stock[0]


do {
  var menu = prompt('Selamat datang, sialakan masukan menu yang anda inginkan : \n' +
    '--------------------------------\n' +
    '0. Lihat Seluruh Buah\n' +
    '1. Menambah Buah\n' +
    '2. Menghapus Buah\n' +
    '3. Membeli Buah\n' +
    '4. Keluar\n'+
    '---------------------------------'
  );
  switch (parseInt(menu)) {
    case 0:
      // Untuk List Buah
      var namaBuah = '';
      for (let i = 0; i < buah.length; i++) {
        namaBuah += `${i+1}. ${buah[i]} | ${stock[i]} | ${harga[i].toLocaleString('in')}\n`;
      }
      alert(namaBuah);

      var kembali = confirm(`Kembali ke Menu Utama ?`); //untuk kembali ke menu utama
      break;
    case 1:
      //untuk menambah buah
      buah.push(prompt('Silakan Masukan Buah Baru : '));
      harga.push(parseInt(prompt('Silakan Masukan Harga Satuannya : ')));
      stock.push(parseInt(prompt('Silakan Masukan Stocknya : ')));

      var namaBuah = '';
      for (let i = 0; i < buah.length; i++) {
        namaBuah += `${i+1}. ${buah[i]} | ${stock[i]} | ${harga[i].toLocaleString('in')}\n`;
      }
      alert(namaBuah);

      var kembali = confirm(`Kembali ke Menu Utama ?`); //untuk kembali ke menu utama

      break;
    case 2:
      // Untuk Menghapus Buah

      var namaBuah = '';
      for (let i = 0; i < buah.length; i++) {
        namaBuah += `${i+1}. ${buah[i]} | ${stock[i]} | ${harga[i].toLocaleString('in')}\n`;
      }

      var hapusBuah = parseInt(prompt(`Silakan pilih buah :\n\n${namaBuah}`))-1; //pilih buah

      buah.splice(hapusBuah, 1);
      // stock.splice(hapusBuah, 1);
      // harga.splice(hapusBuah, 1);
      // qty.splice(hapusBuah, 1);
      // total.splice(hapusBuah, 1);

      var namaBuah = '';
      for (let i = 0; i < buah.length; i++) {
        namaBuah += `${i+1}. ${buah[i]} | ${stock[i]} | ${harga[i].toLocaleString('in')}\n`;
      }

      alert(namaBuah);

      var kembali = confirm(`Kembali ke Menu Utama ?`);

      break;
    case 3:
      
      for (var i = 0; i < stock.length; i++) {
        do {
          qty[i] = parseInt(prompt(`Masukan Jumlah Buah ${buah[i]}`));
          if (stock[i] < qty[i]) {
            alert(`Kesalahan dalam input, stock ${buah[i]} : ${stock[i]}`);
            i--
          }
        } while (qty[i] > stock[i]);

        total[i] = qty[i] * harga[i];// hitung harga perbuah
        totalHarga += total[i]; //hitung total harga buah yang dibeli

        var detailStr = '';
        detailStr = `${buah[i]} : ${qty[i]} x ${harga[i]} = ${total[i]}`
        // alert('List pembelian anda adalah sebagai berikut : \n' +
        //   buah[i] + ' x ' + harga[i].toLocaleString('in') + '= ' + total[i].toLocaleString() + '\n' +
        //   'Total : ' + totalHarga.toLocaleString('in')
        // );
      }

      alert(
        'Detail Belanja \n\n' + detailStr + '\n' +
        'Total : Rp. ' + totalHarga.toLocaleString('in')
    )


      var moneyCondition;

      do {
        var bay1 = prompt('Masukan Uang : ');
        var kembalian = parseInt(bay1) - totalHarga
        if (parseInt(bay1) < totalHarga) {
          alert(`Transaksi Dibatalkan, uang anda kurang : ${kembalian.toLocaleString()}`);
          moneyCondition = true;
        }
        else if (parseInt(bay1) > totalHarga) {
          alert(`Kembaian anda : ${kembalian.toLocaleString()}`);
          moneyCondition = false;
        }
        else {
          alert(`Terimakasih!`);
          moneyCondition = false;
        }
      } while (moneyCondition);

      var kembali = confirm(`Kembali ke Menu Utama ?`);

      break;
      case 4:
        alert(`Teimakasih!`);
        var kembali = false
        break;

    default:
      break;
  }
} while (kembali);









































// for (var i = 0; i < qty.length; i++) {
//   do {
//     qty[i] = parseInt(prompt(`Masukan Jumlah Buah ${buah[i]}`));
//     if (stock[i] < qty[i]) {
//       alert(`Kesalahan dalam input, stock ${buah[i]} : ${stock[i]}`);
//     }
//   } while (qty[i]>stock[i]);
//   console.log(qty[i], stock[i]);
// }


// for (var i = 0; i < harga.length; i++) { }
// for (var i = 0; i < total.length; i++) {
//   total[i] = qty[i] * harga[i];
//   sum += total[i];
// }
// alert('List pembelian anda adalah sebagai berikut : \n' +
//   buah[0] + ' x ' + harga[0].toLocaleString('in') + '= ' + total[0].toLocaleString('in') + '\n' +
//   buah[1] + ' x ' + harga[1].toLocaleString('in') + '= ' + total[1].toLocaleString('in') + '\n' +
//   buah[2] + ' x ' + harga[2].toLocaleString('in') + '= ' + total[2].toLocaleString('in') + '\n' +
//   'Total : ' + sum.toLocaleString('in')
// );

// var moneyCondition;

// do {
//   var bay1 = prompt('Masukan Uang : ');
//   var kembalian = parseInt(bay1) - sum
//   if (parseInt(bay1) < sum) {
//     alert(`Transaksi Dibatalkan, uang anda kurang : ${kembalian.toLocaleString()}`);
//     moneyCondition = true;
//   }
//   else if (parseInt(bay1) > sum) {
//     alert(`Kembaian anda : ${kembalian.toLocaleString()}`);
//     moneyCondition = false;
//   }
//   else {
//     alert(`Terimakasih!`);
//     moneyCondition = false;
//   }
// } while (moneyCondition);














// do {
//   // var beliApel = prompt('Masukan Jumlah Apel : ');
//   // var beliJeruk = prompt('Masukan Jumlah Jeruk : ');
//   // var beliAnggur = prompt('Masukan Jumlah Anggur : ');
//   qty[0] = prompt('Masukan Jumlah Buah Apel : ');
//   if (stock[0] < parseInt(qty[0])) {
//     alert(`Kesalahan dalam input, stock ${buah[0]} : ${stock[0]}`);
//   }
//   qty[1] = prompt('Masukan Jumlah Buah Jeruk : ');
//   if (stock[1] < parseInt(qty[1])) {
//     alert(`Kesalahan dalam input, stock ${buah[1]} : ${stock[1]}`);
//   }
//   qty[2] = prompt('Masukan Jumlah Buah Anggur : ');
//   if (stock[2] < parseInt(qty[2])) {
//     alert(`Kesalahan dalam input, stock ${buah[2]} : ${stock[2]}`);
//   }
// } while (qty[0] > stock[0] || qty[1] > stock[1] || qty[2] > stock[2]);















































































































































// switch (stockApel) {
//     case stockApel <= 0 :
//         if (parseInt(ang1) > stockApel)
//                 alert("Kesalahan input stock buah apel adalah " + stockApel);
//                 stockApel = 0;
//                 // alert('Transaksi dibatalkan, salah satu atau lebih mengalami kesalahan input');
//         break;
//     default :
//         console.log('Transaksi dibatalkan, salah satu atau lebih mengalami kesalahan input');
//         break;
// }

// switch (stockJeruk) {
//     case stockJeruk <= 0:
//         if (parseInt(ang2) > stockJeruk )
//                 alert("Kesalahan input stock buah jeruk adalah " + stockJeruk);
//                 stockJeruk = 0;
//         break;

//     default:
//         console.log('Transaksi dibatalkan, salah satu atau lebih mengalami kesalahan input');
//         break;
// }

// switch (stockAnggur) {
//     case stockAnggur <= 0:
//         if (parseInt(ang2) > stockAnggur )
//                 alert("Kesalahan input stock buah anggur adalah " + stockAnggur);
//                 stockAnggur = 0;
//         break;

//     default:
//         console.log('Transaksi dibatalkan, salah satu atau lebih mengalami kesalahan input');
//         break;
// }

// if (bay1 < total) {
//             alert('Transaksi dibatalkan jumlah uang yang anda masukan kurang ' + bay1);
//     }
//     else if(bay1 > total){
//         var kembalian = bay1 - total
//         alert(
//             "Anda Membeli Apel " + ang1 + " x " + har1.toLocaleString('in') + " = " + res.toLocaleString('in') + "\n"
//             + "Anda Membeli Jeruk "+ ang2  + " x " + har2.toLocaleString('in') + " = " + res2.toLocaleString('in') + "\n"
//             + "Anda Membeli Anggur " + ang3 + " x " + har3.toLocaleString('in') + " = " + res3.toLocaleString('in') + "\n"
//             + "Total Belanjaan Anda Adalah : " + total.toLocaleString('in') + "\n"
//             + "Kembalian anda adalah : " + kembalian.toLocaleString('in')
//         );
//     }
//     else {
//         alert(
//             "Anda Membeli Apel " + ang1 + " x " + har1.toLocaleString('in') + " = " + res.toLocaleString('in') + "\n"
//             + "Anda Membeli Jeruk "+ ang2  + " x " + har2.toLocaleString('in') + " = " + res2.toLocaleString('in') + "\n"
//             + "Anda Membeli Anggur " + ang3 + " x " + har3.toLocaleString('in') + " = " + res3.toLocaleString('in') + "\n"
//             + "Total Belanjaan Anda Adalah : " + total.toLocaleString('in') + "\n" + "Terimakasih"
//         );
//     }

// var res = ang1 * har1;
// var res2 = parseInt(ang2) * har2;
// var res3 = parseInt(ang3) * har3;
// var total = res+res2+res3;

// console.log("Jumlah Apel : "+ ang1 + " X " + " 10000 " + " = " + res);
// console.log("Jumlah Jeruk : "+ ang2 + " X " + " 15000 " + " = " + res2);
// console.log("Jumlah Anggur : "+ ang3 + " X " + " 20000 " + " = " + res3);
// console.log("Total : "+total );

// console.log(stockApel);
// console.log(stockJeruk);
// console.log(stockAnggur);

// alert(
//     "Anda Membeli Apel " + ang1 + " x " + "10000 " + " = " + res.toLocaleString() + "\n"
//     + "Anda Membeli Jeruk "+ ang2  + " x " + "15000 " + " = " + res2.toLocaleString() + "\n"
//     + "Anda Membeli Anggur " + ang3 + " x " + "20000 " + " = " + res3.toLocaleString() + "\n"
//     + "Total Belanjaan Anda Adalah : " + total.toLocaleString('in')
//     );

// ternary hanya dapat digunakan dengan 2 kondisi
