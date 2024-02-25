//Задание 1
let one = 'true'
let two = false
let three = 17
let four = undefined
let five = null
console.log(typeof one, typeof two, typeof three, typeof four, typeof five)

//Задание 2
let height = 15
let width = 20
    if (width > height) {
        console.log(width)
    }

//Задание 3
for (let i = 1; i <=20;i++) {
    if (i%3 == 0)
    console.log(i)
}

//Задание 4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = orange || apple && key && documents && pen;
console.log(shouldGoToWork)

//Задание 5
let a = prompt('Введите ваше число')
    if (a%3 === 0 && a%5 === 0){
    console.log('FizBuz')
}
    else if (a%5 == 0){
        console.log('Fiz')
}
    else if (a%3 == 0){
    console.log('Buz')
}

//Задание 6
let b = prompt('Введите ваш возраст')
    if (b>=16 && b<=18){
    console.log('Можешь выкурить сигаретку , только маме не говори')
}
    else if (b >=18 ){
        console.log('Попей пивка')
}
    else if (b <18 ){
        console.log('Пей колу')
}

//Задание 7
let c = prompt('в какую сторону света вы бы хотели отправиться.')
    switch(c){
        case 'юг':
            console.log('на юг пойдешь счастье найдешь')
        break;
        case 'север':
            console.log('на север пойдешь много денег найдешь')
        break;
        case 'запад':
            console.log('на запад пойдешь верного друга найдешь')
        break;
        case 'восток':
            console.log('на восток пойдешь разработчиком станешь')
        break;
        default:
            prompt('Введите ещё раз')
    }