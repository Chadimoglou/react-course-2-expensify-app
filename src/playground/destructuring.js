//
// Object Destructuring
//

// const person = {
//   name: 'Chad',
//   age: 34,
//   location: {
//     city: 'New York City',
//     temp: 50
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   location: {
//     name: 'Penguin',
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.location;

// console.log(publisherName);


//
// Array Destructuring
//

// const address = ['756 East 34th Street', 'New York City'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , price] = item;
console.log(`A medium ${name} costs ${price}`);
