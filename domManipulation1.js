let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');




//form submit event
form.addEventListener("submit",addItem);

//delete event
itemList.addEventListener("click",removeItem);

//filter events
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();
    //get input value
    let newItem = document.getElementById("item").value + document.getElementById("item2").value;

    let li = document.createElement("li");
    li.className = "list-group-item";
     
   
    li.appendChild(document.createTextNode(newItem));
    

    //create del button
    let deletBtn = document.createElement("button");
    let editbtn = document.createElement("button");

    
    editbtn.className= "btn btn-danger btn-sm float-right delete";
    editbtn.style.backgroundColor="green";
    deletBtn.className = "btn btn-danger btn-sm float-right delete";
    deletBtn.appendChild(document.createTextNode("X")); 
    editbtn.appendChild(document.createTextNode("edit")); 
    li.appendChild(deletBtn);
    li.appendChild(editbtn);

    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
})
}



