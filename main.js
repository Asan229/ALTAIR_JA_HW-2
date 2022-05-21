// 1. Напишите программу, которая считает **количество секунд** в часе.

let second = 60;
let minute = 60;
let hour = second * minute;
console.log(hour);

// /* 2. Создайте переменную `myNumber` и присвойте ей значение 2022.
// Выведите значение этой переменной на экран с помощью метода alert.*/

let myNumber = 2022;
alert(myNumber);

// /*3. Спросите имя пользователя с помощью метода **prompt**.
// Выведите сообщение на страницу с помощью **`document.write`** : **
// “Рад знакомству {имя пользователя}!”**. */

let personName = prompt("Здравствуте! Как Вас зовут?");
document.write("Рад знакомству! ", personName);

// /* 4. Даны два числа `a, b`. Написать программу,
// которая считает среднее арифметическое двух чисел. */

let a = 7;
let b = 3;
let c = (a + b) / 2;
console.log(c);

// /* 5. Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число.
//  *Пример: Пользователь вводит число 10. Программа выводит число 11. */

let number = prompt("Введите любое число ");
number++;
alert(number);

// /* 6. Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
//     - Имя
//     - Возраст
//     - Список друзей
//     - Почтовый адрес
//     - Электронный адрес */

let person = {
  name: "Sadyr",
  age: 65,
  friends: ["Kesha", "Alik", "Oskar", "Misha"],
  "e-mail": "sadyr.sadyrbekov.alt@gmail.com",
};
console.log(person);

/* 7. Создайте объект описывающий блог-пост на сайте:
    - Название поста
    - Автор поста
    - Дата публикации поста
    - Тело поста (содержит текст поста)
    - Картинка поста (содержит url картинки)
    - Теги поста */

let blogPost = {
  namePost: "Welcome to my page!",
  ["Post author"]: "Asan Turdukulov",
  ["Post publication date"]: "18.05.2022",
  ["post body"]: {
    title: "Тема",
    text: "Сделать свой сайт может понадобиться для самых разнообразных целей.",
  },
  image: (url = new URL(
    "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sxsrf=ALiCzsZQS9mjEqabq35ZPEVtcZmg97yXqQ:1652877446447&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3zLWoiOn3AhXhsosKHbXUDqoQ_AUoAXoECAEQAw&biw=1536&bih=763&dpr=1.25"
  )),
  ["Теги поста"]: "TAGS",
};
console.log(blogPost);

// 8. Создайте массив с именами пользователей.
const usersArray = [
  {
    id: "8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: " 1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
];
console.log(usersArray);

/* 9. Создайте массив с url адресами на разные картинки. */

let images = [
  "https://i.sunhome.ru/journal/88/morskoe-zhivotnoe-kasatka-v2.orig.jpg",
  "https://placepic.ru/wp-content/uploads/2018/11/lazurnaya_voda_1600.jpg",
  "https://cdn.ananasposter.ru/image/cache/catalog/poster/travel/83/12420-1000x830.jpg",
  "https://s.mediasalt.ru/cache/content/data/images/264/264172/original.jpg",
];
console.log(images);

/* 10. Создайте массив содержащий объекты описывающие 
блог-посты (схема объектов идентична как в пункте 7. */

let array = [
  {
    namePost: "Welcome to my page!",
    ["Post author"]: "Asan Turdukulov",
    ["Post publication date"]: "18.05.2022",
    ["post body"]: {
      title: "Тема",
      text: "Сделать свой сайт может понадобиться для самых разнообразных целей.",
    },
    image: (url = new URL(
      "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sxsrf=ALiCzsZQS9mjEqabq35ZPEVtcZmg97yXqQ:1652877446447&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3zLWoiOn3AhXhsosKHbXUDqoQ_AUoAXoECAEQAw&biw=1536&bih=763&dpr=1.25"
    )),
    ["Теги поста"]: "TAGS",
  },
  {
    namePost: "Welcome to my page!",
    ["Post author"]: "Asan Turdukulov",
    ["Post publication date"]: "18.05.2022",
    ["post body"]: {
      title: "Тема",
      text: "Сделать свой сайт может понадобиться для самых разнообразных целей.",
    },
    image: (url = new URL(
      "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sxsrf=ALiCzsZQS9mjEqabq35ZPEVtcZmg97yXqQ:1652877446447&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3zLWoiOn3AhXhsosKHbXUDqoQ_AUoAXoECAEQAw&biw=1536&bih=763&dpr=1.25"
    )),
    ["Теги поста"]: "TAGS",
  },
  {
    namePost: "Welcome to my page!",
    ["Post author"]: "Asan Turdukulov",
    ["Post publication date"]: "18.05.2022",
    ["post body"]: {
      title: "Тема",
      text: "Сделать свой сайт может понадобиться для самых разнообразных целей.",
    },
    image:
      "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sxsrf=ALiCzsZQS9mjEqabq35ZPEVtcZmg97yXqQ:1652877446447&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3zLWoiOn3AhXhsosKHbXUDqoQ_AUoAXoECAEQAw&biw=1536&bih=763&dpr=1.25",
    ["Теги поста"]: "TAGS",
  },
  {
    namePost: "Welcome to my page!",
    ["Post author"]: "Asan Turdukulov",
    ["Post publication date"]: "18.05.2022",
    ["post body"]: {
      title: "Тема",
      text: "Сделать свой сайт может понадобиться для самых разнообразных целей.",
    },
    image: (url = new URL(
      "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sxsrf=ALiCzsZQS9mjEqabq35ZPEVtcZmg97yXqQ:1652877446447&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3zLWoiOn3AhXhsosKHbXUDqoQ_AUoAXoECAEQAw&biw=1536&bih=763&dpr=1.25"
    )),
    ["Теги поста"]: "TAGS",
  },
];
console.log(array);
