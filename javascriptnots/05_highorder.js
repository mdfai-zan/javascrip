const map = new Map()

map.set("india", "namste")
map.set("pakistan", "assalam")
map.set("englend", "Heloo")

// console.log(map)

// for(const [key, value] of map){          // for of loop
//     console.log(key, "=", value)
// }


const obj = {
    "in": "india",
    "pak": "pakistan",
    "en": "englend"
}

// for(const vel in obj){                    // for in loop
//     console.log(vel, "=", obj[vel])
// }

const numbers = [1, 2, 4, 5]
// for(const vel in numbers){      // for in return index of array or objects
//     console.log(arr[vel])
// }

// high order function
const language = [
    {
        langNAme : "java",
        langFile: "java"
    },
    {
        langNAme : "javascript",
        langFile: "js"
    },
    {
        langNAme : "c++",
        langFile: "cpp"
    }
]

language.forEach((item) => {
    console.log(item.langFile)
})
