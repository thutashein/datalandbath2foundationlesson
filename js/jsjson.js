const myobj1 = {
 name: "tin htut aung",
 age:29,
 married:false,
 hobbies:['music','sport']
}

console.log(myobj1);
console.log(myobj1.name);
console.log(typeof myobj1);


// Js object to json format (String text file)

const mydata1 = JSON.stringify(myobj1);

console.log(mydata1);
console.log(mydata1.name);
console.log(typeof mydata1);


const myobj2 = '{"name":"tin htut aung","age":25,"married":false,"hobbies":["music","sport"]}';
console.log(myobj2);
console.log(typeof(myobj2));


// Json format to JS object
const mydata2 = JSON.parse(myobj2);
console.log(mydata2);
console.log(typeof mydata2);
console.log(mydata2.name);




// XML Request
// Fatch Request
// AJAX Request
// Axios Request