
console.log({} + {})//[object Object][object Object]
console.log(typeof ({} + {}))//string

console.log([] + [])//string
console.log(typeof ([] + []))//string

console.log(typeof [])//object
//1

let a = []
let b = []
//normally compare
console.log(a == b)//false


//strictly compare
console.log(a === b)//false

//array primtive data type hai refrence leta ha

//do array compare me memory ki location compare hoti 
//kisi do ki memory location same nhi ho sakti

//2

let c = []
let d = c
//c ki memory location #ewwee
//usi ko d me assign kar diya
//to d ki memory location same ho gai hogi
console.log(c == d)//true
console.log(c === d)//true


//3
let aa = [20]
let bb = [20]
console.log(a[0] == b[0])///true
console.log(a[0] === b[0])//true

//bcz yahna par element ki value compare ho rhi na ki memory location

//[] memory location compare , [1]  value compare

//4
let z = [1, 2, 3, 4]
let y = {
    name: "Aman"
}

//destrucre == array , object break hokar element bahar aa jayenge
console.log(...z)

//5
console.log(typeof (NaN)) //number



//6
let data = "aman"
console.log(isNaN(data)) //true


////////string to  number se devide pr  NAN aata hai/////////

//Non numeric ko numeric se devide karne par nan aata hai


//7
console.log(data / 2) //nan


//8
let data1 = 10 - -10;

console.log(data1)//20

//10-10=0, 10--10 = 20

//set ek type ka alag se data type ya structure hota jaise array

//set ke jitne bhi element honge duplicate element ko delete karta hai


//9
let set = new Set([1, 1, 2, 3, 4, 4, 5])

console.log(set)//[1,2,3,4,5]
console.log(typeof (set)) //object


//set ==> type of = object

//remove duplicates number from array
const Arr = [1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1];
console.log(...new Set(Arr))//1,2,3,4





//10
let obj = { name: "Aman" }

console.log(delete obj.name) //true



//11
let obbj = { name: "Aman" }
//add properties
obbj.class = 10
console.log(obbj.name)
console.log(obbj['name'])
console.log(obbj['class'])




let data21 = { name: "aMan" }

console.log(delete data21) //false

//obj ko direct delete nhi kae sakte
//propety ko delete kar sakte hain



const dd = ["aman", "mishra", "ji"]

//destructuring
const [w] = dd
console.log(w)
//array me dustructre se element  to sabse pahle element ko dega

const [as, aw] = dd
console.log(as, aw) //aman, mishra



const arr = [1, 2, 3, 4]

const [, b1, , da] = arr
console.log(b, d)//2,4



const e = ["aman", "mishra", "ji"]
//second element ko access
const [, q] = e


//third element
const [, , r] = e
console.log(q)
console.log(r)


//aceess object property without . dot notation
const oobj = { name: "aman", age: "22", skill: "js" }

console.log(oobj['name'])
//dot se
console.log(oobj.name)
//destructure se
//object ke andar first second element specify ki jaruret nhi hoti array ki tra bs key name dallo access ho jayega

const { name, age } = oobj
console.log(name, age)



////////merge 2 object

let d1 = { name: "aman", class: "12" }
let d2 = { email: "aman@123gmail.com", skill: "js" }

d1 = { ...d1, ...d2 }
console.log(d1)

let d11 = { name: "aman", class: "12" }
let d22 = { city: "lucknow" }
d11 = { d11, ...d22 }

console.log(d11)//{ d11: { name: 'aman', class: '12' }, city: 'lucknow' }

//bcz destruct kiya nhi d11 ko





//ab agar dono object me koi common key ho to key me last ki value aayegi position wahi rahega
let d01 = { name: "aman", class: "12", skill: "html" }
let d02 = { email: "aman@123gmail.com", skill: "js" }
let d001 = { ...d01, ...d02 }
console.log(d001)  //{ name: 'aman', class: '12', skill: 'js', email: 'aman@123gmail.com' }



const name1 = "Aman"
//console.log(name1()) //name1 is not a functions   




//  =>>|| ==or

const bool = false || {} || null

console.log(bool)//object

//jb bhi or opreater ko use karte hai to o pahli true value lekar chalta hain

//sabse pahle false mili count nhi kiya // fir pahuncha {} pr -->object ko hm positive value concede karte

//null tk pahunchega hi nhi

if ({}) {
    console.log("yes")
}

console.log(bool)//object




const bool1 = false || 20 || 22

console.log(bool1)//20

//jo bhi positive value pahle milti hai wahi aati ah

const bool11 = 20 || 22 || null

console.log(bool11)//20

//jis position pr positive value milti hain wahin par ruk jati hai

const res = null || false || '';
//''  empty string hmesha false hoti

console.log(res)//empty string aati h

//yahna to positive value hai hi nahi

//true check kar rahe to koi bhi true nhi mili to last ki utha leta ha

const ress = null || false || null; //null aayega

const resi = [] || 0 || true

//[] ko true manate
console.log(resi)


console.log(Promise.resolve(5))//promise fullfilled  dega
//resolve ke andar apne aap hi promise hota




console.log(typeof (null))//object
console.log(typeof (undefined))//undefined