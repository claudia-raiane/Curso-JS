function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date ()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="fotodia.png">'
        document.body.style.background = '#c3af7f'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="fototarde.png">'
        document.body.style.background = '#e39135'
    } else {
        img.innerHTML = '<img src="fotonoite.png">'
        document.body.style.background = '#031012'
    }
}