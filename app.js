require('./xyz.js') //one module into another

// these 2 approach not works
// require('./sum.js')
// import calculateSum from "sum.js"

// const calculateSum = require('./sum.js') for single import direct access
const obj = require('./sum.js')
// destructuring
const { x, calculateSum } = require('./sum.js');

const { calculateMultiply } = require('./calculate/multiply.js');

const { calculateDivide } = require('./calculate');

const data = require('./data.json');

var name = "namaste nodejs"
var a = 20
var b = 10



console.log(name)
// console.log(a + b)

console.log(data);

// calculateSum(a,b)
obj.calculateSum(a, b)
console.log(obj.x) 
calculateMultiply(a, b);
calculateDivide(a,b)

// console.log(global)
// console.log(this)

// console.log(globalThis)
