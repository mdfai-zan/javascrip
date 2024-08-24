let user = {
    name: "Fazian",
    id: 98219,
}
let user2 = user;
user2.name = "Md"
console.log(user.name)
console.log(user2.name)
// It gives refrence of the object data type so the output is same

let HumanNAme = "Faizan"
let anotherNAme = HumanNAme
anotherNAme = "MD"
console.log(HumanNAme)
console.log(anotherNAme)
// It create copy of the datatype in memory and output is diffnt