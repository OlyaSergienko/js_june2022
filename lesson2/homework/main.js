// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let xxx = [256, 5987, 'tree', 'flower', 'berry', true, false, 3.14, 'pee', '16.11'];
console.log(xxx);
console.log(xxx[0]);
console.log(xxx[1]);
console.log(xxx[2]);
console.log(xxx[3]);
console.log(xxx[4]);
console.log(xxx[5]);
console.log(xxx[6]);
console.log(xxx[7]);
console.log(xxx[8]);
console.log(xxx[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {title: 1844, pageCount:380, genre:story};
// let book2 = {title: peterPen, pageCount:300, genre:fairytale};
// let book3 = {title: AliceInWonderworld, pageCount:400, genre:fairytale};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {title: '1844', pageCount:380, genre:'story', authors:[{name:'sasha', age:31}]};
let book2 = {title: 'peterPen', pageCount:300, genre:'fairytale', authors:[{name:'olya', age:35}]};
let book3 = {title: 'AliceInWonderworld', pageCount:400, genre:'fairytale', authors:[{name:'vasya', age:36}]};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vasya', username:'vasya1', password:123456},
    {name: 'anya', username:'anya1', password:123456789},
    {name: 'olya', username:'olya1', password:126789},
    {name: 'kate', username:'kate1', password:126781239},
    {name: 'peter', username:'peter1', password:781239},
    {name: 'varya', username:'varya1', password:784569},
    {name: 'vanya', username:'vanya1', password:781259},
    {name: 'kostya', username:'kostya1', password:145125},
    {name: 'danil', username:'danil1', password:145456},
    {name: 'stepa', username:'stepa1', password:365456},
];
console.log(users);
console.log(users.length);

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);