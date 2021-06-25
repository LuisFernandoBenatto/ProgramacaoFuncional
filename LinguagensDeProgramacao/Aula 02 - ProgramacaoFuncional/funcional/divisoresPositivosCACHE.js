const CACHE = {}

const divisoresPositivosDeUmNumero = (number, i = 1, soma = 0) => {
  let result = CACHE[number] || 0
  if (result) {
    return result
  }
  if(i == number) {
    soma += i
    CACHE[number] = soma
    return soma
  } else {
    if(i <= number) {
      if(number % i == 0) {
        return divisoresPositivosDeUmNumero(number, i + 1, soma + i)
      } else {
        return divisoresPositivosDeUmNumero(number, i + 1, soma)
      }
    }
  }
}

const start_1 = Date.now()
divisoresPositivosDeUmNumero(2000)
const end_1 = Date.now() - start_1
console.log(`Levou: ${end_1}ms`)

const start_2 = Date.now()
divisoresPositivosDeUmNumero(2000)
const end_2 = Date.now() - start_2
console.log(`Levou: ${end_2}ms`)

const duration_uncached = end_1
const duration_cached = end_2

console.log("Resultado: " + divisoresPositivosDeUmNumero(2000))
console.log("Uncached: " + duration_uncached) 
console.log("Cached: " + duration_cached)
console.log("Cached < Uncached: " + (duration_cached < duration_uncached)) 