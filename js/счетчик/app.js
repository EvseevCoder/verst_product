let number = document.querySelector('.schet')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')

plus.onclick = function () {
    number.textContent = parseInt(number.textContent) + 1 
}

minus.onclick = function () {
    number.textContent = parseInt(number.textContent) - 1 
}