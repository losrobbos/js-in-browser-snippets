

const arr = [1,2,3]

// we must create variables we wanna BUILD UP OUTSIDE of foreach
const arrNew = []

// forEach NEVER returns us anything!
arr.forEach((item) => {
  arrNew.push( item + 1 )
})

console.log( arrNew )


// Beispiel mit Reduce

// reduce we can also use to BUILD UP something and RETURN it at the end
// so compared to forEach we do not need to declare a variable OUTSIDE reduce
// we declare the variable, we wanna BUILD UP as first parameter to reduce (= arrNew in this case)
const arrNewFromReduce = arr.reduce(( arrNew, item ) => {
  arrNew.push( item +1 )
  return arrNew
}, [])

console.log( arrNewFromReduce )