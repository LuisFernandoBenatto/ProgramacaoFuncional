const memoizer = (fn) => {
  const CACHE = new Map()

  return (...args) => {
    const key = JSON.stringify(args)// serializa o array args
    if (CACHE.has(key)) {// verifica se a chave existe
      console.log(`Buscou do cache ${args}`)
      return CACHE.get(key)// retorna o valor do cache
    } else {
      console.log(`Não encontrou no cache ${args}. Adicionando ao cache.`)
      // invoca a função fn com os parâmetros
      const result = fn(...args);// utilizando o spread operator
      CACHE.set(key, result);// guarda o resultado no cache
      return result;// retorna o valor que acabou de ser calculado
    }
  }
}

const divisoresPositivosDeUmNumero = (number) => {
  let result = 0
  let i = 0
  while(i <= number) {
    if(number % i == 0) result += i
    i++
  }
  return result
}

const testCache = () => {
  const memoizedDivisoresPositivosDeUmNumero = memoizer(divisoresPositivosDeUmNumero)
  const start_1 = Date.now()
  memoizedDivisoresPositivosDeUmNumero(2000000000)
  const end_1 = Date.now() - start_1
  console.log(`Levou: ${end_1}ms`)

  const start_2 = Date.now()
  memoizedDivisoresPositivosDeUmNumero(2000000000)
  const end_2 = Date.now() - start_2
  console.log(`Levou: ${end_2}ms`)

  const duration_uncached = end_1
  const duration_cached = end_2

  console.log(duration_cached < duration_uncached)
  return {
    duration_uncached, 
    duration_cached
  }
}
console.log(testCache());
console.log("Resultado: " + divisoresPositivosDeUmNumero(2000000000))