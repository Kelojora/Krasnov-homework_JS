//Задание 1
let userInfo = {
    name: 'Maksim',
    age: 28,
}
console.log(userInfo);
delete userInfo.name
delete userInfo.age
console.log(userInfo);

//Задание 2
let series = {
    title: 'True detective',
    productionYear: 2014,
}
let key = 'productionYear'
if (key in series) {
    console.log(true)
    } else {
    console.log(false)
}

//Задание 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(key)
    console.log(student[key])
}

//Задание 4
const colors = {
    'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum'].red)
console.log(colors['ru pum pu ru rum'].blue)

//Задание 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}
let averageSalary = (salaries.andrey + salaries.sveta + salaries.anton + salaries.igor + salaries.alexandra) / 5;
console.log(averageSalary)

//Задание 6
let user = {
    login: prompt('Введите ваш логин'),
    password: prompt('Введите ваш пароль'),
}

let loginCheck = prompt("Подтвердите логин:");
let passwordCheck = prompt("Подтвердите пароль:");

if (loginCheck === user.login && passwordCheck === user.password) {
  alert("Добро пожаловать!");
} else {
  alert("Неверный логин или пароль");
}