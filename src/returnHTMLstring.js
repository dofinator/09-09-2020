let arrayOfNames = ["Lars", "Peter", "Jan", "Ian"]

console.log(arrayOfNames)


let newArray = arrayOfNames.map(function (name){
        return '<li>' + name + '</li>'  
})

newArray.unshift("<ul>")
newArray.push("</ul>")

let stringArray = newArray.join("")

console.log(stringArray);



