
console.log("Hello developer")

/////////////////////////////////Closure in Js

//A closure is the combination of a function and the lexical environment within which that function was declared

// In JavaScript, closures are created every time a function is created, at function creation time.


//closure ==>> a fuction with lexical scope is known as closure

//closure==>> lexical scope pr depend karta hai

//lexical scope ==>  

let data = 10;

function test() {
    console.log("10", data)
}

test()

//ab data print hoga 10 

//bahar ki value function ke andar access ho sakti hai


let data11 = 10;

function test1() {
    let a = 100

    console.log(data11)
}

test1()
//console.log("value of a",a)


//ek function ke andar ki koi value ko function ke bahar eaccess nhi kar sakte

//yahi lexical scope hai

//koi bhi outer value function ke andar access ho sakti hai 

//lekin andar ki value bahar access nhi ho sakti 

// ye lexical scope bn jata hai uska

//outer value can access inside==1

//inner not accessible outside==2

// 1 and 2 dono mile jaye to lexical scope bnta hai



//ab function ke andar ek function bnate hai




function test11() {
    let a = 100

    function inner() {
        console.log("teat11", a)
    }
    inner()
}

test11()


//yahna 100 access ho gaya 

function test0() {
    let a = 105

    function inner1() {
        return a
    }
    console.log("inner1", inner1())
}

test0()

/// lekin return kare to

//js me allow hai ki function ko return kar sakte


function test00() {
    let a = 1000

    return function inner12() {
        return a
    }

}

console.log("return a function", test00())

//output me ek function milta

// return a+function ƒ inner12() {
//     return a
// }

let in1 = test00()

//tset00() function call kar liya to inner12() ka lexical scope khatm ho gay

console.log("in1", in1())

//a return hota hai console me 

//directly a ko call karene to 


//console.log(a)

//a nhi acees hoga lexical scope nhi ha bhr ho gaya

//andar ka function  inner12()  ne bhr ki a=1000 value ko yaad rakh liya

//ki a  var ki value 1000 hai

console.dir(in1)

//ab iske scope ko open karege console me to ye btata hi ki koi a name ka variable hai   

//yhi closer hai












/*
function test(){
    let a = 100

   return function inner(){
       return a
    }
    
}

let in1 = test()

console.log(in1())

yahna pr inner func ne yad kar liya a ki value ko 

test()  call kiya to test ka scope khatm ho gaya

inner bch gaya inner ne a ko yad rakh

yahi closure hai


inner( )  ke liye a  lexical scope ki value hai


bahr ki value ek lexicalscope ki value funcion ke sath mil jaye ==>>> wahi closure hai

hmesa uske scope me bni rahti

*/



////function ke andar ek aur function return karate

//multi closure

//ek closure tesst  ke pass hai ek iinner ke pass hai

function outer() {

    let outValue = 100

    return function test9() {
        let a = 300

        return function inner9() {
            return a * outValue
        }

    }
}
//ek closure tesst  ke pass hai ek iinner ke pass hai



//outer se test return test se inner return

let test9 = outer()

let inner9 = test9()

//console.log("qqq", innerr())

console.dir(inner9)
//console.dir(test9()())


//ye btatta hai console me ki


//scope me jane pr btata hai ki


// [[Scopes]]
// : 
// Scopes[4]
// 0
// : 
// Closure (test9) {a: 300}
// 1
// : 
// Closure (outer) {outValue: 100}
// 2
// : 
// Script {data: 10, data11: 10, in1: ƒ, test9: ƒ, inner9: ƒ}



//outer funccton ke andar closure h uska 100

//inner ka closure 300 hai

//yahna bh inner wali function ne value ko yad rakah




///ab bahar func kp remove kar dete hai



function test89() {
    let a = 300

    return function inner89() {
        return a * a
    }

}


let inn = test89()

console.log(inn())
//console.dir(inn)

//ab yahna ek hi closure hai 300



function test09() {
    let a = 300

    let fun = function inner09() {
        return a * a
    }
    a = 20;

    return fun

}
//bad ki value execute hogi 

//a=20 hai  so 20*20 =400



let inn00 = test09()

console.log(inn00())





function test49() {
    let a = 300

    let fun = function inner49() {
        a = 10;
        return a * a
    }
    a = 20;

    return fun

}
//bad ki value execute hogi 

//a=10== 100 milega

let inn056 = test49()

console.log(inn056())


///////increment


function testinb() {
    let a = 300

    let fun = function inner49() {
        let a = 0;
        a++
        return a

        // The result is not 301 because you mix up the globaland local counter

        //result is 1 ,1,1,1
    }


    return fun

}


let inninv = testinb()

console.log(inninv())
console.log(inninv())
console.log(inninv())
console.log(inninv())





function testin() {
    let a = 300

    let fun = function inner49() {
        a++
        return a++


    }


    return fun

}


let innin = testin()

console.log("iii", innin())
console.log(innin())
console.log(innin())
console.log(innin())

//har bar increase hokar value aaygi bcz pahle wali value memorize ho gai thi
//  301
//  closer.js:332 ==303
//  closer.js:333== 305
//  closer.js:334 ==307

function add(x) {
    return function add1(y) {
        return x + y
    }
}

let add5 = add(5)
let add10 = add5(10)


//add5  add10 dono closure form hai

//add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

// add5 and add10 both form closures. They share the same function body definition, but store different lexical environments. 

//In add5's lexical environment, x is 5,

// while in the lexical environment for add10, x is 10.


console.log(add10)

/*
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
*/




const e = 10;


function sum1(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e
            }
        }
    }
}




console.log(sum1(2)(3)(4)(5))


const f = 10;

function add22(a) {
    return function add33(b) {
        return function add44(c) {
            return function add55(d) {
                return a + b + c + d + f
            }
        }
    }
}

const add01 = add22(10);
const ad = add01(12)
const a2 = ad(13);
const a4 = a2(14)
console.log(a4)







var numv = 15;
function outerr() {
    var numv = 10;
    function innerr() {
        numv++//yahna 10+1 =11 hoga
        var numv = 5//but yahna fir declare reassign hai so yahi lega 
        console.log("num =", numv)

    }
    innerr()
}
outerr()



////////////////////////////////////currying/////////////////////////////////////////////
function summ(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return console.log(a + b + c + d)
            }
        }
    }
}

//access using currying metods
summ(11)(12)(13)(14)



const sum16 = (a) => (b) => (c) => (d) => (a + b + c + d)
const q = sum16(1)(2)(3)(4)
console.log(q)


const sumq = (a) => (b) => (c) => (d) => console.log((a + b + c + d))
sumq(1)(2)(3)(4)
