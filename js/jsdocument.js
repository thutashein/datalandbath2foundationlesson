let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

// Can call but not recommended
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;


val = document.links;
val = document.links[3];
val = document.links[3].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];
val = document.links[0].classList[1];


val = document.images;
val = document.images[0];
val = document.images[0].getAttribute('tag');


val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].getAttribute('src');
val = document.scripts[0].getAttribute('type');
// console.log(val);



// Change Styling
document.getElementById('task-title').style.background = "gray"; 
document.getElementById('task-title').style.color = "#fff";
document.getElementById('task-title').style.padding = "5px";


//Change Content
document.getElementById('task-title').textContent="My List";
document.getElementById('task-title').innerText ="My Tasks";
document.getElementById('task-title').innerHTML = `<span style="color:yellow;">My Jobs</span>`;


const items = document.getElementsByClassName('collection-item');
items[3].style.color= "violet";
items[3].textContent = "Have to Shop";
// console.log(items);
// console.log(items[0]);


let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
lis[0].style.color= "red";
// lis[0].textContent = "Have to Visit";


// document.querySelector();
// console.log(document.getElementById('task-title'));
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h4'));


document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color = "blue";
document.querySelector('ul li:last-of-type').style.color = "green"; 
document.querySelector('ul li:nth-of-type(3)').style.color = "red";
document.querySelector('ul li:nth-of-type(3)').textContent = "Have to Cook";


const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitems);


document.querySelector('ul li:nth-of-type(odd)').style.background='silver';
document.querySelector('ul li:nth-child(even)').style.background="gray";


lis = document.getElementsByTagName('li');
// Convert HTML Collection into Array
// arrlis = Array.from(lis);
// arrlis.forEach(function(li,index){
// // console.log(li.className);
// // li.textContent = "Hello";
// li.textContent = `${index} : Hello `;
// });


// document.querySelectorAll();
// let itsqs = document.querySelector('ul.collection li.collection-item');
// let itsqsas = document.querySelectorAll('ul.collection li.collection-item');
// itsqsas.forEach(function(itsqsa,index){
// // console.log(itsqsa.className);
// // itsqsa.textContent = "Hello World";
// itsqsa.textContent = `${index} Hello World`;
// });



// const liodd = document.querySelectorAll('li:nth-child(odd)');
// const lievn =document.querySelectorAll('li:nth-child(even)');
// liodd.forEach(function(li){
// li.style.background = "gold";
// });

// for(let i=0 ; i < lievn.length ; i++){
// lievn[i].style.background = "orange";
// }


// children
let chil;

const getul = document.querySelector('ul.collection');
let getli = document.querySelector('li.collection-item');
// console.log(getli);

// // Get children element (html collection)
chil = getul.children;
chil = getul.children[1];

// // Children of Children
chil = getul.children[1].children[0].children[0].className;


// First Child
chil = getul.firstElementChild;


// Last Child
chil = getul.lastElementChild;

// Count child elements
chil = getul.childElementCount;


// Get parent element
getli = document.querySelector('li.collection-item');
chil = getli.parentElement;


// Get Next sibling
chil = getli.nextElementSibling;

chil = getli.nextElementSibling.nextElementSibling;

// Get Previous sibling
// chil = getli.nextElementSibling.nextElementSibling.previousElementSibling;
chil = getli.nextElementSibling.previousElementSibling;
console.log(chil);



//Create Element
const li = document.createElement('li');

// Add Class
li.className = "collection-item";

// Add ID
li.id = "new-item";

// Add Attribute(att qualifiedName,value)
li.setAttribute('title','new_item');

//Create Text Node
li.appendChild(document.createTextNode("Hello Mandalay"));
// console.log(li);


// create element for new link
const link = document.createElement('a');
// console.log(link);

// Add Attribute
link.setAttribute('href',"#");

// add id
link.id = 'delete-item6';

// add class
link.className = 'delete-item';

// add i
link.innerHTML = `<i class="far fa-trash-alt"></i>`;

// Append link into li
li.appendChild(link);


// Append li as child into ul
// document.querySelector('ul.collection').appendChild(li);




// Replace Element

// create element
const newheading = document.createElement('h2');

// add id
newheading.id = 'task-title';

// add class
newheading.className = 'card-title';

// create text Node
newheading.appendChild(document.createTextNode('Task List'));

// console.log(newheading);

// Get old heading
const oldheading = document.getElementById('task-title');

// Get parent
const cardaction = document.querySelector('.card-action');
// console.log(cardaction);

// Replace Now (new element , old element)
cardaction.replaceChild(newheading,oldheading);



// Remove Element
const lts = document.querySelectorAll('li');
// lts[1].remove();

// Remove child element
const ullts = document.querySelector('ul');
ullts.removeChild(lts[2]);



//Class
const firstli = document.querySelector('li');
const flink = firstli.children[0];
let lk;

lk = flink.className;
lk = flink.classList;

//Replace class (old,new)
flink.classList.replace('green','blue');

// Add class
flink.classList.add('red');


// console.log(firstli);


