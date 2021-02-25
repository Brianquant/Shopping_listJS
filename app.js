// Global vars
const form = document.querySelector('#item-form');
const itemList = document.querySelector('#item-collection');
const clearBtn = document.querySelector('#clear-items');
const filter = document.querySelector('#filter');
const itemInput = document.querySelector('#item');
const quantInput = document.querySelector('#quant');
const brandInput = document.querySelector('#brand');

// Load all event listerners
loadEventListerners();

// Events
function loadEventListerners() {
    // add item
    form.addEventListener('submit', addItem);
    // remove item
    itemList.addEventListener('click', removeItem);
    //  remove all
    clearBtn.addEventListener('click', removeAll);
    // filter items
    filter.addEventListener('keyup', filterItems);
}

// Add Item
function addItem(e) {
    if (itemInput.value === '' && quantInput.value === '' && brandInput.value === '') {
        alert('Place an item in!')
    }


    // create div
    const div = document.createElement('div');
    // create class
    div.className = 'item';
    // create li
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item list-group-item-primary d-flex justify-content-around';
    // append li to div
    div.appendChild(li);
    // create div for item
    const divItem = document.createElement('div');
    // append divItem to div
    li.appendChild(divItem)
    // append to li & create text node 
    divItem.appendChild(document.createTextNode(itemInput.value));
    // create div for quantity
    const divQuant = document.createElement('div');
    // append divItem to div
    li.appendChild(divQuant)
    // append to li & create text node 
    divQuant.appendChild(document.createTextNode(quantInput.value));
    // create div for brand
    const divBrand = document.createElement('div');
    // append divbrand to div
    li.appendChild(divBrand)
    // append to li & create text node 
    divBrand.appendChild(document.createTextNode(brandInput.value));
    // create li for icons
    const liIcon = document.createElement('li');
    // add class to li
    liIcon.className = 'list-group-item list-group-item-danger d-flex justify-content-around';
    // append to div
    div.appendChild(liIcon);
    // create link for delete icon
    const linkEd = document.createElement('a');
    // create att 
    const attEd = document.createAttribute('href');
    // add value
    attEd.value = '#';
    // append att to link
    linkEd.setAttributeNode(attEd);
    // add a class for linkDel
    linkEd.className = 'edit';
    // add icon
    linkEd.innerHTML = '<i class="far fa-edit"></i>';
    // append link to li
    liIcon.appendChild(linkEd)
    // create link for edit
    const linkDel = document.createElement('a');
    // create att for del link
    const attDel = document.createAttribute('href');
    // add value
    attDel.value = '#';
    // append att to linkDel
    linkDel.setAttributeNode(attDel);
    // add class for edit link
    linkDel.className = 'delete';
    // create delete icon
    linkDel.innerHTML = '<i class="far fa-trash-alt"></i>';
    // append linkDel to liIcon
    liIcon.appendChild(linkDel);
    // append div to ul
    itemList.appendChild(div);

    // console.log(itemList);

    // Clear input
    itemInput.value = '';
    quantInput.value = '';
    brandInput.value = '';


    e.preventDefault();

}

// Remove Item
function removeItem(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        return e.target.parentElement.parentElement.parentElement.remove();

    }

}



// Remove all items
function removeAll() {
    while (itemList.firstChild) {
        console.log(itemList.removeChild(itemList.firstChild));
    }
}

// Filter items
function filterItems(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

    });
}





