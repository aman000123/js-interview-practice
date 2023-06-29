

// function constructor
function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}
// this will show Person's prototype property.
console.log(Person.prototype);


const ob = { name: "aman" };
ob.prototype.classs = 12
console.log("ob", ob)