// console.log(document.domain);
// document.title = 123;
// console.log(document.title);
let headerTitle = document.getElementById("header-title");
let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3'
header.style.borderBottom = 'solid 4px black';
let t = document.getElementsByClassName('title');
// console.log(t);
let a = document.querySelector('.title');
// console.log(a);
a.style.color = 'green';
let li = document.getElementsByClassName("list-group-item");
li[2].style.backgroundColor="green";
li[0].style.fontWeight = 'bold';
li[1].style.fontWeight = 'bold';
li[2].style.fontWeight = 'bold';
li[3].style.fontWeight = 'bold';

let li2 = document.getElementsByTagName('li');
for(let i=0; i<li2.length; i++){
    li2[i].style.backgroundColor="grey";
}