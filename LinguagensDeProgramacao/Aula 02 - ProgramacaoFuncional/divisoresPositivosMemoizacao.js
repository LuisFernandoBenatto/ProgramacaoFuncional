const memoizer = (fn) => {

  const cache = new Map()

  return (...args) => {
    // serializa o array args
    const key = JSON.stringify(args)
    // verifica se a chave existe
    if (cache.has(key)) {
      console.log(`Buscou do cache ${args}`)
      // retorna o valor do cache
      return cache.get(key)
    } else {
      console.log(`Não encontrou no cache ${args}. Adicionando ao cache.`)
      // invoca a função fn com os parâmetros
      // utilizando o spread operator
      const result = fn(...args);
      // guarda o resultado no cache
      cache.set(key, result);
      // retorna o valor que acabou de ser calculado
      return result;
    }
  }
}

const divisoresPositivosDeUmNumero = (number) => {
  let soma = 0
  let i = 0
  while(i <= number) {
    if(number % i == 0) soma += i
    i++
  }
  return soma
}

// console.log(divisoresPositivosDeUmNumero(20))
const memoizedDivisoresPositivosDeUmNumero = memoizer(divisoresPositivosDeUmNumero)
console.log(memoizedDivisoresPositivosDeUmNumero(20))

// const somarDivisores = (a, b) => {
//   return a + b
// }
// const divisoresPositivosDeUmNumero = (number) => {
//   let arrayDivisores = []
//   let result = 
//     arrayDivisores.filter(determinarDivisores(number))
//     .map((i) => number % i == 0)
//     .reduce(somarDivisores, 0)
//   return result
// }