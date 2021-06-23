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

const testCache = () => {
  const memoizedDivisoresPositivosDeUmNumero = memoizer(divisoresPositivosDeUmNumero)
  const start_1 = new Date()
  divisoresPositivosDeUmNumero(20)
  const end_1 = new Date()

  const start_2 = new Date()
  memoizedDivisoresPositivosDeUmNumero(20)
  const end_2 = new Date()

  const duration_uncached = end_1.getTime() - start_1.getTime()
  const duration_cached = end_2.getTime() - start_2.getTime()

  if(duration_cached < duration_uncached) {
    return true
  }
  
  return {
    duration_uncached, 
    duration_cached
  }
}

console.log(testCache());

// console.log(divisoresPositivosDeUmNumero(20))
// const memoizedDivisoresPositivosDeUmNumero = memoizer(divisoresPositivosDeUmNumero)
// console.log(memoizedDivisoresPositivosDeUmNumero(20))