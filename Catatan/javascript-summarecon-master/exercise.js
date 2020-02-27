// MARKET V1.0

// var apple = 3, grape = 3, orange = 3
// var apple = grape = orange = 3

// Setiap buah memiliki harga satuan
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// Meminta qty setiap buah
var apple = prompt('Masukkan jumlah Apel :')
var grape = prompt('Masukkan jumlah Anggur :')
var orange = prompt('Masukkan jumlah Jeruk :')

// Hitung total biaya per buah
var totalApple = priceApple * apple
var totalGrape = priceGrape * grape
var totalOrange = priceOrange * orange

// Hitung keseluruhan total biaya
var totalPrice = totalApple + totalGrape + totalOrange

// Munculkan Alert
alert(
    'Detail Belanja \n\n' +
    'Apple : ' + apple + ' x ' + priceApple + ' = ' + totalApple + '\n' +
    'Grape : ' + grape + ' x ' + priceGrape + ' = ' + totalGrape + '\n' +
    'Orange : ' + orange + ' x ' + priceOrange + ' = ' + totalOrange + '\n\n'+
    'Total : Rp. ' + totalPrice.toLocaleString('us')
)