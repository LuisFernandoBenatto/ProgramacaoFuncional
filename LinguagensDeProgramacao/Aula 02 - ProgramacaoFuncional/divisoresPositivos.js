const divisoresPositivosDeUmNumero = (number) => {
  let soma = 0
  let contadorDeDivisores = 0
  for (let divisor = 0; divisor <= number; divisor++) {
    if(number % divisor == 0) {
      contadorDeDivisores++
      soma += divisor
    }
  }
  return { soma, contadorDeDivisores }
}
console.log(divisoresPositivosDeUmNumero(13))
console.log(divisoresPositivosDeUmNumero(20))
console.log(divisoresPositivosDeUmNumero(100000))
