function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom Dia
        img.src = 'images/manha.png'
        document.body.style.background = '#BEB389'
    } else if( hora >= 12 && hora <18){
        //Boa Tarde!
        img.src = 'images/tarde.png'
        document.body.style.background = '#A86A33'
    } else{
        //Boa Noite!
        img.src = 'images/noite.png'
        document.body.style.background = '#191A1B'
    }
}