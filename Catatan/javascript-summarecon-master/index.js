// 1. Memunculkan teks di terminal
// console.log("My first code ")

// 2. Variable
// Untuk menyimpan sebuah value / data
// Tidak dapat diawali dengan angka
// Diawali huruf, underscore, dollar sign
// Dapat mengandung , huruf, number, underscore
// camelCase
// var _name = "John Wick" // string
// var firstName = "John"
// var lastName = "Wick"
// var greet24 = "Hello, i'am John Wick"
// var $sarcas = 'Masakannya "enak" kok'
// var bisa = 'Hello, i\'am iron man'

// Data Type

// var month = "January" // string
// var dateString = "28" // string
// var date = 28 // integer (bilangan bulat)
// var pi = 3.14 // float (bilangan desimal)
// var single = true // boolean (true, false)

// function typeof untuk mengetahui tipe data dari sebuah variable
// var result = typeof(pi)
// console.log(result)

// var nilai = "32"
// var value = 32
// console.log(typeof(nilai))
// console.log(typeof(value))

// Menampilkan teks
// alert('Hello dude')

// Menerima input dari user
// var name = prompt('You name : ')
// alert("Hello, my name is " + name)
// console.log("Halo, watashi wa " + name + " desu")

// backslash n (\n) digunakan untuk membuat baris baru (new line)
// console.log(
//     "This is my first line" + "\n\n\n" +
//     "This is my second line"
// )

// Artimatik
// var numberOne = 10
// var numberTwo = 5

// var result = numberOne + numberTwo
// console.log(numberOne + " + " + numberTwo + " = " + result)

// result = numberOne - numberTwo
// console.log(numberOne + " - " + numberTwo + " = " + result)

// result = numberOne * numberTwo
// console.log(numberOne + " * " + numberTwo + " = " + result)

// result = numberOne / numberTwo
// console.log(numberOne + " / " + numberTwo + " = " + result)

// result = numberOne % numberTwo
// console.log(numberOne + " % " + numberTwo + " = " + result)

// Mengubah Tipe data string to number
// var numString = "12"
// var numInteger = parseInt(numString)

// // console.log(typeof(numString))
// // console.log(typeof(numInteger))

// var result = "28" + 2 // "282"
// console.log(result)

// result = "28" - 8 // 20
// console.log(result)

// result = "28" * 8 // 224
// console.log(result)

// result = "28" / 8 // 3.5
// console.log(result)

// STRINGS


// Mengetahui jumlah karakter pada teks
// console.log(text.length)

// Mencari index suatu kata didalam teks
// index dimulai dari nol
// console.log(text.indexOf('at'))
// Jika tidak ditemukan akan me-return -1
// console.log(text.indexOf('attta'))

// Mengambil kata dari index 4 sebanyak 6
// karakter
// console.log(text.substr(4, 6))

// Ambil kata dari index 4 - 10
// index ke 10 tidak termasuk
// console.log(text.slice(4, 10));

var text = "Fun day at summarecon"

// Mensplit sebuah text berdasarkan karakter tertentu
// Default split = tidak ada
// console.log(text.split())
// console.log(text.split(" "))
// console.log(text.split("a"))

var x = 'summasrescons'
var y = 'SUMMARECON'
var z = 12345

// Menggubah menjadi kapital
// console.log(x.toUpperCase())

// Mengubah menjadi huruf kecil
// console.log(x.toLowerCase())

// Mengubah menjadi string
// console.log(z)
// console.log(z.toString())

// jika sudah menemukan satu karakter yang match
// console.log(x.replace('s', 'S'))

// Mengubah secara global (semua) karakter yg match
// console.log(x.replace(/s/g, 'S'))

// Mengubah menjadi integer
// console.log(parseInt('123')); // 123
// Mengubah menjadi float
// console.log(parseFloat('123')); // 123

// Mengubah menjadi integer
// Menghilangkan bilangan desimal, bkn dibulatkan
// console.log(parseInt('1234.5678')) // 1234
// Mengubah menjadi float
// console.log(parseFloat('1234.5678')); //1234.5678

// Mengubah menjadi integer
// console.log(parseInt('Halo Dunia')) // NaN
// Mengubah menjadi float
// console.log(parseFloat('Halo Dunia')); // NaN

// NaN = Not a Number

// Arithmatic

// var numOne = 10
// var numTwo = 5

// console.log(numOne + ' + ' + numTwo + ' =', numOne + numTwo)
// console.log(numOne + ' + ' + numTwo + ' = ' + (numOne + numTwo))

// console.log(numOne + ' - ' + numTwo + ' =', numOne - numTwo)
// console.log(numOne + ' * ' + numTwo + ' =', numOne * numTwo)
// console.log(numOne + ' / ' + numTwo + ' =', numOne / numTwo)
// console.log(numOne + ' % ' + numTwo + ' =', numOne % numTwo)

// var numOne = 10
// var numTwo = 5
// var numThree = 24
// var numSpecial = 99

// var result = numOne + 3 // 13
// numOne = result

// numTwo = numTwo + 15 // 20
// // numTwo += 15

// // numThree = numThree + 3
// numThree += 3 // 27

// // Increment
// // numSpecial += 1
// numSpecial++ // 100
// numSpecial++ // 101
// numSpecial++ // 102
// numSpecial++ // 103
// numSpecial++ // 104

// // Decrement
// // numSpecial -= 1
// numSpecial-- // 103

// console.log(numSpecial) // 99

// Math Object

// console.log(Math.PI)

// Membuat bilangan menjadi positif (absolute)
// console.log(Math.abs(-4.7))

// Pangkat bilangan (power)
// Delapan pangkat tiga
// console.log(Math.pow(8, 3));

// Akar dua bilangan (square root)
// console.log(Math.sqrt(64));

// Akar tiga bilangan (cubic root)
// console.log(Math.cbrt(8));

// Bulatkan angka secara matematika
// console.log(Math.round(4.7)); // 5

// Bulatkan angka secara matematika
// console.log(Math.round(4.4)); // 4

// Dibulatkan ke bawah
// console.log(Math.floor(4.7)); // 4

// Dibulatkan ke atas
// console.log(Math.ceil(4.4)); // 5

// Random 0 (incl) - 1 (excl)
// console.log(Math.random());

// Mencari nilai maximum
// console.log(Math.max(1,3,5));

// Mencari nilai minimum
// console.log(Math.min(1,3,5));

// random 1 - 10
// console.log(parseInt((Math.random() * 10) + 1))

// Date Object
// Mendapatkan info waktu

// var time = Date()
// console.log(typeof(time))

// var time = new Date()
// console.log(typeof(time))



// console.log(time.getHours())
// console.log(time.getMinutes())
// console.log(time.getSeconds())

// Hari dimulai : 1
// console.log(time.getDay())

// Bulan dimulai : 0
// console.log(time.getMonth())


































// SHORTCUT
// Ubah bersamaan : DRAG + CTRL + D
// Kursor banyak : ALT + LEFT CLICK
// Ubah posisi : ALT + ARROW
// Duplicate code : SHIFT + ALT + ARROW BAWAH
// Membuka / menutup terminal : CTRL + J
// Membersihkan terminal : CTRL + L
// Membuat komentar : CTRL + /