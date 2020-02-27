/////////////
// OBJECT //
///////////

// Menggunakan kurung kurawal {}
// tidak mengenal indexing, melainkan property dan value
// data dari database nantinya akan berbentuk object


//name, age, address, hobi, dan piaraan merupakan properties dari object orang
//property merukapak variable didalam object
// method function didalam object
var orang = ({
    name: 'Jhony', //Jhony merupakan value dari properties dari name
    age: 23,
    // address: 'Bekasi',
    hobi: ['Model Kit', 'Gaming'],
    piaraan: [
        { nama: 'Strike' },
        { nama: 'Freedom' }
    ],

    intro : function () {
        //intro merupakan sebuah method dari object orang
        console.log(`
            Hi, my name is ${this.name}, my age is ${this.age} years old
            my address in ${this.address}, my hobbies are ${this.hobi},
            i was has two pets ${this.piaraan[0].nama} and ${this.piaraan[1].nama} 
            but ${this.piaraan[0].nama} died and now only ${this.piaraan[1].nama}
        `);
    }
});

// console.log(orang.name);
// orang.intro();


// Menambahkan property dengan cara :
// orang.address = 'Bekasi';
// orang.bangun = function () {console.log(`Hello, Good Morning, ${orang.name}`);}
// orang.bangun();
// console.log(orang);


// // Menghapus property
// delete orang.piaraan;

// console.log(orang);



////////////
// CLASS //
//////////

/*
class merupakan sebuah blue print untuk membuat object
dengan membuat class, akan lebih mudah mengatur property apa yang akan ada 
sebuah class dapat menurunkan property ke class lain (inheritance)
*/


class Manusia{
    constructor(_full, _age, _address, _pos, _sal){
        this.fullName = _full;
        this.age = _age;
        this.address = _address;
        this.jobDetail = {position: _pos, sallary: _sal}
    }
    greet(){
        console.log(`Hello, My name is ${this.fullName}`);
    }
}

// var andi = new Manusia('Andi Malaranggeng', 40, 'Jakarta', 'Pengangguran', 1000000); //pemanggilan class
// console.log(andi);

// andi.greet(); //pemanggilan function dalam class


// var andi = {fullName: 'Andi Malaranggeng', age: 27};

// var coki = {fullName: 'Coki Paradede', age: 26};

// var tretan = {fullName: 'Tretan Muslim', age: 28};



//inheritance

class Human{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    breath(){
        console.log('I am breathing');
    }
}

class Murid extends Human{
    constructor(_name,_age,_grade){
        super(_name,_age);
        this.grade = _grade;
    }

    study(){
        console.log(`${this.name} lagi belajar`);
    }
}

class Pegawai extends Murid{
    constructor(_name, _age, _grade, _pos){
        super(_name, _age, _grade);
        this.position = _pos;
    }
    gawe(){
        console.log(`${this.name} lagi kerja sebagai ${this.position}`);
    }
}


var budi = new Pegawai('Budi Santoso', 27, 'Senior High School', 'Karyawan');
console.log(budi);
budi.gawe();



























































