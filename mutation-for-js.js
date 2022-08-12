// ****************************************************************************************************
// значения примитивных типов
// const a = 10;

// let b = a;

// b = 30;

// console.log(a); // 10
// console.log(b); // 30

/////////////////////////
// значения ccылочных типов
// Мутация объекта, на который ссылается переменная "person"

// const person = {
//     name: 'Bob',
//     age: 21
// };

// person.age = 22;
// person.isAdult = true;

// console.log(person.age); // 22
// console.log(person.isAdult); // true

// ****************************************************************************************************
// Мутирование копий (копируем только ссылку)

// const person = {
//     name: 'Bob',
//     age: 21
// };

// const person2 = person; // (копируем только ссылку)

// person2.age = 26;
// person2.isAdult = true;

// console.log(person.age); // 26
// console.log(person.isAdult); // true

// ****************************************************************************************************
// Как избежать мутаций
/////////////////////////

// Вариант 1(Object.assign)

// const person = {
//     name: 'Bob',
//     age: 21
// };

// const person2 = Object.assign({}, person); // копия объекта

// person2.age = 26; // изменяем значение в копии

// console.log(person2.age); // 26 // копия изменилась
// console.log(person.age); // 25  // оригинальный объект остается с тем же значением
/////////////////////////

// Вариант 2 с помощью оператора spread (...)

// const person = {
//     name: 'Bob',
//     age: 21
// };

// const person2 = { ...person };

// person2.name = 'Alice';

// console.log(person2.name); // Alice // копия изменилась
// console.log(person.name); // Bob  // оригинальный объект остается с тем же значением

/////////////////////////

// Вариант 3 с помощью метода JSON

// const person = {
//     name: 'Bob',
//     age: 21
// };

// const person2 = JSON.parse(JSON.stringify(person));

// person2.name = 'Alice';

// console.log(person2.name); // Alice // копия изменилась
// console.log(person.name); // Bob  // оригинальный объект остается с тем же значением







