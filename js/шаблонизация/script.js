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

    console.log(123);
}

