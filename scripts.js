//Задание 1
function getSum() {
    let num = Number(prompt('Введите число'));
    let sum =0
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum
}
console.log(getSum());

//Задание 2
function credit(sumCredit){
    let percent = 0.17
    let years = 5
    let total = sumCredit * (1 + percent * years)
    return pay = total - sumCredit
}
console.log(credit(100));

//Задание 3
function trimString(word, from, to) {
    word = prompt('Введите слово');
    from = prompt('Введите значение ОТ:');
    to = prompt('Введите значение ПО:');
    let result = word.slice(from, to);
    return result;
}
console.log(trimString());

//Задание 4
let num = Number(prompt('Введите число для вычисления суммы'));
function getSumNumbers(number) {
    let str = number.toString();
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum
}
console.log(getSumNumbers(num));

//Задание 5
function getSum2(a, b) {
    sum = 0;
    for (let i = a; i < b; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum2(-1,2));

//Задание 6
function fooBoo(bool, foo, boo) {
    bool ? foo() : boo()
}

function foo() {
    console.log('foo');
}

function boo() {
    console.log('boo');
}