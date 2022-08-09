let arr;

arr = [123, 234, 345, -123, 0, true, 'asiugahd'];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.length);

arr[0] = 'new value';
console.log(arr);
arr[7] = 'okten';
console.log(arr);// 8 7 8
arr[arr.length] = 1293883;
console.log(arr);
arr[arr.length] = 'aiffysadf';
console.log(arr);


delete arr[1];
console.log(arr);

let users = [
    {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
    {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
    {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
    {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
];
console.log(users);
let user0 = users[0];

console.log(user0.age);
console.log(user0['age']);

console.log(users[0].skills[2]);
console.log(users[0]['skills'][2]);

const dog = {name: 'fluffy'};
dog.name = 'kokos';
console.log(dog); // reference is not changed

dog = {}; //error!

