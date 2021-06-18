var list = [1, 2, 3, 4, 5, 6]
// A solução imperativa
var result_ = 0
for (let i = 0; i < list.length; i++) {
  if(list[i] % 2 == 0) {
    list[i] *= 2
    result_ += list[i]
  }
}
console.log(result_)

// A solução funcional (com map, filter, reduce);
const numeroPar = (element, index, array) => {
  if(element % 2 == 0) {
    return element
  }
} 

const soma = (a, b) => {
  return a + b
}

let total = list.filter(numeroPar)
total = total.map((i) => i*2) 
let result = total.reduce(soma, 0)
console.log(result)