// дан массив цифр
mass = ['1', '0']

function Plus1(mass) {
    return (String(parseInt(mass.join(''))+ 1)).split('')
}

console.log(`Вводный массив: ${mass}; Plus1 : ${Plus1(mass)}`);