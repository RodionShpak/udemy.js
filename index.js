// ****************************************************************************************************
// 3 ключ понятий в js выражения, функции и объекты
// объект - набор свойств "ИМЯ: ЗНАЧЕНИЕ"
// Масиив, функция, число, строка - всё объекты (ведут себя как объекты)

// ****************************************************************************************************
// console.log('Hello World');
// console - объект
// log - метод (функция которая является значением оного из свойств объекта)
// (.) - синтаксис js (точечная запись получаем доступ к методу объекта)
// () - вызов метода (часть синтаксиса js)
// Hello World - аргумент
// console.dir - отображает все свойства объекта (можно увидеть что любая функция это объект)
// console.table - отображает все свойства объекта в табличном виде

// ****************************************************************************************************
// Переменная (коробка) - дают возможность повторного доступа к значению
// Имена переменных:

// PascalCase - первое и последующие слова всегда с заглавной буквы
// (используется для того, что бы называть классы и типы)

// DB_PASSWORD - все слова в верхнем регистре, между слова нижнее подчёркивание
// (используются тогда когда значения известны до запуска приложения и не изменяются)

// сamelCase - первое слово начинается с маленькой буквы, остальные все с заглавной буквы
// (чаще всего используется)

// Названия переменных должны быть понятными что это

// ****************************************************************************************************
// объявление переменных:
// let - можно переприсваивать значение далее по коду ниже
// const - нельзя переприсваивать значение далее по коду ниже
// var - не рекомендуется использовать (олд скул)

// let a - объявление переменной где а (название переменной)
// const c = 10 - обьявление и присваивание с помощью оператора =
// a = true - присваивание переменной а значение true

// console.log(a) // ReferenceError: a is not defined (переменная не определена)

// let a
// console.log(a) // undefined (ещё не присвоили значение)

// a = true
// console.log(a) // true

// ****************************************************************************************************
// let myName
// console.log(myName)  // undefined

// myName = 'Mango'
// console.log(myName) // Mango

// const myName = 'Mango'
// myName = '' // Assignment to constant variable.
// console.log(myName)

// ****************************************************************************************************
// Типы переменных примитивные (6 штук) и ссылочный (один)
// const a = 10 // - где 10(число Number)
// const b = 'abc' // - где abc(строка String)

// Примитивные типы - содержат в памяти значение
// переменная - имеет значение - значение имеет тип

// string - строка 'Hello World'
// boolean - буль(true or false)
// number - число (25)
// null - (указываем когда у данной переменной значение отсутствует)
// undefined - (значение не определено разница между null (присваивается разработчиком нарочно))
// symbol - символ

// Ссылочный тип хранит в памяти ссылку на объект
// может быть одна и больше переменных которая будет указывать на один и тот же объект в памяти

// object - объект

// {
//     a: 10,
//     b: true
// }

// [1, 2, 3,] - массив (массив тоже объект)

// const objectA = {
//     a: 10,
//     b: true
// }

// const copyOfA = objectA // копируем ссылку на объект в другую переменную

// copyOfA.a = 20 // через точку мы получаем доступ к свойству a и задаем новое значение
// // object.a -> 20

// copyOfA.c = 'abc' // добавляем новое свойство уже к существующему объекту
// // object.c -> 'abc'

// ****************************************************************************************************
// Статическая типизация (не js)
// String a = 'abc'
// int b = 10
// b = 'xyz' // Error
/////////////////////////
// Динамическая типизация (js)
// let a = 'abc'; // string
// a = 10; // number
/////////////////////////
// let a = 10;
// a = true;
// a = 'Rodion';
// a = undefined;
/////////////////////////
// function a() {
//     console.log('Hey there');
// }

// a(); // 'Hey there'

// a = 10;

// a(); // TypeError: a is not a function
/////////////////////////
// const a = () => {
//     console.log('Hey there');
// }

// a(); // 'Hey there'

// a = 10; // TypeError: Assignment to constant variable.

// a();

// ****************************************************************************************************



