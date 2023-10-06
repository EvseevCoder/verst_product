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

console.log(content);
console.log(content2);



content.innerHTML = TakeObejct(photo[0])