

const obj = { name: "aman" }
console.log(obj)

const mapObj = new Map([
    ['name', "pransh"]
])

console.log(mapObj)






//agr object ki key me number assign kare to get karne me eror deta hai 
//map me nhi deta

const obj1 = { name: "aman", 10: "an" }
console.log(obj1)
//console.log(obj1.10)=> errors dega


const mapObj1 = new Map([
    ['name', "pransh"], [10, 'this is key for Map']
])

console.log(mapObj1)
//map me key ko   .get()     se get karte hain
console.log(mapObj1.get(10))









//obj ke andar boolean ko ke bnate hain to wo boolean na rhkar key ho jati h

const obj2 = { name: "aman", true: "this is boolean object value" }
console.log(obj2.true)


//map  true ko boolean smjhta hai
const mapObj2 = new Map([
    ['name', "pransh"], [true, 'this is true key for Map']
])

console.log(mapObj2)

console.log(mapObj2.get(true))


//object ke andar kewal string key hi use kar sakte hain
//map me koi bhi data type ho sakti hai== number,boolean,array,string,array,object






//keys ko access karna ho to

//object me loop lagakar milti hai
const obj3 = { name: "aman", true: "this is boolean object value" }

//console.log(obj3.keys())//error not a function


//map me key ko   .keys()== se milti hai
const mapObj3 = new Map([
    ['name', "pransh"], [true, 'this is true key for Map']
])

console.log(mapObj3.keys())//'name',true




//add a new property
const obj4 = { name: "aman", true: "this is boolean object value" }
obj4.city = "lko"
console.log(obj4)









const mapObj4 = new Map([
    ['name', "pransh"], [true, 'this is true key for Map']
])
mapObj4.set('city', 'lko')
mapObj4.set('name', 'aman')
console.log(mapObj4.keys())//'name',true,'city'

//value get karna ho to
console.log(mapObj4.values())//MapIterator {'pransh', 'this is true key for Map', 'lko'}


//size get karna ho to

console.log(mapObj4.size)//3

//delete karni ho to

console.log(mapObj4.delete('name'))

console.log(mapObj4.has(true))//true
console.log(mapObj4.has("aba"))//false

//delete ke bad
console.log(mapObj4.size)//2









//loops

const mapObj5 = new Map([
    ['name', "pransh"], ["about", 'gentel man']
])


//parameter me ulta leta hi  pahle parameter value hota 
//dusra key hoti hai
mapObj5.forEach((value, key) => {
    console.log(value)//pransh,gentelman
    console.log(key)//name,about

})



//for of

const mapObj6 = new Map([
    ['name1', "pransh"], ["abouts", 'gentel man']
])

for (x of mapObj6) {
    console.log(x)//key value ka pair dikhta hai
    console.log(x[0])//key milti   ==>  name1,abouts
    console.log(x[1])//value milti ha==>  pransh, gentleman
}





const mapObj7 = new Map([
    ['name1', "pransh"], ["abouts", 'gentel man']
])

for ([key, value] of mapObj7) {
    console.log(key)//key
    console.log(value)//value
}







//key koi bhi datatype ho sakti hai
const mapObj8 = new Map([
    ['fname', "pransh"], ["lname", 'tripathi']
])

mapObj8.set({}, 'inhauna naresh')

mapObj8.set(() => { }, 'Arrow functio')
console.log("empty", mapObj8)//Map(4) {'fname' => 'pransh', 'lname' => 'tripathi', {…} => 'inhauna naresh', ƒ => 'Arrow functio'}

for ([k, v] of mapObj8) {

    console.log("key arr", k)//fname,lname,{},()=>{}
}


console.log("tyoe of", typeof (mapObj8))//object 