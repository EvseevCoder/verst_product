let content = document.querySelector('.marks')
let button = document.querySelector('.button')
let text = document.querySelector('.input-text')

/* <div class="mark">
            <p></p>
</div>
<div class="line"></div> */

button.onclick = function () {
    console.log('По кнопке кликнули', text.value);

    content.innerHTML += makePost(text.value)

    text.value = ''
}

function makePost(text) {
    return `<div class="mark">
            <p>${text}</p>
    </div>
    <div class="line"></div>`
}