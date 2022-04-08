
// SHORTHAND function version
// Function which just has ONE line of logic and returns the result

// NAMED Export
const sum = (a,b) => a+b // return
const subtract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => a/b

// DEFAULT EXPORT
export default {
  sum, subtract, multiply, divide
}

// const sum = (a,b) => {
//   return a+b
// }

// const arr = ["hallo", "welt"]
// const isInArray = (arr, wort) => arr.includes(wort)