

//create an array
//1
//const arr = [elem1,elem2,elem3]


//2
const ar = []
ar[0] = 1
ar[1] = 2
console.log(ar)


//3
//using new keyword with constructor
const ar1 = new Array(1, 2, 3, 4)
console.log(ar1)
//new keyword se bna array much more faster run karte h in compare of this [] literals


//when to use which methods
//both methods have own advantageous
//new se create karne par depend karta type of arg pr

const a1 = [1, 2, 3, 4, 5]
const a11 = new Array(11, "22", "hello", 44, 55)//4 length h
console.log(a1.length)//5
console.log(a11.length)//5


const a21 = new Array(5)
//length 1 honi chahiye but ye size of array man leta hai argument ko
console.log(a21.length)//5
console.log(a21[1])///undefined
console.log(a21[3])///undefined
console.log(a21[2])///undefined





///////////////////////////////////////////////////////////////////////////////////////////////////////
//create object

//using object leterals

const obj = {
    name: "aman",
    class: "12"
}
//you can modify properties inside the object
//but can not assign new property





//using new keywords=== 2 types se

//1-
//built-in object constructor function

const obj1 = new Object()
//now assign values
obj1.fname = 'aman'
obj1.lname = "mishra"
console.log(obj1)//{ fname: 'aman', lname: 'mishra' }


////2
//user define costruction functions
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname
}

const p = new Person("aman", "mis")
console.log(p)//Person { fname: 'aman', lname: 'mis' }





/////////////using      Object.create() methods

//The Object.create() method creates a new object using the prototype of the given object.


//use when we want to create object from other existings object
//this methods used when we want properties from  one objects


const companyObj = { company: 'abc', employee: '12', attendence: '22' }
const employee = Object.create(companyObj, { name: { value: 'aaaa' } })//this obj which has all objects of companyObj
console.log("create", employee)


const cp = Object.create(companyObj)
cp.employee = 222
cp.company = 'aaaa'

console.log(cp)//{ employee: 222, company: 'aaaa' }


//Object.assign()

//this methods used when we want properties from more than one objects

//2,3 object ko combine kar sakte 

const c = { company: 'kia' }
const c11 = { car: 'tata' }
//ne object create using c,c11 objects

const c111 = Object.assign({}, c, c11)
const c1111 = Object.assign({ class: 12 }, c, c11)
//{}me property assign kar sakte
console.log(c111)//{ company: 'kia', car: 'tata' }
console.log(c1111)//{ class: 12, company: 'kia', car: 'tata' }



/////////////////////////////////////////////////////////////////////////////////////////////
//by using class methods Es-6
//like constructor function
//in Es-6 cunstrutor fun replace by classes

class Persons {
    constructor(fname, lname, classes) {
        this.fname = fname;
        this.lname = lname;
        this.classes = classes
    }
}
const per = new Persons("aman", "mishra", "3", "lkklk")
console.log(per)//Persons { fname: 'aman', lname: 'mishra', classes: '3' }










////////////////////////////