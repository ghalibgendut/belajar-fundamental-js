//////////////
// FUNCTION //
//////////////

// Block kode yang dapat memiliki nama dan digunakan secara berulang
// Sebuah function dapat memiliki input, output atau input dan input sekaligus

// no input, no output
// function hello(){
//     console.log('Hello ... ')
// }

// hello()

// 1 input, no output
// function greet(name) {
//     console.log(`Hello, ${name}`)
// }

// greet('Tony')
// greet('Jhonny')
// greet('Dony')

// 3 input, no output
// function intro(name, age, job){
//     console.log(
//         `Nama : ${name}\n` +
//         `Umur : ${age}\n` +
//         `Pekerjaan : ${job}`
//     )
// }

// intro('Tony', 43, 'Engineer')
// intro('John', 43, 'Hunter')

// no input, 1 output
// kode setelah return tidak di baca
// function grav(){
//     console.log('Sebelum return')
//     return 9.8
//     console.log('Setelah return')
// }

// var result = grav()
// console.group(`Satuan gravitasi : ${result}`)

// 2 input, 1 output
// Variable x dan y merupakan variable 'local'
// yang artinya hanya dapat diakses di dalam function sum
// jika mencoba mengakses diluar function sum akan error
// function sum(x, y){
//     return x +y 
// }


// Ini akan error karena tidak bisa mengakses variable di dalam function sum.
// console.log(x);


// var sumResult = sum(4, 5)
// console.log(`4 + 5 = ${sumResult}`)

// console.log(sum(2, 3))

// Function call another function

// function oneFun(){
//     console.log('Function oneFun')
// }

// function twoFun(fn){
//     fn()
// }

// twoFun(oneFun)

// Tugas

// function calculate(fn, numberOne, numTwo){
//     // fn = calSum
//     // numOne = 3
//     // numTwo = 4
//     var resFn = fn(numOne, numTwo)

//     return resFn
    
// }

// function calSum(x, y){
//     var res = x  + y

//     return res
// }

// function calMult(x, y){
//     var res = x  * y

//     return res
// }

// var result = calculate(calMult, 3, 4)
// console.log(result)


// function anonym(fn){
//     var a = 4
//     var b = 2

//     var res = fn(a, b)

//     return res
// }

// function square(x, y){
//     var res = Math.pow(x, y)

//     return res
// }

// var hasil = anonym(square)

////////////////////
// SORT : Advance //
////////////////////
// Sort menerima function dg dua parameter
// function tsb mereturn salah satu dari 3 kemungkinan :
//      1. nilai negatif    ( < 0 )
//      2. nilai nol        ( 0 )
//      3. nilai positif    ( > 0 )

// return negatif : posisi 'a' ada didepan 'b'
// return nol : tidak bertukar posisi
// return positif : posisi 'b' ada didepan 'a'

numArr = [40, 23, 1, 100, 2, 230]

// ascending, kecil ke besar
// function asc(a, b){
//     return a - b
// }

//  descending, besar ke kecil
// function dsc(a, b){
//     return b - a
// }

// numArr.sort(dsc)

// console.log(numArr)

var persons = [
    ['John', 43, 'Assasin'],
    ['Tony', 44, 'Engineer'],
    ['Baby', 21, 'Driver'],
    ['Justin', 29, 'Singer']
]

// urutkan berdasarkan nama
function byName(a, b){
    // a = ['Tony', 44, 'Engineer']
    // b = ['Baby', 43, 'Assasin']
    if(a[0] < b[0]){
        return -1

    } else if(a[0] > b[0]){
        return 1

    } else {
        return 0
    }
}

// urutkan berdasarkan umur  
function byAge(a, b){
    return a[1] - b[1]
}                                                                                                                

// urutkan berdasarkan pekerjaan
function byJob(a, b){
    // a = ['Tony', 44, 'Engineer']
    // b = ['Baby', 43, 'Assasin']
    if(a[2] < b[2]){
        return -1

    } else if(a[2] > b[2]){
        return 1

    } else {
        return 0
    }
}

persons.sort(byJob)
console.log(persons)

// Petunjuk
// Untuk nama dan pekerjaan menggunakan perbandingan bias ( > / < / ==)
// Untuk umur pakai asc






