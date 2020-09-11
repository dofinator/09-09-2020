//Opgave a)
let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];

//opgave b)
let mixedGender = boys.concat(girls)

console.log(mixedGender)

//opgave c)
let string1 = mixedGender.join()
console.log(string1)
let string2 = mixedGender.join("-")
console.log(string2);

//opgave d)
mixedGender.push("Lone", "gitte")
console.log(mixedGender);

//opgave e)
mixedGender.unshift("hans", "kurt")
console.log(mixedGender)

//opgave f)
mixedGender.shift()
console.log(mixedGender)

//opgave g)
mixedGender.pop()
console.log(mixedGender)

//opgave h)
mixedGender.splice(4, 2)
console.log(mixedGender)

//opgave i)
let revMixedGender = mixedGender.reverse()
console.log(revMixedGender)

//opgave j)
mixedGender.sort()
console.log(mixedGender)

//opgave k % l)
let uppercaseMixedGender = mixedGender.map(name => name.toUpperCase())
uppercaseMixedGender.sort()
console.log(uppercaseMixedGender)

//opgave l)
console.log(mixedGender);
function filterName(arrayOfNames, index) {
    var filteredNames = arrayOfNames.filter(function (word) {
                if(word[index] == "l" || word[index] == "L")
                return word
            })
    return filteredNames
}
console.log(filterName(mixedGender, 0))