// Attribute
lk = flink.getAttribute('href');
// lk = flink.setAttribute('href','https://google.com');
lk = flink.hasAttribute('target');
// console.log(lk);


// addEventListener(type,function);
let clearbtn = document.querySelector('.clear-tasks');
// console.log(clearbtn);

// Method 1
// clearbtn.addEventListener('click',function(e){
// e.preventDefault();
// console.log("Hello World");
// });


// Method2
// clearbtn.addEventListener('click',myclick);
function myclick(e){
 e.preventDefault();
 console.log("Hello Myanmar");

 let val;

 val = e;

 // Event target element
 val = e.target;
 val = e.target.className;
 val = e.target.classList;

 e.target.innerText = 'Click Me';

 // Event type
 val = e.type;

 // Coordinates event relative to the window
 val = e.clientY;
 val = e.clientX;

 // Coordinates event relative to the element
 val = e.offsetY;
 val = e.offsetX;

 console.log(val);
}


// Mouse Event
clearbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');
// console.log(heading);

// click
// clearbtn.addEventListener('click',runevent);

// double click
// clearbtn.addEventListener('dblclick',runevent);

// mousedown
// clearbtn.addEventListener('mousedown',runevent);

// mouseup
// clearbtn.addEventListener('mouseup',runevent);

// mouseenter
// card.addEventListener('mouseenter',runevent);
// mouseenter
// card.addEventListener('mouseover',runevent);

// mouseleave
// card.addEventListener('mouseleave',runevent);
// mouseout
// card.addEventListener('mouseout',runevent);

// mousemove
// card.addEventListener('mousemove',runevent);


function runevent(e){
 console.log(`Event type = ${e.type}`);

 heading.textContent= `MouseX : ${e.offsetX} MouseY: ${e.offsetY}`

 document.body.style.background=`rgba(${e.offsetX},${e.offsetY},1)`;


}





let taskinput = document.getElementById('task');
const form = document.querySelector('form');

// Get value by submit
// form.addEventListener('submit',runevent2);


const h2 = document.querySelector('h2');

// keydown
// taskinput.addEventListener('keydown',runevent2);

// keyup
// taskinput.addEventListener('keyup',runevent2);

// keypress
// taskinput.addEventListener('keypress',runevent2);

// focus
// taskinput.addEventListener('focus',runevent2);


// blur
// taskinput.addEventListener('blur',runevent2);

// cut
// taskinput.addEventListener('cut',runevent2);

// paste
// taskinput.addEventListener('paste',runevent2);

// input ( any kind of input event )
// taskinput.addEventListener('input',runevent2);


function runevent2(e){
 // e.preventDefault();
 console.log(`Event Type = ${e.type}`);


 // Get input value
 console.log(taskinput.value);

 // var getvalue = taskinput.value;
 // taskinput.value = getvalue.toLowerCase();
	
}



// Event Bubbling VS Event Delegation

// Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
// console.log('i am card-title');
// });
// document.querySelector('.card-content').addEventListener('click',function(){
// console.log('i am card-content');
// });
// document.querySelector('.card').addEventListener('click',function(){
// console.log('i am card');
// });

// Event Delegation
const delitem = document.querySelector('.delete-item');
// console.log(delitem);
document.body.addEventListener('click',deleteitem);

function deleteitem(e){
 // console.log('delete item');

 // console.log(e.target);
 // console.log(e.target.className);

 // if(e.target.className === "far fa-trash-alt"){
 // console.log('delete item');
 // }


 // if(e.target.parentElement.className === "delete-item"){
 // console.log('delete item');
 // }


 if(e.target.parentElement.classList.contains('delete-item')){
  // console.log('delete item');

  e.target.parentElement.parentElement.remove();
 }
}



// const select = document.querySelector('select');
// select.addEventListener('change',runevent3);

// function runevent3(e){
// console.log (`Event Type = ${e.type} ` );

// console.log(e.target.value);
// }



/*let fullname = 'tin htut aung';
// console.log(fullname[4]);
fullname = Array.from(fullname);
console.log(fullname);
*/


document.querySelector('form').addEventListener('submit',function(e){
 e.preventDefault();
 // console.log(123);

 const newtask = document.getElementById('task').value;
 // console.log(newtask);
 // localStorage.setItem('task',newtask);

 let tasks;

 if(localStorage.getItem('tasks') === null){
  tasks = [];
 }else{
  tasks = JSON.parse(localStorage.getItem('tasks'));
 }

 tasks.push(newtask);

 localStorage.setItem('tasks',JSON.stringify(tasks));

 // console.log(tasks);

 window.alert("New Task Saved")


});


// console.log(typeof JSON.parse(localStorage.getItem('tasks')));

let mytasks = localStorage.getItem('tasks');
mytasks = JSON.parse(mytasks);

// mytasks.forEach(function(mytask){
// 		console.log(mytask);
// });


// ATT9 WDF


// localStorage (STRING DATA TYPE)
// localStorage.setItem('name','Maung Maung');
// localStorage.setItem('age', 40);

// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(typeof name);
// console.log(typeof age);