
// imoort lib => impotiert DEFAULT export
// import { name } => importiert NAMED exports

// importing both: a DEFAULT EXPORT + NAMED exports
import lib, { sum, multiply } from './lib.js' 

console.log("Module ist daaaaaa! Hallo!")

console.log( lib )
console.log( sum(10, 3) ) // 13
console.log( multiply(10, 3) ) // 30