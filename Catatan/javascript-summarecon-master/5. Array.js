///////////
// ARRAY //
//////////

// Menyimpan data lebih dari satu dengan tipe data yang sama atau berbeda

var bulan0 = 'January'
var bulan1 = 'February'
var bulan2 = 'March'

// index dimulai dari nol
var months = ['January', 'February', 'March']
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

// console.log(months[2]);
// console.log(days[1]);

/////////////
// METHODS //
////////////

// Mengubah menjadi satu string dan dipisahkan dengan koma
// var monthString = months.toString()
// console.log( monthString );

// Menjadi satu string dg karakter teretntu sebagai penghubung
// console.log(
//     months.join(', ')
// )
// console.log(
//     months.join(' & ')
// )


// Mengurutkan data pada array
// console.log(
//     days.sort()
// )

// Membalik urutan data di array
// Bukan sorting secara descending
// console.log(
//     days.reverse()
// )

// Mencari index data
// console.log(
//     days.indexOf('Saturday')
// )

////////////////
// PROPERTIES //
///////////////

// Mengetahui banyaknya data pada sebuah array
// var colors = ['Red', 'Green', 'Blue', 'Orange']
// var lenColors = colors.length // 4

// for(var i = 0; i < lenColors; i++){
//     console.log(`Color ${colors[i]}`)
// }

/*
    i = 2
    Warna colors[0]
    Warna colors[1]
    Warna colors[2]
    Warna colors[3]
*/

// console.log('Banyaknya data adalah ' + lenColors)

////////////////
// PUSH & POP //
////////////////

// Push, untuk menambahkan data baru ke index terakhir
// Pop, untuk mengeluarkan data yang ada di index terakhir

// var pro = ['Ceb', 'Dendi', 'NOtail']

// pro.push('MidOne')
// console.log( pro )
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne' ]

// pro.push('Topson', 'ana')
// console.log( pro )
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne', 'Topson', 'ana' ]

// pro.pop()
// console.log(pro)
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne', 'Topson' ]

// pro.pop('Dendi')
// console.log(pro)
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne' ]

/////////////////////
// SHIFT & UNSHIFT //
/////////////////////

// shift, mengeluarkan data index pertama
// unshift, menambahkan data di index pertama

// var heroes = ['Rubick', 'Shadow Fiend', 'Windranger']

// heroes.push('Axe')
// console.log(heroes)
// [ 'Rubick', 'Shadow Fiend', 'Windranger', 'Axe' ]

// heroes.shift()
// console.log(heroes)
// [ 'Shadow Fiend', 'Windranger', 'Axe' ]

// heroes.unshift('Invoker')
// console.log(heroes)
// [ 'Invoker', 'Shadow Fiend', 'Windranger', 'Axe' ]


//////////////////////
// DELETE & SPLICE //
/////////////////////

// Splice, hapus data tertentu, yang lain geser
// Delete , akan menjadi undefined

// var words = ['Please', 'Save', 'Me', 'Now']

// Hapus data dari index 1 sampai terakhir
// words.splice(1)
// console.log(words)

// Hapus mulai dari index 1, sebanyak 2 data
// words.splice(1, 2)
// console.log(words)
// ['Please', 'Now']

// Hapus mulai dari index 0, sebanyak 1 data
// words.splice(0, 1)
// console.log(words)
// ['Now']

// var words = ['Please', 'Save', 'Me', 'Now']
// Dari index 1, tidak menghapus data, dan tambahkan 3 data baru
// words.splice(1, 0, 'I','Need', 'Help')
// console.log(words)
// ['Please', 'I', 'Need, 'Help', 'Save', 'Me', 'Now']

// var words = ['Please', 'Save', 'Me', 'Now']
// Dari index 1, hapus 3 data, tambahkan 3 data baru
// words.splice(1,3, 'I', 'Need', 'Help')
// console.log(words)
// ['Please', 'I', 'Need', 'Help']

// delete words[1]
// console.log(words)
// ['Please', undefined, 'Me', 'Now']
// console.log(words[1])
// undefined

/////////// 
// SLICE //
/////////// 

// Copy sebagian data tanpa mengubah dari nilai asli
// var days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
// ]
// Copy data dari index 2 sampai index terakhir (habis)
// var dayOne = days.slice(2)
// console.log(days)
// console.log(dayOne)

// Copy dari index 2 - 4
// var dayTwo = days.slice(2, 5)
// console.log(days)
// console.log(dayTwo)

/////////// 
// MERGE //
///////////

// Destruction array
// var dayOne = ['Sunday', 'Monday', 'Tuesday']
// var dayTwo = ['Thursday', 'Friday', 'Saturday']
// var dayThree = ['Wednesday']

// var dayOneTwo = [...dayOne, ...dayTwo]
// console.log(dayOneTwo)

// var dayAllIn = [...dayOne, ...dayThree, ...dayTwo]
// console.log(dayAllIn)


//////////////////////
// Array of Array  //
/////////////////////

var persons = [
    ['John', 43, 'Assasin'],
    ['Tony', 44, 'Engineer'],
    ['Baby', 21, 'Driver'],
    ['Justin', 29, 'Singer']
]

var found
for (var i = 0; i < persons.length; i++){
    if(persons[i][0] == 'John'){
        found = i
    }
}

console.log(`Index dari Tony adalah ${found}`)

// persons[2].push('Single')


// console.log(
//     persons.indexOf(['Tony', 44, 'Engineer'])
// )

// persons.splice(1,2)

// console.log(persons)