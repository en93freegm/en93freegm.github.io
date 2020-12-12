let text = `Да я точно фронтендер)`
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
    let arr = $('#firstMsg').val().split('.');

    if(arr.length === 3 && typeof (+arr[0]) === "number" && typeof (+arr[1]) === "number" && typeof (+arr[2]) === "number") {
        if($('#firstMsg').val() === '12.12.2020') {
            $("#letter").removeClass("invisible");
            $("#danger-msg").addClass("invisible");
            $("#warn-danger-msg").addClass("invisible");
            startIntervalForLetter();
        } else {
            $("#letter").addClass("invisible");
            $("#warn-danger-msg").removeClass("invisible");
            $("#danger-msg").addClass("invisible");
        }
    } else {
        $("#letter").addClass("invisible");
        $("#danger-msg").removeClass("invisible")
        $("#warn-danger-msg").addClass("invisible");
    }
}
