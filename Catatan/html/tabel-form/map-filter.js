// ES 5
function jum(x,y) {
    return x + y;
}

// ES6 Function (Arrow Function)
var sum = (x, y) => {
    return x + y;
}

//atau
var sum2 = (x, y) => x + y; //ini dapat digunakan apabila function trsb langsung mereturn suatu nilai

// console.log(sum(3,4));

// var halo = nama => console.log('Halo '+ nama);
// halo('Ujang')








/*
MAP, merupakan sebuah method yang dimiliki oleh array
MAP digunakan untuk merubah bentuk data
MAP menerima sebuah function yang bernama callback function
callback function akan menerima satu parameter
callback function harus me-return sesuatu
MAP akan me-return array baru (result)
*/


// contoh
// var numArr = [1,2,3,4,5];

// var res = numArr.map((x) => {return x + 2});

// console.log(res);



// FILTER
// Digunakan untuk menyaring data
// Method yg dimiliki oleh array
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return boolean (true / false)
// filter akan me-return array baru (result)

// var numArr = [1, 2, 3, 4, 5]

// var res = numArr.filter((val) => {
//     return val >= 3
// })

// console.log(numArr)
// console.log(res)

var arrProduct = [
    { name: "Noodle", price: 35000},
    { name: "Headphone", price: 43000},
    { name: "Hoodie", price: 50000},
    { name: "Apple", price: 10000}
];

var result = arrProduct.filter((obj) => {
    return obj.price >= 50000 && obj.price <= 43000   
})

console.log(result)


