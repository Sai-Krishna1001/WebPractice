let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deletebtn = document.createElement('button');

    // Add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-end delete';

    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deletebtn);

    itemList.appendChild(li);   
}

// Remove item
function removeItem(e){
    e.preventDefault();
   if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
   }
}

// FilterItems
function filterItems(e){
    // e.preventDefault();
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get list items
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

