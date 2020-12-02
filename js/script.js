let text = `Еее-е-е. Молодец) Значит зашла в наш диалог в Тиндере. Видишь программирование не такое уж и скучное ХД Я так и не отрегулировал скорость появления текста) Ты скорее всего читаешь это на много быстрее.) Ты  мне нравишься. Мне близки твои взгляды на жизнь. Мне комфортно с тобой гулять. Я сильно удивляюсь тому как мы похожи. Ты веселая. В понедельник ты прям смогла взбодрить официанта. Это круто. Я бы хотел тебя чаще видеть и проводить больше времени вместе. Ты излучаешь добрую энергию. Я очень рад что встретил тебя. p.s. "Решил поделиться своими мыслями таким способом"`
let arr = text.split('')
let timer, counter = 0;

function writeLetter() {
    let tag = $(`<span>${arr[counter] === ' ' ? '&nbsp' : arr[counter]}</span>`);
    $("#letter").append(tag);

    counter++;

    if (counter === arr.length) {
        stopIntervalForLetter()
    }
}

function startIntervalForLetter() {
    timer = setInterval(writeLetter, 100);
}

function stopIntervalForLetter() {
    clearInterval(timer);
}

function go() {
    if ($('#firstMsg').val() === '24.10.2020') {
        $("#letter").removeClass("invisible")
        $("#danger-msg").addClass("invisible")
        startIntervalForLetter();
    } else {
        $("#letter").addClass("invisible")
        $("#danger-msg").removeClass("invisible")
    }
}
