////////////
// OBJECT //
////////////

// Menggunakan kurung kurawal {}
// Tidak mengenal indexing, melainkan property dan value
// Data dari database nantinya akan berbentuk object
// Property : variable didalam object
// Method : function didalam object

// var person = {
//     name : 'John',
//     age: 49,
//     hobbies: ['Run', 'Chase'],
//     pets : [
//         {name: 'Holly'},
//         {name: 'Molly'},
//         {name: ['Ring', 'Ding', 'Dong']}
//     ],

//     intro : function (){
//         console.log(`Hello, My name is${this.name}`)
//         console.log(`My age is ${this.age} y.o`)
//         console.log(`One of my pet is ${this.pets[0].name}`)
//         console.log(`And the other one is, ${this.pets[1].name}`)
//         console.log(`Then i have ${this.pets[2].name}`)
//     }
// }

// console.log(person)
// person.intro()

// Menambahkan property
// person.address = 'Summarecon'
// person.wakeUp = function (){console.log('Hello, Good morning')}

// Menghapus property
// delete person.pets

///////////
// CLASS //
//////////

// Sebuah blue print untuk membuat object
// Dengan membuat class, akan lebih mudah me-manage property apa yang akan ada didalam sebuah object
// Sebuah class dapat menurunkan property ke class lain (inheritance)

class Person{
    constructor(_fullName, _age, _position, _sallary){
        this.fullName = _fullName
        this.age = _age,
        this.address = 'Indonesia',
        this.jobDetail = {position: _position, sallary : _sallary}
    }

    greet(){
        console.log(`Hello, I'am ${this.fullName}`)
    }
}

var Andi = new Person('Andi Maulana', 27, 'Manager', 1000000)
var Budi = new Person('Budi Ramdahan', 22, 'CTO', 12000000) 
var Charlie = new Person('Charlie Van Houten', 28, 'Singer', 98700000) 

// Andi.greet()
// console.log(Budi);

class Human{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }

    breath(){
        console.log(`I'am breathing`)
    }
}

class Student extends Human{
    constructor(_name, _age, _grade){
        super(_name, _age)
        this.grade = _grade
    }

    study(){
        console.log(`I'am dying`);
        
    }
}

class Employee extends Student{
    constructor(_name, _age, _grade, _position){
        super(_name, _age, _grade)
        this.position = _position
    }

    work(){
        console.log(`I'am working`);
        
    }
}


var Doy = new Employee('Doy Kangen', 27, 'Senior Hight School', 'Developer')

Doy.breath()
Doy.study()
Doy.work()