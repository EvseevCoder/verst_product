// 1 Проверяем наличие в local Storage
// 2 При отстутствии запрашиваем и запоминаем
// 3 При наличии просто вставляем
// let uName



uName = document.getElementById('user_write');

// 1 проверка
if (localStorage.getItem('uName') == null) {
    // 2
    uName.textContent = prompt("Введите свой никнейм");
    localStorage.setItem('uName', uName.textContent)
} else {
    uName.textContent = localStorage.getItem('uName');
}


let del_name = document.getElementById('del_name')

del_name.onclick = function() {

    console.log("Ваше имя удалено");

    uName.textContent = 'User';
    localStorage.setItem('uName', 'User')
}

let edit_name = document.getElementById('edit_name')

edit_name.onclick = function() {

    uName.textContent = prompt('Введите ваше имя');
    if (uName.textContent == '') {
        uName.textContent = "User"
    }
    localStorage.setItem('uName', uName.textContent)
}
