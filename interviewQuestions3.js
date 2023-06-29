

//variable ko pahle declare kar sakte hai fir use bhi kar sakte
/*
console.log(xx)//undefined==>declare to kiya but value nhi dali
var xx;

console.log(b)  //not defined==> declare hi nhi kiya hai
*/


console.log([[[[]]]]) //output me nested array bna kar deta hain


//sabse andar array ke andar 0 element 

///sabse bahar wale ke pas 3 element array ha 
//fir uske andar ke passs 2 array
//fir uske ek
//sabse andar array ke andar 0 element 


//operating system ka name kaise find karenge

//navigate.platform==> console me dalne pr  plateform number deta hai


//let for = 100;//nhi chalega 
//for loop hai reserve keyword hai  variable me declare nhi kar sakte




/*
//hosting concept
///var ko use kar lo bad me declare 
function fruit(){
    console.log(name);
    console.log(price)


var name ="aman"//undefined
let price = 132//error not initilaise after use
}

fruit()
*/



/*
for(var i=0;i<3;i++){
    setTimeout(()=>console.log(i),1)
}
//3,3,3
//pahle for loop chala==> to var  tha==> global bn gaye
//var global scope hai
//pahle global var 0,tha fir1,fir 2,3,bna jaise hi 3 global variable bna
//uske bad settime chala usne i print kiya tb tk i==3 ho chuka tha
//time interval sabse baad me chalat hi jb current code execute ho jata hai



for(let i=0;i<3;i++){
    setTimeout(()=>console.log(i),1)
}
//0,1,2
//let block level hai
///settime ke andar he bar alag alag i gaya 


*/



console.warn(+true)//1
//+ lagane ke bad number me bdal jata hai
console.log(typeof +true)//number


console.log(!"aman")//false==> string ka opposite false 
console.log(typeof ("aman"))//string


let data = "size"
const bird = {
    size: "small"
}

console.log(bird.size)//small
console.log(bird["size"])//small
console.log(bird[data])//small
console.log(bird.data)//undefined


let c = {
    name: "aman"
}

let d;
d = c;//refrence copy ya locations copy
c.name = "atul"
console.log(d.name)
//c me change to d me bhi hoga bcz dono ki locations same hi hai



/*
var x;
var x=10;
console.log(x)
//x ko kai bar declare jar sakte 

var x;
let x=10;
console.log(x)//x can not be redclared
*/



let a = 3;//type number
let b = new Number(3)//object bnta hai constructor ke sath yse


console.log(a == b)//true
console.log(a === b)//false

let name;
nmae = {}
console.log(name)//undefined



function fruit() {
    console.log("mango")
}

fruit.name = "apple"//name add karne se koi error nhi

fruit()//mango

function sum(a, b) {
    return a + b
}
console.log(sum(1, "3"))//13==>  a=number , b== string
//number ko string se add to number bhi strin bnta hai

let num = 0
console.log(num++)//0
//post incrment console print ke bad hoga
//1 ho gai
//pre increment 1+1==2
console.log(++num)//2
console.log(num)//2


function getAge(...arg) {
    console.log(typeof arg)
}
//spread opreator ka type of object hota hai
//array ka type object
getAge(21)//object

