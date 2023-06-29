
//kuch bhi define nahi karne pr var bn jata hai apne aap
function getAge() {
    age = 21;
    console.log(age);
}

getAge()



age = 12;
console.log(age)//12 automatic var se declare ho gaya


//'use-strict'  se variable ko bnane se pahle declare karna padega
//ekdam strict
//no hosting use
/*
function getAge1(){
    'use strict'
    age1=21;
    console.log(age1);
}

getAge1()//age1 is not define
*/


//eval function string ke andar sari value ko exprssion me change karke multiplicationx

const sum = eval('10*10+5')//105
console.log(sum)


// sessionStorage == jb tk tab open rhta hain tbhi tk store rhta hai
// localStorage == jb tk manually clear nhi karte tb tk  rhta hain 

const obj =
    { 1: "a", 2: "b", 3: "c" }

//var ko number jaisa define nhi kar sakte hain
//obj ki key ko to define kar hi sakte hain
//us key ko as a number ya as a string check karo dono me kam karegi
console.log(obj.hasOwnProperty("1"))//true
console.log(obj.hasOwnProperty(1))//true

const objj = { a: "one", b: "two", a: "three" }//{a: 'three', b: 'two'}
// a ko over rigt but position first hi 
console.log(objj)


for (let i = 1; i < 5; i++) {
    if (i === 3) continue;//jb three ho jaye to direct continue karega  console.log(i) lko execute nhi karega
    console.log(i)//iske aage ka code execute karega
}//1,2,4



/*
const foo = ()=>console.log("first")
const bar = ()=>setTimeout(()=> console.log("second"))
const baz = ()=>console.log("third")

//function ko kis trh call karte us pr depend karta
//bar me setTime hai sabse last me execute  foo-baz-bar
bar()
foo()
baz()
*/



const person = { name: "aman" }

function sayHi(age) {
    return `${this.name} is ${age}`
}
console.log(sayHi.call(person, 21))
console.log(sayHi.bind(person, 21)())//bind ko manually call karna hoga
//or
// const bin = sayHi.bind(person,21)
// console.log(bin())



function sayHii() {
    return (() => 0)()    //arrow function emmidiatly call ho chuka hai
    // return me arrow function hai 0 return kar raha 
    // sayHii bhi 0 return
}
console.log(typeof sayHii())//number


function sayHiii() {
    return (() => 0)

}
console.log(typeof sayHiii())//fuction
console.log(typeof sayHiii()())//function ke andar function call ho gaya
//number


console.log(typeof 1)//number
console.log(typeof typeof 1)//string ,number ka type string

const num = [1, 2, 3]
num[6] = 11;
//value nhi to empty
console.log(num)//[1, 2, 3, empty × 3, 11]

const numm = [1, 2, 3]
numm[9] = numm;
//6 th positin me usi array ko daal diya
console.log(numm)
//enfinte condition tk nested array bnega
//har 9 th position me array dalta rahega



///////////////////////////////////////////////////////////////////
//everythings in javascript is a object
//kewal object nhi
//primtive or object both hoga






//kisi bhi string ko false me convert
console.log(!null);//true
console.log(!!null);//false
console.log(!!"");//false
console.log(!1);//false
console.log(!!1);//true



// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
//ye alag id generate karti 

//jb bhi setInterval ko call karenge to wo unique id dega
//jb bhi bnd karna hoga to usi id ko call karna



console.log([..."aman"])//[ 'a', 'm', 'a', 'n' ]


const fPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one')
})

const sPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'second')
})


//Promise.race([fPromise,sPromise]).then(res=>console.log(res))

//race means jitne bhi promise ho jo pahle resolve ho gaya usi ka output dikhega


let pson = { name: "aman" };
//jb bhi objest se ek array generate karte 
const mem = [pson]
//pson alg ha men alg constant ha
//dono ki memory location alag alag hai
//obj ko khali liya array waise hi raha
pson = null
console.log(mem) //[ { name: 'aman' } ]




const person1 = {
    name: "aman",
    age: 22
}

for (const item in person1) {
    console.log(item)
    //name, age 
    ///key name deta hai
}



let data = 3 + 4 + '5'//75 string bcz 5 to string hi hai
console.log(typeof data)

console.log(typeof 3 + 4 + '5')//number45

//opreations left to right chalta hai
//pahle 3 ka type number nikla 4and 5 ko add kar diya==45 jo ki string bni thi

console.log(typeof (3 + 4 + + '5'))//3+4=7=>7+5=12 number
//kisi bhi string ke samne + lga kar number me change 


console.log([] == [])//flase

let d = [1, 2, 3].map(num => {
    if (typeof num === 'number') return /////return me kuch return hi nhi kar raha 

    return num * 2
})
//tino number the

///return me kuch return hi nhi kar raha 
console.log(d)//(3) [undefined, undefined, undefined]



function getInformation(member) {
    member.name = "aman"
}

const persons = { name: "am" }//yahna person obj hai

getInformation(persons)//jb bhi obj ko as a parameter ko pass karte hain to wo call by refrense kam karegi
//
console.log(persons)//aman




function Car() {
    this.make = "tata"
    return { make: "kia" }
}
//property bna dete hai to wahi return karte hai
//jb kuch return na kare to

//jb return karenge to purane property ko overwrite karti 
const myCar = new Car()
console.log(myCar.make)//kia

    (() => {
        let x = y = 10
        //looks like

        //let x=10;
        //y=10

    })();
//y variable bn gaya hai jo let,const,var ke sath nhi
//bydefault var 
//let blocklevel scope
console.log(typeof y)///number





    (() => {
        let x = (y = 10)

    })()
//let blocklevel scope
console.log(typeof x)///undefine



console.log(!true - true)//-1

console.log(true + + '10')//10
//+ add se string 10 ko numeric me change