// // console.log(document.domain);
// // document.title = 123;
// // console.log(document.title);
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'hello';
// // headerTitle.innerText = 'goodbye';
// // headerTitle.innerHTML = '<h3>Hello</h3'
// header.style.borderBottom = 'solid 4px black';
// let t = document.getElementsByClassName('title');
// // console.log(t);
// let a = document.querySelector('.title');
// // console.log(a);
// a.style.color = 'green';
// let li = document.getElementsByClassName("list-group-item");
// li[2].style.backgroundColor="green";
// li[0].style.fontWeight = 'bold';
// li[1].style.fontWeight = 'bold';
// li[2].style.fontWeight = 'bold';
// li[3].style.fontWeight = 'bold';

// let li2 = document.getElementsByTagName('li');
// for(let i=0; i<li2.length; i++){
//     li2[i].style.backgroundColor="grey";
// }
// let second = document.querySelector('.list-group-item:nth-child(2)');
// let third = document.querySelector('.list-group-item:nth-child(3)');
// //second.style.backgroundColor="green";
// third.style.color="grey";
// let lis = document.querySelectorAll('.list-group-item');
// lis[1].style.color="green";
// for(let i=0; i<lis.length; i++){
//     if(Math.floor(i%2)==0){
//         lis[i].style.backgroundColor="green";
//     }
// }

//traversing dom
let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';

//childNodes
itemList.children[2].style.color='red';

//console.log(itemList.firstChild);

//console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color='green';
itemList.lastElementChild.style.color='blue';;


//nextsibling

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousElementSibling);
//console.log(itemList.previousSibling);
itemList.previousElementSibling.style.borderBottom='solid 4px black';

//create element
//create a div
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';

//add atribute of title of value
newDiv.setAttribute('title','hello Div');//create text Node
let newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);
//putting it in dom
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

console.log(newDiv);
