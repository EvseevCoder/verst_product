// Программа находит числа, которые делятся на данное

massive = [1, 2, 4, 6, 7, 11, 14, 14, 16, 2, 15]

function resh(massive, del) {
    good = []

        for (element of massive) {
            if (element % del == 0) {
                if (good.includes(element)) {
                    console.log(`повтор ${element}`);
                    continue
                }
                good.push(element)
            }
        }

    return good;
}

console.log(resh(massive, 3));