const obj = new Object()
obj.name = "aman"
obj.classs = "11"
console.log(obj)



// const a ={name:"aman"}
// const b = Object.create(a,{value:'amamam'})
// console.log(b)


const car = { name: "kia" }
const model = { mod: "0003" }
const t = Object.assign({ color: "blue" }, car, model)
console.log(t)


// test()
// function test(){
//     console.log("hello")
// }


console.log(typeof (null))
console.log(typeof (undefined))


// (() => {
//     console.log("hello")
// })()

const person = {
    name: "aman mishra",
    sayMyNames: function () {
        console.log(`my name is ${this.name}`)
    }
}
//to envoke function  dot .
person['sayMyNames()']




const Arr = [1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1];
console.log(...new Set(Arr))
console.log(typeof (Arr))


const arr = [1, 2, 3, 4]

const [, b, , d] = arr
console.log(b, d)



const str = "aman"

console.log(typeof !str)