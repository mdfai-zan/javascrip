//Dates

let mydate = new Date();
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON)
// console.log(mydate.toLocaleDateString)

let ndate = new Date(2024, 7, 2);
// console.log(ndate.toDateString())
// console.log(mydate.toLocaleString())

let currTime = Date.now()
console.log(Math.floor((currTime/1000)/60))
console.log(currTime.toLocaleString())