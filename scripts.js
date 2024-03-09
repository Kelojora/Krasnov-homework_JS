//Задание 1
const colors = ['red', 'green', 'blue']
console.log(colors.length)

//Задание 2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1])

//Задание 3
const numbers = [5, 43, 63, 23, 90]
numbers.length = 0
console.log(numbers)
console.log(numbers.splice(0, numbers.length))

//задание 4
const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')
console.log(students)

//задание 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for ( let cat of cats) {
    console.log(cat);
}

//задание 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const numbersIn = evenNumbers.concat(oddNumbers)
console.log(numbersIn, 'Индекс 8:' + ' ' + numbersIn.indexOf(8))

//задание 7
const binary = [0, 0, 0, 0]
console.log(binary.join('1'))