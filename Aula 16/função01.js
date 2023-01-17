/*
São ações executadas assim que são chamadas ou em decorrência de algum evento.
Uma função pode receber parâmetros e retornar um resultado.
*/
function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
console.log(parimpar(5))