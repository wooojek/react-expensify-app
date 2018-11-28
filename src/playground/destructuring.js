//
// Object destructuring
//

// const person = {
//     name: 'Mike',
//     age: 26,
//     location: {
//         city: 'Panama City',
//         temp: 92
//     }
// };
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;
// console.log(`it's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Phili', 'Pennsylvania', '19147'];
// const [, city, state = 'New York',] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);