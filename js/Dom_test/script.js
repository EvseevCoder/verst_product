// 1 Проверяем наличие в local Storage
// 2 При отстутствии запрашиваем и запоминаем
// 3 При наличии просто вставляем
// let uName



uName = document.getElementById('user_write');

// 1 проверка
if (localStorage.getItem('uName') == null) {
    // 2
    uName.textContent = 'User';
    localStorage.setItem('uName', uName.textContent)
} else {
    uName.textContent = localStorage.getItem('uName');
}


let del_name = document.getElementById('del_name')

del_name.onclick = function () {

    console.log("Ваше имя удалено");

    uName.textContent = 'User';
    localStorage.setItem('uName', 'User')
}

let edit_name = document.getElementById('edit_name')

edit_name.onclick = function () {

    uName.textContent = prompt('Введите ваше имя');
    if (uName.textContent == '') {
        uName.textContent = "User"
    }

    localStorage.setItem('uName', uName.textContent)
}


// 1. По нажатию кнопки запраищвается позиция пользователя
// 2. После подтверждения позиции скрывается блок с кнопкой
// 3. Открывается блок с широтой и высотой


let getGeo = document.getElementById('get-geo')
let latitude = document.getElementById('latitude')
let longitude = document.getElementById('longitude')
let zapros = document.getElementById('zapros')
let posit = document.getElementById('posit')

getGeo.onclick = function () {

    navigator.geolocation.getCurrentPosition(function (geo) {
        latitude.textContent = geo.coords.latitude
        longitude.textContent = geo.coords.longitude
    })

    zapros.classList.add('hide-block')
    zapros.classList.remove('show-block')

    posit.classList.add('show-block')
    posit.classList.remove('hide-block')
}
