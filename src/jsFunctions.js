//Function Decleration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

var mul = function (n1,n2){
    return n1 * n2
}

//Callback example
var cb = function (n1, n2, callback) {

    if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        throw new exception("forfra")
    }
}

console.log(add(1, 2))     // What will this print? 
// answer = 3

console.log(add)          // What will it print and what does add represent?
// answer = function med navnet add vil kaldes, da der ikke er ()

console.log(add(1, 2, 3)) // What will it print
// answer = 3, da add fucntion kun tager 2 parametre

console.log(add(1))      // What will it print
// answer = intet, da der mangler et parameter

console.log(cb(3, 3, add)) // What will it print
// answer = den printer 3 + 3 = 6, da add får parametrerne med fra cb metoden

console.log(cb(4, 3, sub)) // What will it print
// answer = 4 + 3 = 1

//console.log(cb(3,3,add())) // What will it print (and what was the problem)
// answer = 3 + 3 = null, når det er en callback, skal vi ikke kalde function med parametre

try {
    console.log(cb(3, "hh", add))// What will it print
// answer = 3 + hh = 3hh
} catch (e) {
    console.log("det skal være tal og eller en function");
}

console.log(cb(3,3,mul));

console.log(cb(4,2,function (n1,n2){return n1/n2}));

// Getting comfortable with filter, map and forEach:

// 1)
let nameArray = ["Ph","Chr","Sumit","Sebsastian","Lukas"]

let filteredArray = nameArray.filter(n => n.length <= 3)

console.log(nameArray);
console.log(filteredArray);

let uppCaseNames = nameArray.map(n => n.toUpperCase())

console.log(uppCaseNames);

