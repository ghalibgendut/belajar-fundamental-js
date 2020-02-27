// ES6 : Function (Arrow function)
// () => {}
var sum = (x, y) => {
    return x + y
}

var sum2 = (x, y) => x + y

var result = sum2(3, 4)
console.log(result)

var hello = name => console.log('Hello ' + name)
hello('Andrew')