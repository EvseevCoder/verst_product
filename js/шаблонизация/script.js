let photo = Photos

// console.log(Photos);

let content = document.querySelector('.content')
let content2 = content.nextElementSibling


let TakeObejct = function (obj) {
    return `

    <div class="block">
        <div class="image">
            <img src="${obj.urls.full}" alt="">
        </div>


        <div class="text">asdasd</div>
    
    </div>

    `
}

let button1 = document.querySelector('.add-button');

button1.onclick = function () {
    content.innerHTML += TakeObejct(photo[0])
    content.innerHTML += TakeObejct(photo[0])
    content.innerHTML += TakeObejct(photo[0])
}

let addDog = document.querySelector('.add-dog')



let url1 = 'https://dog.ceo/api/breeds/image/random';

// Функция моя, но не работает по непонятным причинам
let TakeDog = async function (url, content) {

    let response = await fetch(url)
    let json = await response.json()

    content.innerHTML += `
    <div class="dog">
            <img src="${json.message}" alt="">
    </div>
    `

    console.log(json.message);

    return json
}

console.log(TakeDog(url1, content));

addDog.onclick = function () {
    TakeDog(url1, content)
    console.log(123);
}