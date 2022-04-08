
// imoort lib => impotiert DEFAULT export
// import { name } => importiert NAMED exports
import lib from './lib.js' // importing a DEFAULT EXPORT

// destructure / extract functions from library I want to use 
const { sum, multiply } = lib

console.log("Module ist daaaaaa! Hallo!")

console.log( lib )
console.log( sum(10, 3) ) // 13
console.log( multiply(10, 3) ) // 30