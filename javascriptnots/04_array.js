let marvekl = ["ironman", "tony", "thor"]
let dc = ["super", "flash", "bat"]

let heros = marvekl.concat(dc);
// console.log(heros);



let one = "100"
let two = "200"
let three = "300"
let neheors = [...marvekl, ...dc, ...one, ...two]; // Spread method 
console.log(Array.isArray(marvekl))


let newNum = Array.from(one);
console.log(newNum)

let newNum2 = Array.of(one, two, three);
console.log(newNum2);