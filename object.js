// ****************************************************************************************************
// в объектах порядок свойств не имеет значения
// const myCity = {
//     city: 'New York',
//     popular: true,
//     country: 'USA'
// };

// const myCity = {
//     popular: true,
//     country: 'USA',
//     city: 'New York'
// };

// ****************************************************************************************************// Получаем доступ к значению свойства объекта

// const myCity = {
//     city: 'New York',
//     popular: true,
//     country: 'USA'
// };

/////////////////////////
// // через точку получаем доступ к свойству и его значению
// console.log(myCity.city); // 'New York'
// console.log(myCity.popular); // true

/////////////////////////
// Изменяем значений свойств объекта

// myCity.city = 'Las Vegas';
// console.log(myCity); // city: 'Las Vegas'

// ****************************************************************************************************
// Добавляем новое свойство в объект

// const myCity = {
//     city: 'New York',
// }

// myCity.popular = true;
// console.log(myCity); // {city: 'New York', popular: true}

// myCity.country = 'USA';
// console.log(myCity); // {city: 'New York', popular: true, country: 'USA'}

// ****************************************************************************************************
// удаление свойств в объекте

// const myCity = {
//     city: 'New York',
//     popular: true,
//     country: 'USA'
// };

// delete myCity.country;
// console.log(myCity); // {city: 'New York', popular: true}

// ****************************************************************************************************
// Доступ к значению свойства с использованием скобок

// const myCity = {
//     city: 'New York'
// };

// myCity['popular'] = true;
// console.log(myCity); // {city: 'New York', popular: true}

// const countryPropertyName = 'country';

// myCity[countryPropertyName] = 'USA';
// console.log(myCity); // {city: 'New York', popular: true, country: 'USA'}

// ****************************************************************************************************
// Вложенные свойства

// const myCity = {
//     city: 'New York',
//     info: {
//         isPopular: true,
//         country: 'USA'
//     }
// };

/////// точечная запись
// console.log(myCity.info.isPopular); // true

////// скобочная запись
// delete myCity.info['isPopular'];
// console.log(myCity); // {city: 'New York', info: {country: 'USA'}}

// ****************************************************************************************************
// Использование переменных

// const name = 'Mango';
// const postsQty = 23;

// const useProfile = {
//     name: name,
//     postsQty: postsQty,
//     hasSignedAgreement: false
// };

/////// сокращенный формат записи (очень популярный в js)

// const useProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false
// };

// ****************************************************************************************************
// Глобальные объекты

// window - в браузере
// global - в node.js
// globalThis -    унифицированый объект

// Свойства глобальных объектов
// console   console.log('Hello');
// window.console   window.console.log('Hello');
// global.console   global.console.log('Hello');

// ****************************************************************************************************
// Методы - свойство объекта, значение которого - функция

// const myCity = {
//     city: 'New York',
//     cityGreeting: function () {
//         console.log('Greetings!!')
//     }
// }
// myCity.cityGreeting() // 'Greetings!!'

/////// сокращенный вариант записи

// const myCity = {
//     city: 'New York',
//     cityGreeting() {
//         console.log('Greetings!!')
//     }
// }
// myCity.cityGreeting() // 'Greetings!!'

/////// методы VS свойства объектов

// myCity.city - доступ к значению свойства

// myCity.cityGreeting() - вызов метода

// ****************************************************************************************************
// JSON - JavaScript Object Notation
// формат обмена данными

// {
//     "userId": 1,
//     "id": 1,
//     "title": "Test title",
//     "status": {
//     "completed": false
//     }
// };

// Передача данных в формате JSON
// { "userId": 1, "id": 1, "title": "Test title", "status": { "Completed": false } };

// Конвертация JSON в объект с помощью метода JSON.parse()

// {
//     userId: 1,
//     id: 1,
//     title: 'Test title',
//     status: {
//     completed: false,
//     },
// };

// Конвертация объекта в JSON с помощью метода JSON.stringify()
// { "userId": 1, "id": 1, "title": "Test title", "status": { "Completed": false } };

// const post = {
//     title: 'My post',
//     likesQty: 5,
// }
// undefined
// post
// { title: 'My post', likesQty: 5 } likesQty: 5title: "My post"[[Prototype]]: Object
// JSON
// JSON { Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ }
// JSON.stringify(post)
// '{"title":"My post","likesQty":5}'
// const postStringified = JSON.stringify(post)
// undefined
// JSON.parse(postStringified)
// { title: 'My post', likesQty: 5 }





