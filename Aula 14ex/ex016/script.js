function contar() {
    var ini = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar. Algum campo não foi preenchido!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p < 1) {
            window.alert('Passo inválido! Será considerado passo = 1 ')
            p = 1 
        }
        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva 
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
