// // # Primitive

// // 7 Types : String, Number, Bolean, Null, Undefined, Symbol, BigInt

// const score = 100
// const scorevalue =100.3

// const isloggedin = false
// const outsideTemp=null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 392849734290328490823948230984092834



// // # Reference  (Non-Primitive)

// // Array, Objects, Functions

// const heros = ["Spiderman", "superman", "antman"]
// let myObj = {
//     name: "ansh",
//     age: 18,
// }

// const function(){
//     console.log("hello world");
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++?

// primitive is stack mem
// refrence is heap mem

let myYoutubename= "ansh"

let anotherName = myYoutubename
anotherName = "Saksham"

// console.log(anotherName);
// console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "ansh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

