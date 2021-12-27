/* console.log('Starting with the bootcamp')

let firstName = 'Carlos' // let enable to reasign the value os a variable, example:
console.log(firstName)
firstName = 'Juan'
console.log(firstName)

const lastName = 'Vargas' // const disable the possibility to reasign the values of variable. When you create a let variable inside of a scope, this variable will be only avaible inside of that scope
console.log(lastName)
lastName = 'Pérez'
console.log(lastName) // Uncaught TypeError: Assignment to constant variable.
 */

/* const firstName = 'Carlos'
// firstName.toUpperCase() //this will be return the same string because the strings cannot be changed they are immutables

const firstNameWithUpperCase = firstName.toUpperCase()

console.log(firstNameWithUpperCase) */

/* const list = [] // a const variable cannot be reasigned but that doesn't mean that they cannot be changed, as a list or array "list" can have new values
list.push(132)

console.log(list[0]) */


const person = {
    name: 'Carlos',
    twitter: '@xarloso',
    age: 19,
    isDeveloper: false,
    links: ['https://github.com/varlopecar', 'https://www.instagram.com/crls_v/']
}

//const field = 'twitter'

//console.log(person[field]) //Here we call the property of the object by asigning a dynamic variable so we have to use square brackets

const addition = (param1, param2) => {
    console.log(param1)
    console.log(param2)
    return param1 + param2
}

console.log(addition(1, 2))