// let age = +prompt('enter your age');
// console.log(age);
//
// if (age >= 18) {
//     console.log('watch your movie');
//     document.write('<h2>watch your movie</h2>')
// } else {
//     console.log('go away');
//     document.write('<h2>go away</h2>')
// }

// let color = prompt ('enter color');
// let isRoadClear = prompt ('the road is clear?');
//
// if (color === 'green' && isRoadClear === 'yes') {
//     console.log ('you can go');
// }
// else if (color === 'orange'|| isRoadClear === 'no') {
//     console.log ('wait!');
// }
// else if (color === 'red' || isRoadClear === 'no') {
//     console.log ('STOP!');
// } else {
//     console.log ('??????')
// }


// switch ('green'){
//
//     case 'green':
//     case 'light green':
//     case 'dark green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('???');
//
// }


let conf = confirm('asdf');
console.log(conf);
// let x;
//
// if (conf) {
//     x = 100;
// } else {
//     x = 200;
// }
//
// console.log(x);


//тернарний оператор
let x = conf ? 100 : 200;
console.log(x);

//одразу перевірка на true or false
let name = prompt ('enter your name') || 'John Doe';
console.log(name);