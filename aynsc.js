const fs = require("fs");
const https = require("https");

console.log("hello world")

var a = 10
var b = 20



// Synchronous
fs.readFileSync("./file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data : ", data);
});

function multiplyFn(a, b) {
    const result = a * b
    return result
}

var c = multiplyFn(a, b)

console.log('multiply result is ', c)