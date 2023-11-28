if (typeof localStorage.getItem('chat') == undefined) {
    localStorage.setItem('chat', [])
    console.log(`Создан Chat`);
}

chatLoc = localStorage.getItem('chat')

console.log(chatLoc);
if (chatLoc != null) {
    chat = chatLoc.split(';')
} else {chat = []}

console.log(chat);


let content = document.querySelector('.marks')
let button = document.querySelector('.button')
let text = document.querySelector('.input-text')

for (const elem of chat) {
    content.innerHTML += makePost(elem)
}


button.onclick = function () {
    console.log('По кнопке кликнули', text.value);

    content.innerHTML += makePost(text.value)

    chat.push(text.value)
    console.log(chat);

    localStorage.setItem('chat', chat.join(';'))

    text.value = ''
}

function makePost(text) {
    return `<div class="mark">
            <p>${text}</p>
    </div>
    <div class="line"></div>`
}
