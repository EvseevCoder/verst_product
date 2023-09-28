let MyButton = document.getElementById('button');

let inp = document.getElementById('input')
let del = document.getElementById('del')

MyButton.onclick = function() {

    if (MyButton.textContent == 'Учебная кнопка') {
        MyButton.textContent = "Уже другой текст"
    } else {
        MyButton.textContent = 'Учебная кнопка'
    }
    inp.value = "Текст 123"
}

del.onclick = function () {
    inp.value = '';
    
}
