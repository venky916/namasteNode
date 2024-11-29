// Modules protects their variables and functions from leaking by default

var x = 'hello world'
z = "i don't need var let and const" //(runs in non-strict mode)

console.log('Summing 2 variables')

function calculateSum(a, b) {
    const sum = a+b
    console.log(sum) 
}

// console.log(module.exports)

// module.exports = calculateSum (id single exports)

// module.exports = {
//     x,
//     calculateSum
// }

// other way since module.exports is an empty object
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

// below is clean way
module.exports = {
    x: x,
    calculateSum : calculateSum
}