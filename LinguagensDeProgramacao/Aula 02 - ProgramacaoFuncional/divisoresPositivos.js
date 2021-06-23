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

var antes = Date.now();
console.log(divisoresPositivosDeUmNumero(13))
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")

antes = Date.now()
console.log(divisoresPositivosDeUmNumero(20))
duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")

antes = Date.now()
console.log(divisoresPositivosDeUmNumero(200000))
duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")
