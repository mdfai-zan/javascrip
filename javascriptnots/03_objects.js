const mysyb = Symbol("key1");

const user = {
    name: "Faizan",
    id: 104,
    email: "Faizan@gamil.com",
    phone: 9219788718,
    "userid": "fzan@001",
    [mysyb]: "key1",
}

// console.log(user["userid"])
// console.log(user[mysyb])
// console.log(user)

const objt1 = {
    name: "Faizan",
    roll: 22,
    id: 1112
}
const objt4 = {
    1: "a",
    2: "b"
}

let newobj = {...objt4, ...objt1}
console.log(newobj)