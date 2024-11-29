console.log("hello world")

var a = 10
var b = 20

// This callback will only be pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("call me right now ");
}, 0); // Trust issues with setTimeout


function multiplyFn(a, b) {
    const result = a * b
    return result
}

var c = multiplyFn(a, b)

console.log('multiply result is ', c)