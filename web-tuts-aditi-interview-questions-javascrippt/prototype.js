




//protype is just an object which has attached each and every methods==> object , function ,array etc


//prototypes =====>  prototypes are the mechanism by which javascript objects inherit feature from one other

//javascript ke by default kai prototype hote hai

//jb bhi hm khud ka array, obj, function bnate hai to javascript usme kuch hidden property add kar deti ahi
//wahi prototype hai



//const arr = [1,2,3]  =>  Array.prototype===arr.__proto__

//Array.prototype===arr.__proto__


//arr.__proto__  iska bhi apna khud ka prototype hoga

//jb bhi hm array bnate hai to it has its prototye which   is   =>>>>> Array.prototype


//Array.prototype  object ke pass bhprototype hota hai


//Object.prototype  ==  object.__proto__

//object.__proto__.__proto   ===>>> null



//ek func  function bnaya hai
//Function.prototype=== func.__proto__

//func.__proto__.__prototype == Object.prptotype

//func aage chalkar object prototype ke brabar ho gaya

// isiliye  every things in js object

//chahe array bnaye ya function bnaye ya object bnaye

//yah sab kahi na kahin prototyepchain me object ke roop me ends hote ha

//this is whole prototypechain is

//yah null pr end hota hai






//protype is just an object which has attached each and every methods==> object , function ,array etc


//object isliye kaha ki --- evrythings in javascripts are objects=== prototype array ,string me sabhi me use

//kore javascript me inheritence prototype se hi hota hai

//es-6 me class se hota

//javascipt bahut sari property ko prototype me bna leti hai
//jb jarurat ho tbhi load ho faltu me browser ko heavy na kare


//javascript bhut sare inbuilt property use karti hai

//hm aise property bna sakte hai

//jaise hi hm koi object bnaye to console me bydefault property mil jaye




//har object ke sath me agr hme property add karni ho to
//kuch extra property 


//object jo datatype hai uske sath hi prototype me assign kardete

//prototype me function string etc ko assign kar sakte hain

Object.prototype.myAppData = "my prototype"
Object.prototype.myData = function () {
    return "custom function"
}


//ab niche jo object bna hai usse get kar sakte hain is prototypes ko
//student.myData() se ==> "custom function"  output mitlt

//string ke sath use karte


String.prototype.otherData = "this is my testing prototype string"

//browser me 
//let a ="aman"
//a.otherData ===>  enter karne pr==  this is my testing prototype string  milte ha
//prototype ke karan


String.prototype.customLength = function () {
    return this.length + 2
}
//student obj me name string hai
//student.name.customLength    se ye output milta hai
//student.name.customLength()  == 6  aman=4; +2 kiya ha 4+2=6




//in built property ko bhi change kar sakte hai

//student.name.bold()==>'<b>aman</b>'

//in built property ko bhi change nhi karna chahiye bcz pure projecys pr effects hogs


//isliye khud ki custom prototype bna lo but inbuilt change nhi karte

//String.prototype.bold  => change nhi karte

//bydefault property ko override nhi karni chahiye



let studentt = {
    name: "aman",
    lname: "mishra",
    getFullName: function () {
        return this.name + " " + this.lname
    }
}

//console.log(student.getFullName())//aman mishra

//browser ke console me student dale to pura object deta hai bcz yah memory me yad ho gaya browser ko


let teacherr = {
    name: "k d",
    lname: "pandey",
    getFullName: function () {
        return this.name + " " + this.lname
    }
}



console.log(studentt.getFullName())
console.log(teacherr.getFullName())




//dono objects me getFullName()  repeat ho raha hai
//isko common jgh rakhkar use karte hai

//but jo this laga hai means usi object ka name hi uthayega 
//object se getFullName() function ko alag kar dene par
//this milega hi nhi








let sstudent = {
    name: "aman",
    lname: "mishra",
    birth: 2000,
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    },
    getFullName: function () {
        return this.name + " " + this.lname
    }
}


let tteacher = {
    name: "k d",
    lname: "pandey",
    birth: 1980,
    getFullName: function () {
        return this.name + " " + this.lname
    },
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    }
}



console.log(sstudent.getAge())
console.log(tteacher.getAge())



//code kai bar duplicate ho raha repeat ho raha hi

//iska solution prototype hai

//dono function ko alag alag kar lete hai


let users = {
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    },
    getFullName: function () {
        return this.name + " " + this.lname
    }

}

let student = {
    name: "aman",
    lname: "mishra",
    birth: 2000,

}


let teacher = {
    name: "k d",
    lname: "pandey",
    birth: 1980,

}

//user function ko protype me assign kar diya
teacher.__proto__ = users;
student.__proto__ = users


//prototype me assign karne se ekdam se load nhi hota jb jarurat hoti hai tb load hoga


//prototype me assign karne se direct function nhi load hoga prototype me chala jata hai

//browser me student dalne pr function getAge() getFullNmae()  nhi milta hai prototype me jata hai



//student.getAge()  karte hain to mil jata 

//prototyoe me chala jata hia

console.log(student)  //aise karne se getAge(), getFulllNmae() function student ke prototype me chala gaya
console.log(teacher.getAge())











//bina prototype bhi use karte hai

//direct assign karte hai



let users1 = {
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    },
    getFullName: function () {
        return this.name + " " + this.lname
    }

}


//object me hi assign kar dete hai function ko

let student1 = {
    name: "aman",
    lname: "mishra",
    birth: 2000,
    getAge: users1.getAge

    //jb property ko direct assign karte hai to iska alg hi effect hota hai

    //function turant hi load ho jata ha  browser console me student likha to turant hi getAge() property mil jatai hai


    //// directle assign se===> student1 ki sari ki sari property load ho jati ha



    //prototype me assign karne se ekdam se load nhi hota jb jarurat hoti hai tb load hoga

    //isse project slow ho jata hi
}


let teacher1 = {
    name: "k d",
    lname: "pandey",
    birth: 1980,
    getAge: users1.getAge

}


// teacher1.__proto__ = users;
// student1.__proto__ = users


console.log(student1.getAge())
console.log(teacher1.getAge())




////////////////////////////////////////////////////////////////////////////////////////////////////
//directly assign karne pr sara ka sara data ek sath load ho gaya

//jb prototype me assign kar diya tojb need hogi tb load hoga

/////////////////////////////////////////////////////////////////////////