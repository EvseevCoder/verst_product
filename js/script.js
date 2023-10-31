let buttons = document.querySelectorAll('.button')

for (const button of buttons) {
    let input = button.previousElementSibling

    // console.log(getComputedStyle(button))

    button.onclick = function () {
        input.value = '';
    }
    
}

// console.log(getComputedStyle(button))



for (const button of buttons) {
    button.onmouseenter = function () {
        console.log('Мышь наведена на кнопку');
    }
    
    button.onmouseleave = function () {
        console.log('Мышь уже не наведена на кнопку');
    }
}