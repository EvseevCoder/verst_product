// Проверка факториала

function fuck (n) {
    if (n === 1) {
        return 1;
    }

    return fuck(n - 1) * n;
}


let n = 15;
console.log(`${n} - ${typeof n}`);


n = String(n)
console.log(`${n} - ${typeof n}`);