// MAP
// Digunakan untuk merubah bentuk data
// Method yg dimiliki oleh array
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return sesuatu
// map akan me-return array baru (result)

// var numArr = [1, 2, 3, 4, 5]

// var result = numArr.map((x) => {return x + 2})

// console.log(numArr)
// console.log(result

// FILTER
// Digunakan untuk menyaring data
// Method yg dimiliki oleh array
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return boolean (true / false)
// filter akan me-return array baru (result)

// var numArr = [1, 2, 3, 4, 5]

// var res = numArr.filter((val) => {
//     return val > 3
// })

// console.log(numArr)
// console.log(res)

// var arrProduct = [
//     { name: "Noodle", price: 35000},
//     { name: "Headphone", price: 43000},
//     { name: "Hoodie", price: 50000},
//     { name: "Apple", price: 10000}
// ];

// var result = arrProduct.filter((val) => {
//     return val.price <= 43000
// })

// console.log(result)


// FINDINDEX
// Digunakan untuk mencari index data
// Method yg dimiliki oleh array
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return boolean (true / false)
// findindex akan me-return index data yang di cari (result)

var students = [
    { id: 1, name: "Zarco" },
    { id: 2, name: "Melandri" },
    { id: 3, name: "Marq" }
]

var found = students.findIndex((val) => {
    return val.name == 'Marq'
})

console.log('Index : ' + found) 