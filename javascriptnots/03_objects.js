const mysyb = Symbol("key1");

const user = {
    name: "Faizan",
    id: 104,
    email: "Faizan@gamil.com",
    phone: 9219788718,
    "userid": "fzan@001",
    [mysyb]: "key1",
}

console.log(user["userid"])