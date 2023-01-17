/* 
Variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura

let num = [5, 8, 2, 9, 3]
console.log(num)
num [3] = 6 //substitui o número na posição informada
console.log(num)
num.push(7) //adiciona no final da variável
console.log(num)
console.log(num.length)
num.sort() //coloca em ordem
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var num = [5, 8, 2, 9, 3]
for(var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem como valor ${num[pos]}`)
}

var num = [5, 8, 2, 9, 3]
for(var pos in num) {
    console.log(`A posição ${pos} tem como valor ${num[pos]}`)
}
*/

var num = [5, 8, 2, 9, 3]
console.log(num.indexOf(8)) //Indica o índice do elemento procurado