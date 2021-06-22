const alunos = [
    { nome: 'Ana', nota: 9.3, bolsista: true },
    { nome: 'Gustavo', nota: 8.1, bolsista: false },
    { nome: 'Rogerio', nota: 5.9, bolsista: false },
    { nome: 'Jenifer', nota: 7.1, bolsista: true },
    { nome: 'Roberto', nota: 7.3, bolsista: false },
    { nome: 'Rebeca', nota: 8.9, bolsista: false },
    { nome: 'Leonardo', nota: 3.7, bolsista: false },
    { nome: 'Maria', nota: 10.0, bolsista: true }, 
]

console.log(alunos.filter(function(p) { 
    return true
}))

console.log('Todos os alunos são bolsistas?')
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

console.log('Algum dos alunos é bolsista?')
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

console.log('Filtrar pela letra inicial do nome: ')
const filtrarPorNome = (alunos, letraInicial) => {
    const nomeAlunos = alunos.map(({nome}) => nome)
    return nomeAlunos.filter((x) => x.startsWith(letraInicial))
}
console.log(filtrarPorNome(alunos, 'R'))

console.log('Media das notas dos alunos:')
const media = alunos.map(a => a.nota).reduce((total, item, indice, array) => {
    total += item;
  
    if (indice === array.length - 1) {
      return total / array.length;
    }
    return total;
}, 0);
console.log('Media: ' + media);

const pares = (item) => !(item % 2)
const impares = (item) => (item % 2) 
const notasPares = alunos.map(a => a.nota).filter(pares)
const notasImpares = alunos.map(a => a.nota).filter(impares)

console.log('Notas impares:')
console.log(notasImpares)
console.log('Notas pares:')
console.log(notasPares)


