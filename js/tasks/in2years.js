// задача, определить, когда отец был или будет старше сына
// нужно вернуть, сколько лет назад отце был вдвое старше сына

function in_2_years(age_father, age_son) {
    let step = 0
    if (age_father / age_son == 2) {
        return "Сейчас отец вдвое старше сына"
    } else if (age_father / age_son > 2) {

        // Цикл, который перебирает значения вверх, пока на найдет нужное
        while(age_father / age_son !== 2 && age_father / age_son > 2) {
            age_father += 1;
            age_son += 1;
            step += 1;
        }
        return `Через ${step} лет`

    } else if (age_father / age_son < 2) {

        // Цикл, который перебирает значения вниз, пока на найдет нужное
        while(age_father / age_son !== 2 && age_father / age_son < 2) {
            age_father -= 1;
            age_son -= 1;
            step -= 1;
        }
        return `${step * -1} лет назад`
    }
}

console.log(in_2_years(45, 18));